import { useEffect, useRef } from 'react';

const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 2 + Math.random() * 4,
  delay: Math.random() * 4,
  duration: 1.5 + Math.random() * 2,
}));

const PETALS = [
  { emoji: '🌸', left: '8%',  dur: 12, delay: 0 },
  { emoji: '🌺', left: '20%', dur: 15, delay: 2 },
  { emoji: '🌷', left: '35%', dur: 10, delay: 4 },
  { emoji: '🌸', left: '52%', dur: 14, delay: 1 },
  { emoji: '🌺', left: '68%', dur: 11, delay: 6 },
  { emoji: '🌸', left: '80%', dur: 13, delay: 3 },
  { emoji: '🌷', left: '92%', dur: 16, delay: 5 },
];

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    setTimeout(() => {
      el.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 300);
  }, []);

  const handleJoin = () => {
    const el = document.getElementById('details');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero">
      {/* Aurora background accents */}
      <div className="aurora-blob aurora-1" />
      <div className="aurora-blob aurora-2" />
      <div className="aurora-blob aurora-3" />

      {/* Stars */}
      <div className="star-field">
        {STARS.map(s => (
          <div
            key={s.id}
            style={{
              position: 'absolute',
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #E7C97F, #F8C8DC)',
              animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Clouds */}
      <div className="hero-cloud cloud-1 cloud-puff" />
      <div className="hero-cloud cloud-2 cloud-puff" />
      <div className="hero-cloud cloud-3 cloud-puff" />
      <div className="hero-cloud cloud-4 cloud-puff" />

      {/* Floating petals from top */}
      {PETALS.map((p, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: p.left,
            top: '-40px',
            fontSize: '1.6rem',
            animation: `petal-fall ${p.dur}s linear ${p.delay}s infinite`,
            pointerEvents: 'none',
            zIndex: 6,
          }}
        >
          {p.emoji}
        </span>
      ))}

      {/* Main Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20"
        style={{ maxWidth: '860px', margin: '0 auto' }}
      >
        {/* Badge */}
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          className="glass mb-8 px-6 py-3 inline-flex items-center gap-3"
          style={{ borderRadius: '50px' }}
        >
          <span style={{ fontSize: '1.4rem', animation: 'float-gentle 3s ease infinite' }}>👶</span>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '0.95rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#9b7a8a',
            }}
          >
            Naming Ceremony
          </span>
          <span style={{ fontSize: '1.4rem', animation: 'float-gentle 3s ease infinite 1s' }}>👶</span>
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="font-script gradient-text"
          style={{ fontSize: 'clamp(3.2rem, 9vw, 7rem)', lineHeight: 1.05, marginBottom: '24px' }}
        >
          Welcome To Our
          <br />
          <span style={{ fontSize: 'clamp(3.8rem, 11vw, 8.5rem)' }}>Little Princess's</span>
          <br />
          Naming Ceremony
        </h1>

        {/* Divider */}
        <div className="divider-flowers" style={{ width: '100%', maxWidth: 400, marginBottom: '20px' }}>
          <div className="divider-line" />
          <span style={{ fontSize: '1.6rem', animation: 'float-gentle 2.5s ease infinite' }}>🌸</span>
          <span style={{ fontSize: '1.4rem', animation: 'heartbeat 2s ease infinite' }}>💕</span>
          <span style={{ fontSize: '1.6rem', animation: 'float-gentle 2.5s ease infinite 1s' }}>🌸</span>
          <div className="divider-line" />
        </div>

        {/* Subtitle */}
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="section-subtitle"
          style={{ maxWidth: '560px', marginBottom: '32px' }}
        >
          Join us as we celebrate a beautiful new beginning filled with love,
          laughter, and blessings.
        </p>

        {/* Parents name */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="glass mb-10 px-8 py-4 inline-flex items-center gap-3"
          style={{ borderRadius: '50px' }}
        >
          <span
            className="font-display gradient-text-gold"
            style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 600, letterSpacing: '0.04em' }}
          >
            Sriram
          </span>
          <span
            style={{
              fontSize: '1.8rem',
              animation: 'heartbeat 1.5s ease infinite',
              display: 'inline-block',
            }}
          >
            ❤️
          </span>
          <span
            className="font-display gradient-text-gold"
            style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 600, letterSpacing: '0.04em' }}
          >
            Geethika
          </span>
        </div>

        {/* CTA Button */}
        <div data-aos="zoom-in" data-aos-delay="800">
          <button className="btn-magic" onClick={handleJoin}>
            <span style={{ fontSize: '1.1rem', animation: 'float-gentle 2s ease infinite' }}>✨</span>
            Join The Celebration
            <span style={{ fontSize: '1.1rem', animation: 'float-gentle 2s ease infinite 0.5s' }}>✨</span>
          </button>
        </div>

        {/* Scroll hint */}
        <div
          data-aos="fade-in"
          data-aos-delay="1200"
          style={{ marginTop: '48px', animation: 'bob 2s ease infinite' }}
        >
          <div
            style={{
              width: 32, height: 48,
              border: '2px solid rgba(217, 165, 165, 0.5)',
              borderRadius: '16px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '8px',
            }}
          >
            <div
              style={{
                width: 4, height: 10,
                background: 'linear-gradient(to bottom, #D9A5A5, transparent)',
                borderRadius: '2px',
                animation: 'petal-fall 2s ease infinite',
              }}
            />
          </div>
        </div>
      </div>

      {/* Baby girl floating illustrations */}
      <BabyGirlFloat />
    </section>
  );
}

function BabyGirlFloat() {
  const icons = ['🎀', '🍼', '👶', '🧸', '🌸', '💝', '🎀', '🌷', '⭐', '💫'];
  const items = Array.from({ length: 12 }, (_, i) => ({
    icon: icons[i % icons.length],
    top: `${10 + Math.random() * 80}%`,
    left: i % 2 === 0 ? `-60px` : `calc(100vw + 60px)`,
    size: 1.4 + Math.random() * 1,
    dur: 18 + Math.random() * 20,
    delay: i * 3,
    dir: i % 2 === 0 ? 'float-lr' : 'float-rl',
  }));

  return (
    <>
      {items.map((item, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            top: item.top,
            left: item.left,
            fontSize: `${item.size}rem`,
            animation: `${item.dir} ${item.dur}s linear ${item.delay}s infinite`,
            pointerEvents: 'none',
            zIndex: 4,
            filter: 'drop-shadow(0 2px 8px rgba(217, 165, 165, 0.5))',
          }}
        >
          {item.icon}
        </span>
      ))}
    </>
  );
}
