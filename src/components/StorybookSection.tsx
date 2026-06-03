export default function StorybookSection() {
  const stories = [
    {
      icon: '🌟',
      title: 'A Star Was Born',
      text: 'Heaven sent us a little miracle, a tiny soul wrapped in pink, who changed the meaning of love forever.',
      color: 'linear-gradient(135deg, rgba(248,200,220,0.4), rgba(255,255,255,0.2))',
      delay: 0,
    },
    {
      icon: '🌸',
      title: 'Petals of Joy',
      text: 'Every laugh, every yawn, every little sigh—she fills our world with a joy no words can describe.',
      color: 'linear-gradient(135deg, rgba(220,198,255,0.4), rgba(255,255,255,0.2))',
      delay: 150,
    },
    {
      icon: '💫',
      title: 'Magic Moments',
      text: 'In her eyes we see the universe — full of wonder, promise, and the sweetest dreams yet to unfold.',
      color: 'linear-gradient(135deg, rgba(255,224,204,0.4), rgba(255,255,255,0.2))',
      delay: 300,
    },
    {
      icon: '🎀',
      title: 'Princess of Hearts',
      text: 'She arrived as our greatest blessing, our most precious gift, the princess who rules our hearts.',
      color: 'linear-gradient(135deg, rgba(217,238,255,0.4), rgba(255,255,255,0.2))',
      delay: 450,
    },
  ];

  return (
    <section className="section-bg-1 relative py-24 px-4 overflow-hidden">
      {/* Animated cloud */}
      <div style={{
        position: 'absolute', top: '8%', left: 0, right: 0,
        height: '120px',
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Floating stars */}
      {Array.from({ length: 20 }, (_, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${0.5 + Math.random() * 0.8}rem`,
            animation: `twinkle ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 3}s infinite`,
            pointerEvents: 'none',
            opacity: 0.6,
          }}
        >
          ✨
        </span>
      ))}

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <div className="text-center mb-16">
          <p
            data-aos="fade-down"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '0.9rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C4759A',
              marginBottom: '12px',
            }}
          >
            A Fairy Tale Begins
          </p>
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="section-title gradient-text"
          >
            A New Chapter Begins
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="section-subtitle mt-4" style={{ maxWidth: 500, margin: '16px auto 0' }}>
            Every great story starts with a beautiful beginning. Ours began with her.
          </p>
          <div className="divider-flowers mt-5">
            <div className="divider-line" />
            <span style={{ fontSize: '1.4rem', animation: 'float-gentle 3s ease infinite' }}>📖</span>
            <span style={{ fontSize: '1.2rem', animation: 'float-gentle 3s ease infinite 0.5s' }}>✨</span>
            <span style={{ fontSize: '1.4rem', animation: 'float-gentle 3s ease infinite 1s' }}>📖</span>
            <div className="divider-line" />
          </div>
        </div>

        {/* Story cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stories.map((s, i) => (
            <div
              key={i}
              data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={s.delay}
              data-aos-duration="800"
              className="glass-card story-card"
              style={{ padding: '36px 32px', background: s.color }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '16px',
                display: 'inline-block',
                animation: `float-gentle ${3 + i * 0.5}s ease infinite`,
              }}>
                {s.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.3rem',
                fontWeight: 600,
                color: '#4a3540',
                marginBottom: '12px',
              }}>
                {s.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: '#7a5c6a',
              }}>
                {s.text}
              </p>
            </div>
          ))}
        </div>

        {/* Central poem */}
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="1000"
          className="glass text-center mt-12"
          style={{ padding: '48px 40px', borderRadius: '32px' }}
        >
          <div style={{ fontSize: '2.5rem', marginBottom: '16px', animation: 'float-gentle 3s ease infinite' }}>
            👑
          </div>
          <p className="font-script gradient-text" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', lineHeight: 1.3 }}>
            "She is our greatest adventure,<br />our most beautiful story."
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)',
            color: '#C4759A',
            marginTop: '12px',
            fontSize: '0.9rem',
            letterSpacing: '0.1em',
          }}>
            — Sriram & Geethika
          </p>
        </div>
      </div>
    </section>
  );
}
