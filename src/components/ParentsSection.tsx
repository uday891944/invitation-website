export default function ParentsSection() {
  return (
    <section className="section-bg-3 relative py-24 px-4 overflow-hidden">
      {/* Decorative rings */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        width: '700px', height: '700px',
        border: '1px solid rgba(217, 165, 165, 0.12)',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        animation: 'rotate-slow 60s linear infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        width: '500px', height: '500px',
        border: '1px solid rgba(220, 198, 255, 0.12)',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        animation: 'rotate-slow 45s linear infinite reverse',
        pointerEvents: 'none',
      }} />

      {/* Floating elements */}
      {['🌸', '💐', '🌺', '🌷', '🌸', '💐'].map((f, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: `${5 + i * 18}%`,
            top: `${15 + (i % 3) * 25}%`,
            fontSize: `${1.2 + Math.random() * 0.8}rem`,
            animation: `float-gentle ${4 + i}s ease infinite ${i * 0.8}s`,
            opacity: 0.5,
            pointerEvents: 'none',
          }}
        >
          {f}
        </span>
      ))}

      <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
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
          With Overflowing Joy
        </p>

        <h2
          data-aos="fade-up"
          data-aos-duration="800"
          className="section-title gradient-text"
          style={{ marginBottom: '20px' }}
        >
          Hosted With Love
        </h2>

        <div className="divider-flowers" style={{ marginBottom: '48px' }}>
          <div className="divider-line" />
          <span style={{ fontSize: '1.4rem', animation: 'float-gentle 2.5s ease infinite' }}>🌸</span>
          <div className="divider-line" />
        </div>

        {/* Parents card */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="glass-card"
          style={{
            padding: '56px 40px',
            position: 'relative',
            overflow: 'hidden',
            animation: 'pulse-glow 4s ease-in-out infinite',
          }}
        >
          {/* Background shimmer */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(248,200,220,0.1), rgba(220,198,255,0.1), rgba(255,214,231,0.1))',
            pointerEvents: 'none',
          }} />

          {/* Avatar pair */}
          <div className="flex items-center justify-center gap-6 mb-10">
            <div
              style={{
                width: '100px', height: '100px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #F8C8DC, #FFD6E7, #DCC6FF)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '3rem',
                boxShadow: '0 12px 40px rgba(248, 200, 220, 0.5)',
                animation: 'float-gentle 4s ease infinite',
              }}
            >
              👨
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '2rem', animation: 'heartbeat 1.5s ease infinite' }}>❤️</span>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                color: '#C4759A',
                textTransform: 'uppercase',
              }}>Forever</span>
            </div>

            <div
              style={{
                width: '100px', height: '100px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #DCC6FF, #E8D9FF, #F8C8DC)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '3rem',
                boxShadow: '0 12px 40px rgba(220, 198, 255, 0.5)',
                animation: 'float-gentle 4s ease infinite 1s',
              }}
            >
              👩
            </div>
          </div>

          {/* Names */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span
              className="font-script gradient-text-gold"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 3.8rem)' }}
            >
              Sriram
            </span>
            <span style={{ fontSize: '2rem', animation: 'heartbeat 2s ease infinite' }}>💝</span>
            <span
              className="font-script gradient-text-gold"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 3.8rem)' }}
            >
              Geethika
            </span>
          </div>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: '#9b7a8a',
            lineHeight: 1.8,
            maxWidth: '480px',
            margin: '0 auto',
          }}>
            "A little girl arrived, bringing sunshine into our lives and turning every ordinary moment into something extraordinary."
          </p>

          {/* Flower row */}
          <div className="flex justify-center gap-3 mt-8">
            {['🌸', '🌺', '🌷', '🌸', '🌺', '🌷', '🌸'].map((f, i) => (
              <span
                key={i}
                style={{
                  fontSize: '1.3rem',
                  animation: `float-gentle ${2 + i * 0.3}s ease infinite ${i * 0.2}s`,
                  display: 'inline-block',
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Baby stats */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="grid grid-cols-3 gap-4 mt-10"
        >
          {[
            { icon: '👶', label: 'Our Baby Girl', sub: 'Has Arrived' },
            { icon: '🎀', label: 'Naming Day', sub: '10th June' },
            { icon: '🏠', label: 'Full of', sub: 'Love & Joy' },
          ].map((item, i) => (
            <div key={i} className="glass" style={{ padding: '20px 12px', textAlign: 'center', borderRadius: '20px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px', animation: `float-gentle ${3 + i}s ease infinite` }}>
                {item.icon}
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#4a3540', fontSize: '0.95rem' }}>
                {item.label}
              </p>
              <p style={{ fontFamily: 'var(--font-serif)', color: '#9b7a8a', fontSize: '0.85rem' }}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
