/* Tip Top website: Services index, pet care, Why Tip Top pillars, brand story (Ink), villa feature. */
const { Button: ASButton, SectionLabel: ASLabel, Badge: ASBadge } = ((k) => window[k] || {})(Object.keys(window).find((x) => /DesignSystem_/.test(x)));

const SERVICES = [
  {
    n: '01', title: 'Residential deep cleaning',
    desc: 'Top-to-bottom deep cleaning for homes of every size.',
    scopes: ['Villa', 'Townhouse', 'Studio', '1–4+ Bed'],
    img: '../../assets/photography/brand-kitchen-cleaner.png',
    alt: 'Cleaner wiping a marble kitchen counter',
  },
  {
    n: '02', title: 'Upholstery & specialised cleaning',
    desc: 'Deep extraction cleaning for sofas, carpets, mattresses and curtains.',
    scopes: ['Sofa', 'Carpet', 'Mattress', 'Curtain'],
    img: '../../assets/photography/brand-upholstery-tech.png',
    alt: 'A technician deep-cleaning a sofa with an extraction machine',
  },
  {
    n: '03', title: 'Office & commercial cleaning',
    desc: 'Spotless offices, retail, restaurants and commercial spaces.',
    scopes: ['Offices', 'Retail', 'Restaurants', 'Buildings'],
    img: '../../assets/photography/brand-office-team.png',
    alt: 'A Tip Top team cleaning a bright Sharjah office',
  },
  {
    n: '04', title: 'Move-in, move-out & post-construction',
    desc: 'Fresh-start cleaning for moves, handovers and renovations.',
    scopes: ['Move-In', 'Move-Out', 'Post-Construction'],
    img: '../../assets/photography/brand-move-out-clean.png',
    alt: 'A living room transformed, before and after',
  },
  {
    n: '05', title: 'Sanitisation, glass & windows',
    desc: 'Full disinfection plus streak-free glass and window cleaning.',
    scopes: ['Sanitisation', 'Glass & Window'],
    img: '../../assets/photography/brand-glass-detail.png',
    alt: 'Water droplets on a blue-white surface',
  },
  {
    n: '06', title: 'Pet grooming & home pet care',
    desc: 'Gentle grooming, sitting and walking, plus deep cleaning built for pet homes.',
    scopes: ['Grooming', 'Sitting', 'Walking', 'Odour Removal'],
    img: '../../assets/photography/brand-pet-grooming-v2.png',
    alt: 'A groomer gently brushing a relaxed golden retriever at home',
  },
  {
    n: '07', title: 'AC, pest control & building care',
    desc: 'AC duct and coil, pest control, facade, water tank and marble polishing.',
    scopes: ['AC Duct & Coil', 'Pest Control', 'Marble'],
    img: '../../assets/photography/brand-hero-living-room.png',
    alt: 'A cared-for Sharjah apartment interior',
  },
];

function ServiceRow({ s, active, onEnter }) {
  return (
    <a href="#assessment" onMouseEnter={onEnter} style={{
      display: 'grid', gridTemplateColumns: '56px 1fr auto', gap: 24, alignItems: 'center',
      padding: '30px 8px', textDecoration: 'none',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'transparent',
      transition: 'background var(--duration-fast) var(--ease-standard)',
    }}>
      <span style={{
        fontFamily: 'var(--font-body)', fontSize: 14,
        color: active ? 'var(--tip-teal)' : 'var(--slate)',
        transition: 'color var(--duration-fast) var(--ease-standard)',
      }}>{s.n}</span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 24, letterSpacing: '-0.01em',
          color: active ? 'var(--tip-teal)' : 'var(--ink)',
          transition: 'color var(--duration-fast) var(--ease-standard)',
        }}>{s.title}</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-secondary)' }}>{s.desc}</span>
        <span style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 2 }}>
          {s.scopes.map((sc) => <ASBadge key={sc} tone="outline" style={{ fontSize: 12, padding: '3px 10px' }}>{sc}</ASBadge>)}
        </span>
      </span>
      <ArrowIcon size={20} style={{
        color: active ? 'var(--tip-teal)' : 'var(--border-strong)',
        transform: active ? 'translateX(4px)' : 'none',
        transition: 'color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
      }} />
    </a>
  );
}

function Services() {
  const [active, setActive] = React.useState(0);
  return (
    <section id="services" data-screen-label="Services" style={{ background: 'var(--white)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--sectionpad) var(--gutter)' }}>
        <div className="aa-services-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 72, alignItems: 'start' }}>
          <div>
            <ASLabel as="p">What We Do</ASLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px, 3.4vw, 46px)', letterSpacing: '-0.02em', lineHeight: 1.12, margin: '22px 0 40px' }}>
Cleaning and pet care,<br />presented simply.
            </h2>
            <div style={{ borderTop: '1px solid var(--border-subtle)' }}>
              {SERVICES.map((s, i) => <ServiceRow key={s.n} s={s} active={active === i} onEnter={() => setActive(i)} />)}
            </div>
          </div>
          <div className="aa-services-side" style={{ position: 'sticky', top: 108, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: 420, position: 'relative' }}>
              {SERVICES.map((s, i) => (
                <img key={s.n} src={s.img} alt={active === i ? s.alt : ''} style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
                  opacity: active === i ? 1 : 0,
                  transition: 'opacity var(--duration-slow) var(--ease-standard)',
                }} />
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>
              Every service is delivered by trained, background-checked teams, and every product we use is safe for children and animals.
            </p>
            <ASButton variant="ghost" href="#assessment">Request Your Cleaning Plan <ArrowIcon size={16} /></ASButton>
          </div>
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    n: '01', title: 'Deeper than the surface',
    body: "We don't stop at tidy. We clean, sanitise and protect, removing what you can't see, so a space is genuinely healthy, not just presentable.",
  },
  {
    n: '02', title: 'Dependable by design',
    body: 'On time, every time. Trained teams and clear checklists mean the same meticulous standard on every visit. No surprises, no excuses.',
  },
  {
    n: '03', title: 'Safe for paws and people',
    body: 'Low-odour, non-toxic products, careful hands and total discretion. We treat your home, your animals and your trust as if they were our own.',
  },
];

function WhyTipTop() {
  return (
    <section id="why" data-screen-label="Why Tip Top" style={{ background: 'var(--mist)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--sectionpad) var(--gutter)' }}>
        <ASLabel as="p">Why Tip Top</ASLabel>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px, 3.4vw, 46px)', letterSpacing: '-0.02em', lineHeight: 1.12, margin: '22px 0 56px', maxWidth: '24ch' }}>
          Three commitments behind every visit.
        </h2>
        <div className="aa-pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48, borderTop: '1px solid var(--border-strong)' }}>
          {PILLARS.map((p) => (
            <div key={p.n} style={{ paddingTop: 28 }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--tip-teal)' }}>{p.n}</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 21, margin: '14px 0 12px' }}>{p.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.7, color: 'var(--text-body)', margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Meaning() {
  return (
    <section data-screen-label="The Name Is The Standard" style={{ background: 'var(--ink)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--sectionpad) var(--gutter)', textAlign: 'center' }}>
        <BrandLogo size="lg" inverse compact style={{ alignItems: 'center' }} />
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: 12.5, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--aqua)', margin: '36px 0 0' }}>
          The Name Is The Standard
        </p>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(36px, 4vw, 56px)',
          letterSpacing: '-0.02em', lineHeight: 1.3, color: 'var(--white)', margin: '22px auto 0', maxWidth: '18ch',
        }}>
          Tip top, top to bottom.
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.75, color: 'var(--text-on-dark-secondary)', maxWidth: '52ch', margin: '32px auto 0' }}>
          <em style={{ color: 'var(--aqua)', fontStyle: 'normal' }}>Tip top</em> means in perfect order: nothing missed, nothing left for later. We hold a Sharjah home to that standard end to end: the floors and the skirting, the kitchen and the litter tray, the family and the animals who live there.
        </p>
      </div>
    </section>
  );
}

function PetCare() {
  const POINTS = [
    ['Daily visits', 'Feeding, fresh water, litter and medication on your schedule, with a photo update every time.'],
    ['Walks', 'Loose-leash walks at the cooler hours of the day, timed and logged so you know exactly what happened.'],
    ['Overnight and travel care', 'Company, routine and a clean, de-odourised home while you are away.'],
  ];
  return (
    <section id="pets" data-screen-label="Pet Care" style={{ background: 'var(--white)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--sectionpad) var(--gutter)' }}>
        <div className="aa-pets-head" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'end', marginBottom: 52 }}>
          <div>
            <ASLabel as="p" style={{ color: 'var(--text-accent-warm)' }}>Pet Care</ASLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px, 3.4vw, 46px)', letterSpacing: '-0.02em', lineHeight: 1.12, margin: '22px 0 0' }}>
              The other half of a<br />cared-for home.
            </h2>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.5, lineHeight: 1.7, color: 'var(--text-body)', margin: 0, maxWidth: '46ch' }}>
            Homes with animals need more than a clean. They need someone who understands both. The same trained, background-checked team sits with and walks your pets, and cleans the home around them with low-odour, non-toxic products.
          </p>
        </div>
        <div className="aa-pets-feature" style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 0, background: 'var(--mist)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          <img src="../../assets/photography/pet-sitting-walking.png" alt="A Tip Top pet carer walking two dogs on a leafy Sharjah street" style={{ display: 'block', width: '100%', height: '100%', minHeight: 400, objectFit: 'cover' }} />
          <div style={{ padding: '44px 46px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, letterSpacing: '-0.01em', margin: 0 }}>Pet caring and walking</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.7, color: 'var(--text-body)', margin: '14px 0 0' }}>
              The same trained, background-checked team that cleans your home looks after your animals in it: no carriers, no kennels, no change of routine.
            </p>
            <div style={{ display: 'grid', gap: 22, marginTop: 30 }}>
              {POINTS.map(([title, body]) => (
                <div key={title} style={{ display: 'grid', gap: 6, paddingTop: 20, borderTop: '1px solid var(--border-subtle)' }}>
                  <h4 style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 15, margin: 0 }}>{title}</h4>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 40, flexWrap: 'wrap' }}>
          <ASButton variant="mint" href="#assessment">Request Pet Care</ASButton>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--text-secondary)' }}>Dogs, cats and small animals · vaccinated homes only</span>
        </div>
      </div>
    </section>
  );
}

function VillaFeature() {
  return (
    <section id="villa" data-screen-label="Villa Feature" style={{ background: 'var(--white)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--sectionpad) var(--gutter)' }}>
        <div className="aa-villa-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <img src="../../assets/photography/brand-villa-family-v2.png" alt="A mother laughing with her son on a spotless villa floor"
              style={{ display: 'block', width: '100%', height: 560, objectFit: 'cover' }} />
          </div>
          <div>
            <ASLabel as="p">Villas & Residences</ASLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px, 3.4vw, 44px)', letterSpacing: '-0.02em', lineHeight: 1.12, margin: '22px 0 0' }}>
              Deep cleaning built around family life.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.5, lineHeight: 1.7, color: 'var(--text-body)', margin: '24px 0 0', maxWidth: '52ch' }}>
              Villas and townhouses carry the most life: children, pets, guests, gardens. Our residential deep clean works room by room against a clear checklist: kitchens and bathrooms descaled and sanitised, interior windows and skirting wiped, floors detailed, pet areas de-odourised, and every product safe for everyone who lives there.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13, margin: '30px 0 0' }}>
              {[
                'Room-by-room checklist, inspected before handover',
                'Low-odour, non-toxic products around children and pets',
                'One visit, teams sized to your property',
              ].map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <CheckIcon size={16} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, color: 'var(--ink)' }}>{t}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 38 }}>
              <ASButton variant="mint" href="#assessment">Get an Assessment</ASButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Services, PetCare, WhyTipTop, Meaning, VillaFeature });
