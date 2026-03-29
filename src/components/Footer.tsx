const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";
const EMAIL = "jose@redwoodconstructionpros.com";

const Footer = () => (
  <footer className="bg-primary px-4 md:px-8 lg:px-16 py-12">
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div>
        <p className="text-lg font-extrabold text-primary-foreground mb-1">Redwood Construction Pros</p>
        <p className="text-sm text-primary-foreground/50">Licensed & Insured · Oklahoma City Metro</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 text-sm">
        <a href={`tel:${PHONE}`} className="text-primary-foreground/70 no-underline hover:text-accent transition-colors font-medium">
          {PHONE_DISPLAY}
        </a>
        <a href={`mailto:${EMAIL}`} className="text-primary-foreground/70 no-underline hover:text-accent transition-colors font-medium">
          {EMAIL}
        </a>
      </div>
    </div>
    <div className="max-w-[1200px] mx-auto mt-8 pt-6 border-t border-primary-foreground/10">
      <p className="text-xs text-primary-foreground/30">© 2025 Redwood Construction Pros LLC. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
