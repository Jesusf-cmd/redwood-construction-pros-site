import { Link } from "react-router-dom";

const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";
const EMAIL = "jose@redwoodconstructionpros.com";

const Footer = () => (
  <footer className="bg-primary px-4 md:px-8 lg:px-16 py-16">
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <p className="text-lg font-extrabold text-primary-foreground mb-3">Redwood Construction Pros</p>
        <p className="text-sm text-primary-foreground/50 mb-4">Licensed & Insured · Moore, OK & OKC Metro</p>
        <div className="flex flex-col gap-2">
          <a href={`tel:${PHONE}`} className="text-primary-foreground/70 no-underline hover:text-accent transition-colors font-medium text-sm">
            {PHONE_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`} className="text-primary-foreground/70 no-underline hover:text-accent transition-colors font-medium text-sm">
            {EMAIL}
          </a>
        </div>
      </div>
      <div>
        <p className="text-sm font-bold text-primary-foreground mb-4">Services</p>
        <div className="flex flex-col gap-2">
          <Link to="/roofing-moore-ok" className="text-sm text-primary-foreground/50 no-underline hover:text-accent transition-colors">Roofing in Moore OK</Link>
          <Link to="/roof-replacement-oklahoma-city" className="text-sm text-primary-foreground/50 no-underline hover:text-accent transition-colors">Roof Replacement OKC</Link>
          <Link to="/hail-damage-roof-repair-moore-ok" className="text-sm text-primary-foreground/50 no-underline hover:text-accent transition-colors">Hail Damage Repair</Link>
          <Link to="/custom-home-builder-moore-ok" className="text-sm text-primary-foreground/50 no-underline hover:text-accent transition-colors">Custom Home Builder</Link>
          <Link to="/metal-buildings-oklahoma-city" className="text-sm text-primary-foreground/50 no-underline hover:text-accent transition-colors">Metal Buildings</Link>
          <Link to="/barndominium-builder-oklahoma" className="text-sm text-primary-foreground/50 no-underline hover:text-accent transition-colors">Barndominiums</Link>
        </div>
      </div>
      <div>
        <p className="text-sm font-bold text-primary-foreground mb-4">Company</p>
        <div className="flex flex-col gap-2">
          <Link to="/about" className="text-sm text-primary-foreground/50 no-underline hover:text-accent transition-colors">About Us</Link>
          <Link to="/service-areas" className="text-sm text-primary-foreground/50 no-underline hover:text-accent transition-colors">Service Areas</Link>
          <Link to="/contact" className="text-sm text-primary-foreground/50 no-underline hover:text-accent transition-colors">Contact</Link>
        </div>
      </div>
    </div>
    <div className="max-w-[1200px] mx-auto mt-10 pt-6 border-t border-primary-foreground/10">
      <p className="text-xs text-primary-foreground/30">© 2025 Redwood Construction Pros LLC. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
