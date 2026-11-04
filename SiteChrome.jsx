/* Tip Top website: shared chrome: Nav, Footer, StickyWhatsApp, icons. */
const DS = (() => {
  const k = Object.keys(window).find((x) => /DesignSystem_/.test(x));
  return (k && window[k]) || {};
})();
const { Button, IconButton, SectionLabel } = DS;

const WA_URL = 'https://wa.me/971527515144';

function WaIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ArrowIcon({ size = 18, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={style}>
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CheckIcon({ size = 18, color = 'var(--tip-teal)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* Uses the design-system Logo when the bundle exposes it; falls back to the same lockup inline. */
function BrandLogo({ inverse = false, compact = false, size = 'md', href, style }) {
  if (DS.Logo) return <DS.Logo inverse={inverse} compact={compact} size={size} href={href} style={style} />;
  const scale = size === 'lg' ? 1.5 : size === 'sm' ? 0.78 : 1;
  const Tag = href ? 'a' : 'div';
  return (
    <Tag href={href} style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: 9 * scale, textDecoration: 'none', lineHeight: 1, ...style }}>
      <img src="../../assets/logo.svg" alt="tip top fm" style={{
        display: 'block', width: 26 * scale * (1218 / 525), height: 26 * scale,
      }} />
      {!compact && (
        <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 8.5 * scale, letterSpacing: '0.24em', textTransform: 'uppercase', color: inverse ? 'var(--text-on-dark-secondary)' : 'var(--slate)' }}>Cleaning &amp; Pet Care · Sharjah</span>
      )}
    </Tag>
  );
}

/* Site header and footer use the wordmark alone, no descriptor line. */
function LogoLockup({ inverse = false, compact = true }) {
  return <BrandLogo href="#top" inverse={inverse} compact={compact} />;
}

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Pet Care', href: '#pets' },
  { label: 'Why Tip Top', href: '#why' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
];

function NavLink({ href, children }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 14.5,
        color: hover ? 'var(--tip-teal)' : 'var(--ink)', textDecoration: 'none',
        transition: 'color var(--duration-fast) var(--ease-standard)',
      }}>{children}</a>
  );
}

function BurgerButton({ open, onClick }) {
  const bar = { display: 'block', width: 20, height: 1.5, background: 'var(--ink)', borderRadius: 2, transition: 'transform var(--duration-fast) var(--ease-standard), opacity var(--duration-fast) var(--ease-standard)' };
  return (
    <button type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="aa-mobile-menu" onClick={onClick} className="aa-nav-burger"
      style={{
        width: 44, height: 44, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 5,
        background: 'transparent', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', padding: 0,
      }}>
      <span style={{ ...bar, transform: open ? 'translateY(3.25px) rotate(45deg)' : 'none' }} />
      <span style={{ ...bar, transform: open ? 'translateY(-3.25px) rotate(-45deg)' : 'none' }} />
    </button>
  );
}

function MobileMenu({ open, onClose }) {
  return (
    <div id="aa-mobile-menu" aria-hidden={!open} style={{
      position: 'fixed', top: 76, left: 0, right: 0, bottom: 0, zIndex: 190,
      background: 'var(--white)', borderTop: '1px solid var(--border-subtle)',
      padding: '28px var(--gutter) 40px', overflowY: 'auto',
      display: 'flex', flexDirection: 'column', gap: 4,
      opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
      visibility: open ? 'visible' : 'hidden',
      transform: open ? 'none' : 'translateY(-8px)',
      transition: 'opacity var(--duration-medium) var(--ease-standard), transform var(--duration-medium) var(--ease-standard), visibility var(--duration-medium) var(--ease-standard)',
    }}>
      {NAV_LINKS.map((l) => (
        <a key={l.href} href={l.href} onClick={onClose} style={{
          fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 26, letterSpacing: '-0.02em',
          color: 'var(--ink)', textDecoration: 'none', padding: '14px 0',
          borderBottom: '1px solid var(--border-subtle)',
        }}>{l.label}</a>
      ))}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 28 }}>
        {Button ? <Button variant="mint" size="lg" href="#assessment" onClick={onClose}>Book an Assessment</Button> : null}
        {Button ? <Button variant="secondary" size="lg" href={WA_URL} icon={<WaIcon size={18} />}>Chat on WhatsApp</Button> : null}
      </div>
      <a href="tel:+971527515144" style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-secondary)', textDecoration: 'none', marginTop: 22 }}>+971 52 751 5144 · Mon – Sat, 8AM – 6PM</a>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      background: (scrolled || menu) ? 'rgba(255,255,255,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: (scrolled && !menu) ? '1px solid var(--border-subtle)' : '1px solid transparent',
      transition: 'background var(--duration-medium) var(--ease-standard), border-color var(--duration-medium) var(--ease-standard)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)',
        height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      }}>
        <LogoLockup />
        <nav aria-label="Main" style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="aa-nav-links">
          {NAV_LINKS.map((l) => <NavLink key={l.href} href={l.href}>{l.label}</NavLink>)}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Button variant="ghost" size="sm" href="tel:+971527515144" style={{ display: 'inline-flex' }} className="aa-nav-phone">+971 52 751 5144</Button>
          <Button variant="mint" size="sm" href="#assessment" className="aa-nav-cta">Book an Assessment</Button>
          <BurgerButton open={menu} onClick={() => setMenu((v) => !v)} />
        </div>
      </div>
      <MobileMenu open={menu} onClose={() => setMenu(false)} />
    </header>
  );
}

function StickyWhatsApp() {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={WA_URL} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: 'fixed', right: 24, bottom: 24, zIndex: 300,
        display: 'flex', alignItems: 'center', gap: 10,
        height: 56, padding: '0 22px',
        borderRadius: 'var(--radius-pill)',
        background: hover ? 'var(--action-whatsapp-hover)' : 'var(--action-whatsapp)',
        color: 'var(--white)', textDecoration: 'none',
        fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 15,
        boxShadow: '0 8px 28px rgba(37, 211, 102, 0.34)',
        transition: 'background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
        transform: hover ? 'translateY(-1px)' : 'none',
      }}>
      <WaIcon size={20} />
      <span className="aa-wa-label">WhatsApp</span>
    </a>
  );
}

function FooterCol({ title, links }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <span style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--aqua)' }}>{title}</span>
      {links.map(([label, href]) => (
        <a key={label} href={href} style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--text-on-dark-secondary)', textDecoration: 'none' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--white)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-on-dark-secondary)'; }}>{label}</a>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ position: 'relative', background: '#000', color: 'var(--text-on-dark-secondary)', overflow: 'hidden' }} data-screen-label="Footer">
      <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 'clamp(560px, 62vw, 880px)' }}>
        <img loading="lazy" decoding="async" src="../../assets/photography/brand-footer-dusk.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.58) saturate(0.9)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.68) 42%, rgba(0,0,0,0.92) 75%, #000 97%)' }} />
      </div>
      <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(96px, 11vw, 150px) var(--gutter) clamp(120px, 15vw, 210px)', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(34px, 4.4vw, 60px)',
          letterSpacing: '-0.02em', lineHeight: 1.18, color: 'var(--white)', margin: '0 auto', maxWidth: '20ch', textWrap: 'balance',
        }}>
Ready for a home that's tip top, top to bottom?
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.82)', maxWidth: '46ch', margin: '22px auto 0' }}>
          Book a free assessment and we'll build one plan around your home and your pets, with clear pricing before we begin.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap' }}>
          {DS.Button ? <DS.Button variant="mint" size="lg" href="#assessment">Book a Cleaning Assessment</DS.Button> : null}
          {DS.Button ? <DS.Button variant="secondary" size="lg" inverse href={WA_URL} icon={<WaIcon size={18} />}>Chat on WhatsApp</DS.Button> : null}
        </div>
      </div>
      <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div className="aa-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr', gap: 48, paddingBottom: 64 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <LogoLockup inverse />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.7, maxWidth: '34ch', margin: 0 }}>
              Meticulous cleaning and gentle pet care for Sharjah homes, so your space, your family and your animals are all in tip-top condition.
            </p>
          </div>
          <FooterCol title="Services" links={[
            ['Residential deep cleaning', '#services'],
            ['Villas & townhouses', '#villa'],
            ['Offices & commercial', '#services'],
            ['Upholstery & carpets', '#services'],
            ['Pet grooming at home', '#pets'],
            ['Pet sitting & walking', '#pets'],
            ['Move-in / move-out', '#services'],
          ]} />
          <FooterCol title="Company" links={[
            ['Why Tip Top', '#why'],
            ['Our process', '#process'],
            ['Projects', '#projects'],
            ['FAQ', '#faq'],
            ['Book an assessment', '#assessment'],
          ]} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--aqua)' }}>Contact</span>
            <a href={WA_URL} style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--white)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
              <WaIcon size={15} /> +971 52 751 5144
            </a>
            <a href="mailto:info@tiptopfm.com" style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--text-on-dark-secondary)', textDecoration: 'none' }}>info@tiptopfm.com</a>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 14.5 }}>Al Majaz, Sharjah · United Arab Emirates</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 14.5 }}>Mon – Sat · 8AM – 6PM</span>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid var(--border-on-dark)', padding: '24px 0 28px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
        }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13 }}>© 2026 Tip Top Facility Management. All rights reserved.</span>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--aqua)' }}>
            Tip Top, Top to Bottom.
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { WaIcon, ArrowIcon, CheckIcon, BrandLogo, LogoLockup, Nav, MobileMenu, BurgerButton, StickyWhatsApp, Footer, WA_URL });
