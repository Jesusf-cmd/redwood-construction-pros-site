const cities = [
  { name: "Moore (Home Base)", highlight: true },
  { name: "Oklahoma City", highlight: true },
  { name: "Norman", highlight: false },
  { name: "Midwest City", highlight: false },
  { name: "Del City", highlight: false },
  { name: "Yukon", highlight: false },
  { name: "Mustang", highlight: false },
  { name: "Edmond", highlight: false },
  { name: "Choctaw", highlight: false },
  { name: "Newcastle", highlight: false },
  { name: "Tuttle", highlight: false },
  { name: "Blanchard", highlight: false },
];

const ServiceArea = () => (
  <section id="service-area" className="section-pad bg-warm-white">
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <p className="font-condensed text-[11px] font-semibold tracking-[0.25em] uppercase text-brick flex items-center gap-2.5 mb-4">
            Where We Work
            <span className="block w-10 h-px bg-brick" />
          </p>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.6rem)] font-bold leading-[1.1] text-charcoal">
            Serving the Entire<br /><em className="italic text-brick">OKC Metro</em>
          </h2>
          <p className="mt-5 text-[0.95rem] font-light text-text-mid leading-relaxed max-w-[400px]">
            Based in Moore, we serve homeowners and builders across the Oklahoma City metro area and surrounding communities — typically within a 60-mile radius.
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-6">
            {cities.map((c) => (
              <div key={c.name} className={`text-[0.92rem] flex items-center gap-2 py-1 border-b border-cream-dark ${c.highlight ? "font-semibold text-charcoal" : "text-text-mid"}`}>
                <span className="block w-1.5 h-1.5 bg-brick rounded-full flex-shrink-0" />
                {c.name}
              </div>
            ))}
          </div>
          <p className="mt-6 text-[0.85rem] text-text-light">Not sure if we cover your area? Call or text us — we likely do.</p>
        </div>

        {/* Map */}
        <div className="bg-cream border border-cream-dark p-8 flex items-center justify-center aspect-square">
          <svg viewBox="0 0 400 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[380px]">
            <path d="M20 80 L380 80 L380 280 L340 280 L340 300 L200 300 L200 320 L20 320 Z" fill="hsl(var(--cream-dark))" stroke="hsl(var(--border))" strokeWidth="1.5" />
            <rect x="20" y="50" width="120" height="30" fill="hsl(var(--cream-dark))" stroke="hsl(var(--border))" strokeWidth="1.5" />
            <circle cx="200" cy="195" r="55" fill="hsla(7,72%,36%,0.08)" stroke="hsla(7,72%,36%,0.2)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="200" cy="215" r="8" fill="hsl(var(--brick))" stroke="#fff" strokeWidth="2" />
            <text x="212" y="219" fontFamily="Barlow Condensed, sans-serif" fontSize="11" fontWeight="700" fill="hsl(var(--charcoal))" letterSpacing="0.04em">MOORE</text>
            <circle cx="190" cy="190" r="5" fill="hsl(var(--charcoal-light))" stroke="#fff" strokeWidth="1.5" />
            <text x="200" y="187" fontFamily="Barlow Condensed, sans-serif" fontSize="10" fill="hsl(var(--text-mid))">OKC</text>
            <circle cx="195" cy="235" r="4" fill="hsl(var(--text-light))" stroke="#fff" strokeWidth="1" />
            <text x="205" y="238" fontFamily="Barlow Condensed, sans-serif" fontSize="9" fill="hsl(var(--text-light))">Norman</text>
            <circle cx="195" cy="162" r="4" fill="hsl(var(--text-light))" stroke="#fff" strokeWidth="1" />
            <text x="204" y="165" fontFamily="Barlow Condensed, sans-serif" fontSize="9" fill="hsl(var(--text-light))">Edmond</text>
            <circle cx="153" cy="192" r="4" fill="hsl(var(--text-light))" stroke="#fff" strokeWidth="1" />
            <text x="118" y="196" fontFamily="Barlow Condensed, sans-serif" fontSize="9" fill="hsl(var(--text-light))">Yukon</text>
            <circle cx="230" cy="188" r="4" fill="hsl(var(--text-light))" stroke="#fff" strokeWidth="1" />
            <text x="238" y="191" fontFamily="Barlow Condensed, sans-serif" fontSize="9" fill="hsl(var(--text-light))">Midwest City</text>
            <text x="200" y="355" fontFamily="Barlow Condensed, sans-serif" fontSize="10" fontWeight="600" fill="hsl(var(--text-light))" textAnchor="middle" letterSpacing="0.1em">OKLAHOMA</text>
          </svg>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceArea;
