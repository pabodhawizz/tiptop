/* Tip Top website: assessment form, coverage, FAQ, final CTA. */
const { Button: ACButton, SectionLabel: ACLabel, Badge: ACBadge, Input: ACInput, Select: ACSelect, Textarea: ACTextarea, Accordion: ACAccordion, Toast: ACToast } = ((k) => window[k] || {})(Object.keys(window).find((x) => /DesignSystem_/.test(x)));

function Assessment() {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [type, setType] = React.useState('');
  const [service, setService] = React.useState('');
  const [notes, setNotes] = React.useState('');
  const [sent, setSent] = React.useState(false);

  const submit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3200);
  };

  return (
    <section id="assessment" data-screen-label="Assessment" style={{ background: 'var(--ink)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--sectionpad) var(--gutter)' }}>
        <div className="aa-assess-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <ACLabel inverse as="p">Free Assessment</ACLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(34px, 3.6vw, 50px)', letterSpacing: '-0.02em', lineHeight: 1.3, color: 'var(--white)', margin: '24px 0 0' }}>
              Start with a walkthrough,<br />not a price list.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.5, lineHeight: 1.7, color: 'var(--text-on-dark-secondary)', margin: '26px 0 0', maxWidth: '46ch' }}>
              A quick, no-obligation assessment of your space, followed by a tailored cleaning plan with clear, upfront pricing. No surprises on the day.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 32 }}>
              {['Free on-site or photo-based assessment', 'Tailored plan and exact quote before we start', 'Same-week booking, Mon–Sat 8AM–6PM'].map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <CheckIcon size={16} color="var(--aqua)" />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, color: 'var(--white)' }}>{t}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 44, flexWrap: 'wrap' }}>
              <ACButton variant="mint" size="lg" href={WA_URL} icon={<WaIcon size={18} />}>Speak With Our Team</ACButton>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-on-dark-secondary)' }}>or send the form and we reply on WhatsApp</span>
            </div>
          </div>
          <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: 40 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px 18px' }}>
              <ACInput label="Full name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
              <ACInput label="Phone (WhatsApp)" placeholder="+971 …" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <ACSelect label="Property type" placeholder="Select…" value={type} onChange={(e) => setType(e.target.value)}
                options={['Apartment', 'Villa', 'Townhouse', 'Office', 'Commercial space']} />
              <ACSelect label="Service" placeholder="Select…" value={service} onChange={(e) => setService(e.target.value)}
                options={['Deep cleaning', 'Move-in / move-out', 'Post-construction', 'Upholstery & carpet', 'Sanitisation', 'Office cleaning', 'Pet grooming at home', 'Pet sitting & walking']} />
              <ACTextarea label="Anything we should know?" placeholder="4-bedroom villa in Al Zahia, two cats, handover on the 28th…" rows={3} style={{ gridColumn: '1 / -1' }} value={notes} onChange={(e) => setNotes(e.target.value)} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginTop: 26, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-secondary)' }}>No obligation. We reply within the hour, Mon–Sat.</span>
              <ACButton variant="mint" onClick={submit}>Request Your Cleaning Plan</ACButton>
            </div>
          </div>
        </div>
      </div>
      <ACToast visible={sent} message="Request sent" detail="We'll reply on WhatsApp shortly." />
    </section>
  );
}

const AREAS = ['Al Majaz', 'Al Khan', 'Al Qasimia', 'Al Taawun', 'Al Nahda', 'Muwaileh', 'Al Majaz Waterfront', 'Al Zahia', 'Tilal City', 'Sharjah Garden City', 'Al Suyoh', 'Maryam Island'];

function Coverage() {
  return (
    <section data-screen-label="Coverage" style={{ background: 'var(--white)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '72px var(--gutter)' }}>
        <div className="aa-coverage-grid" style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <ACLabel as="p">Service Areas</ACLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 30, letterSpacing: '-0.01em', lineHeight: 1.15, margin: '18px 0 10px' }}>
              All of Sharjah, covered.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>
              From Al Majaz to Maryam Island, and the communities in between.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, paddingTop: 6 }}>
            {AREAS.map((a) => <ACBadge key={a} tone="neutral" style={{ fontSize: 14, padding: '8px 18px' }}>{a}</ACBadge>)}
            <ACBadge tone="blue" style={{ fontSize: 14, padding: '8px 18px' }}>+ surrounding communities</ACBadge>
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: 'How much does deep cleaning cost in Sharjah?', a: 'Deep cleaning starts from around AED 199 for a studio and scales with property size: roughly AED 299–599 for a 1–2 bedroom apartment and AED 999+ for villas. Sofa, mattress, carpet and pet-odour treatment are priced per item, and grooming is priced by animal and coat. We confirm the final price after a quick assessment.' },
  { q: "What's included in a deep cleaning service?", a: 'A full top-to-bottom clean: kitchen and bathrooms descaled and sanitised, interior windows, doors, skirting and switches wiped, cabinet fronts cleaned, and detailed floor cleaning, plus dusting throughout. You can add sofa, mattress, carpet, marble polishing or AC cleaning to any booking.' },
  { q: 'How long does a deep clean take?', a: 'Most apartments take about 3–6 hours depending on size and condition; larger villas can take most of a day. We send a team sized to your property so the job is completed in a single visit.' },
  { q: 'Do you offer move-in, move-out and post-construction cleaning?', a: 'Yes. We handle move-in and move-out deep cleans and post-construction or post-renovation cleaning: dust and debris removal, paint and grout cleanup, and full sanitisation before handover.' },
  { q: 'Are your cleaning products safe for children and pets?', a: 'Yes. Low-odour, non-toxic products are our default, not an upgrade. We work in pet homes every day, so nothing we use is left where an animal can reach it.' },
  { q: 'What pet care services do you offer?', a: 'Grooming at home (bath, brush, nail trim, ear care), pet sitting with feeding and medication, and daily walks for dogs, cats and small animals. You get a photo update after every visit. We ask that pets are vaccinated.' },
  { q: 'Can you clean and look after my pets in the same visit?', a: "Yes, and it's the most common booking we take. One team, one price, one visit: the home deep cleaned and de-odourised while your pets are groomed or kept calm out of the way." },
  { q: 'How do I book Tip Top?', a: "Message us on WhatsApp at +971 52 751 5144 or send the assessment form above. We'll confirm your time slot and the final price after a short assessment. Hours: Mon–Sat, 8AM–6PM." },
];

function Faq() {
  return (
    <section id="faq" data-screen-label="FAQ" style={{ background: 'var(--white)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--sectionpad) var(--gutter)' }}>
        <div className="aa-faq-grid" style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 72, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 108 }}>
            <ACLabel as="p">FAQ</ACLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(30px, 3vw, 40px)', letterSpacing: '-0.02em', lineHeight: 1.12, margin: '20px 0 16px' }}>
              Straight answers.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0, maxWidth: '32ch' }}>
              Pricing, inclusions, pet care and booking. If anything's unclear, just ask us on WhatsApp.
            </p>
          </div>
          <ACAccordion defaultOpen={0} items={FAQS} />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Assessment, Coverage, Faq });
