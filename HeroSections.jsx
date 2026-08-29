/* Tip Top website: Hero, trust indicators, positioning. */
const { Button: AAButton, SectionLabel: AALabel } = ((k) => window[k] || {})(Object.keys(window).find((x) => /DesignSystem_/.test(x)));

function Hero() {
  return (
    <section id="top" data-screen-label="Hero" style={{ background: 'var(--white)', paddingTop: 76 }}>
      <div className="aa-hero-grid" style={{
        display: 'grid', gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1fr)', alignItems: 'stretch',
        maxWidth: 1600, margin: '0 auto',
      }}>
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: 'clamp(56px, 11vw, 96px) clamp(20px, 5vw, 64px) clamp(56px, 11vw, 96px) max(var(--gutter), calc((100vw - var(--container-max)) / 2))',
        }}>
          <AALabel as="p">Cleaning &amp; Pet Care in Sharjah</AALabel>
          <h1 className="aa-hero-h1" style={{
            fontFamily: 'var(--font-display)', fontWeight: 550, fontSize: 'clamp(36px, 2.1rem + 2.4vw, 72px)',
            lineHeight: 1.12, letterSpacing: '-0.025em', color: 'var(--ink)', margin: '28px 0 0',
            textWrap: 'balance', maxWidth: '19ch',
          }}>
            Your home in tip-top condition. Your pets too.
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 19, lineHeight: 1.65, color: 'var(--text-body)',
            maxWidth: '46ch', margin: '28px 0 0',
          }}>
            Meticulous deep cleaning for Sharjah homes, villas and workplaces, plus gentle grooming, sitting and walking for the animals who live in them.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 40, flexWrap: 'wrap' }}>
            <AAButton variant="mint" size="lg" href="#assessment">Book a Cleaning Assessment</AAButton>
            <AAButton variant="secondary" size="lg" href="#pets">See Pet Care</AAButton>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary)', margin: '26px 0 0' }}>
            Free on-site assessment · We reply fast on WhatsApp
          </p>
        </div>
        <div style={{ position: 'relative', minHeight: 560 }}>
          <img src="../../assets/photography/brand-hero-cleaner.png" alt="A Tip Top cleaner smoothing a throw in a pristine sunlit Sharjah living room"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
}

const TRUST_STATS = [
  ['1,000+', 'homes cleaned across Sharjah'],
  ['4.9', 'client rating ★★★★★'],
  ['400+', 'pets groomed and cared for'],
  ['7 days', 'available every week'],
];

function TrustBar() {
  return (
    <section aria-label="Trust indicators" style={{ background: 'var(--white)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="aa-trust-grid" style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      }}>
        {TRUST_STATS.map(([num, label], i) => (
          <div key={num} style={{
            padding: '30px 24px', display: 'flex', flexDirection: 'column', gap: 4,
            borderLeft: i === 0 ? 'none' : '1px solid var(--border-subtle)',
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 30, letterSpacing: '-0.01em', color: 'var(--ink)' }}>{num}</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-secondary)' }}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Positioning() {
  return (
    <section data-screen-label="Positioning" style={{ background: 'var(--mist)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--sectionpad) var(--gutter)' }}>
        <div className="aa-pos-grid" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 72, alignItems: 'start' }}>
          <div>
            <AALabel as="p">Protect More Than Appearance</AALabel>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px, 3.4vw, 48px)',
              lineHeight: 1.12, letterSpacing: '-0.02em', margin: '24px 0 0', textWrap: 'balance',
            }}>
Most cleaners make a space look clean.<br />We make a home genuinely cared for.
            </h2>
          </div>
          <div style={{ paddingTop: 8 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--text-body)', margin: 0 }}>
              In Sharjah, "clean" too often means cosmetic: surfaces look tidy but aren't truly hygienic, and homes with animals get the worst of it. Tip Top holds one standard for the whole home: verifiably hygienic, dependably delivered, safe for every pair of paws in it.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28 }}>
              {[
                "Your family's health",
                'Your home and its value',
                'Your pets, groomed and looked after',
                'Your peace of mind',
              ].map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <CheckIcon size={16} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--ink)' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, TrustBar, Positioning });
