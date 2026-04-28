const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
}

const ALLOWED_HOSTS = new Set([
  'redwoodconstructionpros.com',
  'www.redwoodconstructionpros.com',
  'redwoodconstrucionprscom.lovable.app',
])

type PrerenderRequestBody = { url?: string; path?: string }

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

function isValidBody(value: unknown): value is PrerenderRequestBody {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false
  const body = value as Record<string, unknown>
  return (body.url === undefined || typeof body.url === 'string') &&
    (body.path === undefined || (typeof body.path === 'string' && body.path.length > 0 && body.path.length <= 500))
}

function resolveTargetUrl(req: Request, body?: PrerenderRequestBody) {
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

  let body: PrerenderRequestBody | undefined
  if (req.method === 'POST') {
    const parsed = await req.json().catch(() => ({}))
    if (!isValidBody(parsed)) {
      return json({ error: 'Body must include optional string fields: url or path' }, 400)
    }
    body = parsed
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
