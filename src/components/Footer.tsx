export default function Footer() {
  return (
    <footer id="footer" className="relative py-16 px-4 overflow-hidden">
      {/* Floating sparkles */}
      {Array.from({ length: 15 }, (_, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 60}%`,
            fontSize: `${0.4 + Math.random() * 0.6}rem`,
            animation: `float-up ${10 + i * 2}s linear ${i * 1}s infinite`,
            pointerEvents: 'none',
            opacity: 0.6,
          }}
        >
          ✨
        </span>
      ))}

      <div className="text-center relative z-10">
        <div className="mb-6 inline-flex items-center gap-2">
          <span style={{
            fontSize: '2.2rem',
            animation: 'heartbeat 1.5s ease infinite',
            display: 'inline-block',
          }}>
            ❤️
          </span>
        </div>

        <p className="font-script gradient-text" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', lineHeight: 1.2, marginBottom: '12px' }}>
          With Love
        </p>

        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.05rem',
          color: '#7a5c6a',
          lineHeight: 1.8,
          marginBottom: '20px',
        }}>
          Sriram, Geethika & Family
        </p>

        <div className="divider-flowers justify-center">
          <div className="divider-line" style={{ maxWidth: '100px' }} />
          <span style={{ fontSize: '1.2rem', margin: '0 8px', animation: 'float-gentle 3s ease infinite' }}>🌸</span>
          <span style={{ fontSize: '1rem', margin: '0 8px', animation: 'float-gentle 3s ease infinite 0.5s' }}>💝</span>
          <span style={{ fontSize: '1.2rem', margin: '0 8px', animation: 'float-gentle 3s ease infinite 1s' }}>🌸</span>
          <div className="divider-line" style={{ maxWidth: '100px' }} />
        </div>

        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '0.85rem',
          color: '#b09aa0',
          marginTop: '20px',
          letterSpacing: '0.08em',
        }}>
          © 2026 — A Celebration of New Beginnings
        </p>
      </div>
    </footer>
  );
}
