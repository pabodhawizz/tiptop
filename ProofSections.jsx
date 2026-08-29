/* Tip Top website: Projects (before/after), process, standards, testimonials. */
const { Button: APButton, SectionLabel: APLabel } = ((k) => window[k] || {})(Object.keys(window).find((x) => /DesignSystem_/.test(x)));

/* Interactive before/after reveal using the brand's split transformation photo. */
function BeforeAfter() {
  const [pos, setPos] = React.useState(50);
  const ref = React.useRef(null);
  const dragging = React.useRef(false);

  const update = (clientX) => {
    const r = ref.current.getBoundingClientRect();
    setPos(Math.max(4, Math.min(96, ((clientX - r.left) / r.width) * 100)));
  };
  React.useEffect(() => {
    const move = (e) => { if (dragging.current) update(e.touches ? e.touches[0].clientX : e.clientX); };
    const up = () => { dragging.current = false; };
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', move);
    window.addEventListener('mouseup', up);
    window.addEventListener('touchend', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchend', up);
    };
  }, []);

  const tag = (text, side) => (
    <span style={{
      position: 'absolute', top: 20, [side]: 20,
      fontFamily: 'var(--font-ui)', fontSize: 11.5, fontWeight: 600, letterSpacing: '0.16em', pointerEvents: 'none', zIndex: 2,
      color: 'var(--white)', background: 'rgba(21,63,77,0.55)', padding: '6px 13px', borderRadius: 'var(--radius-pill)',
    }}>{text}</span>
  );

  return (
    <div ref={ref}
      onMouseDown={(e) => { dragging.current = true; update(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; update(e.touches[0].clientX); }}
      style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', height: 520, cursor: 'ew-resize', userSelect: 'none' }}>
      <img src="../../assets/photography/brand-after-living-room.jpg" alt="Sharjah living room after the Tip Top deep clean" draggable="false"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, width: `${pos}%`, overflow: 'hidden' }}>
        <img src="../../assets/photography/brand-before-living-room.jpg" alt="The same living room before cleaning" draggable="false"
          style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${10000 / pos}%`, maxWidth: 'none', objectFit: 'cover' }} />
      </div>
      {tag('BEFORE', 'left')}
      {tag('AFTER', 'right')}
      <div
        onMouseDown={(e) => { dragging.current = true; update(e.clientX); }}
        onTouchStart={(e) => { dragging.current = true; update(e.touches[0].clientX); }}
        style={{ position: 'absolute', top: 0, bottom: 0, left: `${pos}%`, width: 2, background: 'var(--white)', boxShadow: '0 0 12px rgba(21,63,77,0.35)', cursor: 'ew-resize' }}>
        <span style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 44, height: 44, borderRadius: '50%', background: 'var(--white)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3,
          boxShadow: 'var(--shadow-card-hover)',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--tip-teal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 3 12 9 6" /><polyline points="15 6 21 12 15 18" />
          </svg>
        </span>
      </div>
    </div>
  );
}

const PROJECTS = [
  ['Al Majaz Villa', 'Deep Clean · Al Majaz'],
  ['Al Taawun Office', 'Commercial · Al Taawun'],
  ['Al Khan Residence', 'Post-Construction · Al Khan'],
  ['Muwaileh Apartment', 'Move-In & Pet Home · Muwaileh'],
];

function Projects() {
  return (
    <section id="projects" data-screen-label="Before and After" style={{ background: 'var(--white)', borderTop: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--sectionpad) var(--gutter)' }}>
        <div className="aa-projects-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, marginBottom: 48, flexWrap: 'wrap' }}>
          <div>
            <APLabel as="p">Before &amp; After</APLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px, 3.4vw, 46px)', letterSpacing: '-0.02em', lineHeight: 1.12, margin: '22px 0 0' }}>
              See what protected<br />really looks like.
            </h2>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.65, color: 'var(--text-secondary)', maxWidth: '38ch', margin: 0 }}>
            Drag the divider for a real transformation from a Sharjah residence.
          </p>
        </div>
        <BeforeAfter />
        <div className="aa-projects-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: 8 }}>
          {PROJECTS.map(([name, meta], i) => (
            <div key={name} style={{ padding: '24px 24px 0', borderLeft: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, margin: 0 }}>{name}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-secondary)', margin: '6px 0 0' }}>{meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  ['01', 'Assess', 'We evaluate your space and understand exactly what needs attention.'],
  ['02', 'Plan', 'A tailored cleaning plan with a clear, upfront price.'],
  ['03', 'Execute', 'Trained teams deep clean with precision and care.'],
  ['04', 'Inspect', 'A thorough quality check against our room-by-room checklist.'],
  ['05', 'Deliver', "A spotless space handed back, re-cleaned free if anything's missed."],
];

function Process() {
  return (
    <section id="process" data-screen-label="Process" style={{ background: 'var(--mist)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--sectionpad) var(--gutter)' }}>
        <APLabel as="p">How We Work</APLabel>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px, 3.4vw, 46px)', letterSpacing: '-0.02em', lineHeight: 1.12, margin: '22px 0 56px' }}>
          Five steps. Every booking.
        </h2>
        <div className="aa-process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 36, borderTop: '1px solid var(--border-strong)' }}>
          {STEPS.map(([n, title, body]) => (
            <div key={n} style={{ paddingTop: 26 }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--tip-teal)' }}>{n}</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 19, margin: '12px 0 10px' }}>{title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-body)', margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STANDARDS = [
  ['Verifiably hygienic', 'We sanitise and protect, not just polish. Kitchens and bathrooms descaled, high-touch points disinfected.'],
  ['Safe by default', 'Low-odour, non-toxic products as standard, around children, and around animals.'],
  ['Trained & accountable', 'Background-checked professionals, insured, working to written checklists, inspected before handover.'],
  ['One team for both', 'The same background-checked people clean your home and handle your pets. No strangers, no handovers.'],
  ['Guaranteed', "Not happy? We re-clean, free. That's the Tip Top standard."],
];

function Standards() {
  return (
    <section data-screen-label="Standards" style={{ background: 'var(--white)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--sectionpad) var(--gutter)' }}>
        <div className="aa-standards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 72, alignItems: 'center' }}>
          <div>
            <APLabel as="p">Hygiene, Quality & Protection</APLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px, 3.4vw, 44px)', letterSpacing: '-0.02em', lineHeight: 1.12, margin: '22px 0 0' }}>
              Standards you can hold us to.
            </h2>
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', marginTop: 40 }}>
              <img src="../../assets/photography/brand-office-team.png" alt="Two uniformed Tip Top team members cleaning glass and vacuuming an office"
                style={{ display: 'block', width: '100%', height: 300, objectFit: 'cover' }} />
            </div>
          </div>
          <div style={{ borderTop: '1px solid var(--border-subtle)' }}>
            {STANDARDS.map(([title, body]) => (
              <div key={title} style={{ display: 'grid', gridTemplateColumns: '30px 1fr', gap: 18, padding: '26px 4px', borderBottom: '1px solid var(--border-subtle)' }}>
                <CheckIcon size={19} />
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, margin: '0 0 7px' }}>{title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.65, color: 'var(--text-body)', margin: 0 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const QUOTES = [
  ['The team arrived on time and worked through our villa room by room, and it was genuinely spotless. The most thorough cleaning service we\'ve used in Sharjah.', 'Sara M.', 'Al Majaz'],
  ['Booked a deep clean before moving in. Clear upfront price, no surprises, and the apartment looked brand new.', 'James T.', 'Al Nahda'],
  ['They groomed both our dogs while the apartment was being deep cleaned. One visit, one invoice, so we\'ve switched to monthly.', 'Aisha R.', 'Al Zahia'],
];

function Testimonials() {
  return (
    <section data-screen-label="Testimonials" style={{ background: 'var(--mist)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--sectionpad) var(--gutter)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 24, marginBottom: 56, flexWrap: 'wrap' }}>
          <div>
            <APLabel as="p">What Sharjah Clients Say</APLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px, 3.4vw, 46px)', letterSpacing: '-0.02em', lineHeight: 1.12, margin: '22px 0 0' }}>
Trusted across the city.
            </h2>
          </div>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-secondary)' }}>
            <span style={{ color: 'var(--tip-teal)', letterSpacing: '0.1em' }}>★★★★★</span>&ensp;4.9 average rating
          </span>
        </div>
        <div className="aa-quotes-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48, borderTop: '1px solid var(--border-strong)' }}>
          {QUOTES.map(([q, name, area]) => (
            <figure key={name} style={{ margin: 0, paddingTop: 30 }}>
              <blockquote style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 16.5, lineHeight: 1.7, color: 'var(--ink)' }}>
                "{q}"
              </blockquote>
              <figcaption style={{ marginTop: 20, fontFamily: 'var(--font-ui)' }}>
                <span style={{ fontWeight: 600, fontSize: 15, color: 'var(--ink)' }}>{name}</span>
                <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}> · {area}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Projects, Process, Standards, Testimonials });
