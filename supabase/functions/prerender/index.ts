import { z } from 'https://deno.land/x/zod@v3.25.76/mod.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
}

const ALLOWED_HOSTS = new Set([
  'redwoodconstructionpros.com',
  'www.redwoodconstructionpros.com',
  'redwoodconstrucionprscom.lovable.app',
])

const BotRequestSchema = z.object({
  url: z.string().url().optional(),
  path: z.string().min(1).max(500).optional(),
})

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

function resolveTargetUrl(req: Request, body?: z.infer<typeof BotRequestSchema>) {
  const requestUrl = new URL(req.url)
  const explicitUrl = body?.url ?? requestUrl.searchParams.get('url') ?? undefined
  const explicitPath = body?.path ?? requestUrl.searchParams.get('path') ?? undefined

  if (explicitUrl) return new URL(explicitUrl)

  const normalizedPath = explicitPath?.startsWith('/') ? explicitPath : `/${explicitPath ?? ''}`
  return new URL(normalizedPath, 'https://redwoodconstructionpros.com')
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'GET' && req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405)
  }

  const token = Deno.env.get('PRERENDER_TOKEN')
  if (!token) {
    return json({ error: 'Prerender token is not configured' }, 500)
  }

  let body: z.infer<typeof BotRequestSchema> | undefined
  if (req.method === 'POST') {
    const parsed = BotRequestSchema.safeParse(await req.json().catch(() => ({})))
    if (!parsed.success) {
      return json({ error: parsed.error.flatten().fieldErrors }, 400)
    }
    body = parsed.data
  }

  let targetUrl: URL
  try {
    targetUrl = resolveTargetUrl(req, body)
  } catch (_error) {
    return json({ error: 'Invalid URL or path' }, 400)
  }

  if (targetUrl.protocol !== 'https:' || !ALLOWED_HOSTS.has(targetUrl.hostname)) {
    return json({ error: 'URL is not allowed for prerendering' }, 400)
  }

  const prerenderUrl = `https://service.prerender.io/${targetUrl.toString()}`
  const prerenderResponse = await fetch(prerenderUrl, {
    headers: {
      'X-Prerender-Token': token,
      'User-Agent': req.headers.get('user-agent') ?? 'Redwood Construction Pros Prerender Proxy',
    },
  })

  const html = await prerenderResponse.text()

  return new Response(html, {
    status: prerenderResponse.status,
    headers: {
      ...corsHeaders,
      'Content-Type': prerenderResponse.headers.get('content-type') ?? 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=300, s-maxage=86400',
      'X-Robots-Tag': 'all',
    },
  })
})
