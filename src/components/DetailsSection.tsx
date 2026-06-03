const DETAILS = [
  {
    icon: '📅',
    label: 'Date',
    value: '10th June',
    sub: 'Sunday',
    color: 'linear-gradient(135deg, #F8C8DC, #FFD6E7)',
    glow: 'rgba(248, 200, 220, 0.5)',
    delay: 100,
  },
  {
    icon: '⏰',
    label: 'Time',
    value: '12:00 PM',
    sub: 'onwards',
    color: 'linear-gradient(135deg, #DCC6FF, #E8D9FF)',
    glow: 'rgba(220, 198, 255, 0.5)',
    delay: 200,
  },
  {
    icon: '🍽',
    label: 'Lunch',
    value: 'Lunch',
    sub: 'to Follow',
    color: 'linear-gradient(135deg, #FFE0CC, #FFF7ED)',
    glow: 'rgba(255, 224, 204, 0.5)',
    delay: 300,
  },
  {
    icon: '📍',
    label: 'Venue',
    value: 'R & R Colony',
    sub: 'Gunabhadra, Road No. 06, Kotturu',
    color: 'linear-gradient(135deg, #D9EEFF, #FFF9F5)',
    glow: 'rgba(217, 238, 255, 0.5)',
    delay: 400,
  },
];

export default function DetailsSection() {
  return (
    <section id="details" className="section-bg-1 relative py-24 px-4 overflow-hidden">
      {/* Background decorations */}
      <div style={{
        position: 'absolute', top: '5%', right: '3%',
        fontSize: '6rem', opacity: 0.06, animation: 'rotate-slow 30s linear infinite',
        pointerEvents: 'none',
      }}>🌸</div>
      <div style={{
        position: 'absolute', bottom: '8%', left: '2%',
        fontSize: '5rem', opacity: 0.07, animation: 'rotate-slow 25s linear infinite reverse',
        pointerEvents: 'none',
      }}>🌺</div>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            data-aos="fade-down"
            data-aos-duration="600"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '0.9rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C4759A',
              marginBottom: '12px',
            }}
          >
            Mark Your Calendar
          </p>
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="section-title gradient-text"
          >
            Event Details
          </h2>
          <div className="divider-flowers" style={{ marginTop: '16px' }}>
            <div className="divider-line" />
            <span style={{ fontSize: '1.4rem', animation: 'float-gentle 3s ease infinite' }}>💫</span>
            <span style={{ fontSize: '1.2rem', animation: 'float-gentle 3s ease infinite 0.5s' }}>🌸</span>
            <span style={{ fontSize: '1.4rem', animation: 'float-gentle 3s ease infinite 1s' }}>💫</span>
            <div className="divider-line" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DETAILS.map((d, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={d.delay}
              data-aos-duration="700"
              className="glass-card"
              style={{ padding: '36px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
            >
              {/* Gradient top strip */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '4px', background: d.color,
              }} />

              {/* Icon glow bg */}
              <div style={{
                width: '72px', height: '72px',
                background: d.color,
                borderRadius: '50%',
                margin: '0 auto 16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2rem',
                boxShadow: `0 8px 24px ${d.glow}`,
                animation: 'float-gentle 3s ease infinite',
              }}>
                {d.icon}
              </div>

              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.8rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#C4759A',
                marginBottom: '8px',
              }}>
                {d.label}
              </p>

              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: i === 3 ? '1.3rem' : '1.7rem',
                fontWeight: 600,
                color: '#4a3540',
                lineHeight: 1.2,
                marginBottom: '4px',
              }}>
                {d.value}
              </p>

              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.95rem',
                color: '#9b7a8a',
                lineHeight: 1.5,
              }}>
                {d.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div data-aos="fade-up" data-aos-delay="600" className="text-center mt-14">
          <div className="glass inline-block px-8 py-4" style={{ borderRadius: '50px' }}>
            <p style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
              background: 'linear-gradient(135deg, #C4759A, #E7C97F)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Your presence will make it magical ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
