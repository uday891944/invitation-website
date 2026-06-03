export default function MapSection() {
  const mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=R+%26+R+Colony+Gunabhadra+Road+No+06+Kotturu+Andhra+Pradesh+India';

  const mapEmbedUrl =
    'https://maps.google.com/maps?q=Kotturu,+Andhra+Pradesh,+India&t=&z=13&ie=UTF8&iwloc=&output=embed';

  return (
    <section className="section-bg-3 relative py-24 px-4 overflow-hidden">
      {/* Petals */}
      {['🌸', '🌺', '🌷', '🌸', '🌺'].map((p, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: `${15 + i * 18}%`,
            top: '-20px',
            fontSize: '1.4rem',
            animation: `petal-fall ${12 + i * 2}s linear ${i * 2}s infinite`,
            pointerEvents: 'none',
            opacity: 0.5,
          }}
        >
          {p}
        </span>
      ))}

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <div className="text-center mb-14">
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
            Find Your Way To Us
          </p>
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="section-title gradient-text"
          >
            Venue & Location
          </h2>
          <div className="divider-flowers mt-4">
            <div className="divider-line" />
            <span style={{ fontSize: '1.4rem', animation: 'pin-bounce' }}>📍</span>
            <div className="divider-line" />
          </div>
        </div>

        {/* Venue card + Map */}
        <div
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-delay="200"
          className="glass-card"
          style={{ padding: '40px', overflow: 'hidden' }}
        >
          {/* Address box */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
            <div style={{
              width: '72px', height: '72px',
              background: 'linear-gradient(135deg, #F8C8DC, #DCC6FF)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2rem',
              boxShadow: '0 8px 24px rgba(248, 200, 220, 0.4)',
              flexShrink: 0,
              animation: 'pin-bounce',
            }}>
              📍
            </div>

            <div style={{ textAlign: 'left' }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#4a3540',
                marginBottom: '6px',
              }}>
                R & R Colony
              </h3>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                color: '#7a5c6a',
                lineHeight: 1.8,
              }}>
                Gunabhadra<br />
                Road No. 06<br />
                Kotturu
              </p>
            </div>

            <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
              <div className="glass" style={{ padding: '12px 20px', borderRadius: '16px', marginBottom: '8px' }}>
                <p style={{ fontFamily: 'var(--font-serif)', color: '#C4759A', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                  📅 10th June 2026
                </p>
              </div>
              <div className="glass" style={{ padding: '12px 20px', borderRadius: '16px' }}>
                <p style={{ fontFamily: 'var(--font-serif)', color: '#C4759A', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                  ⏰ 12:00 PM onwards
                </p>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="map-container" style={{ marginBottom: '24px', position: 'relative' }}>
            <iframe
              src={mapEmbedUrl}
              title="Venue Location"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Glassmorphism overlay at top */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: '48px',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)',
              pointerEvents: 'none',
              borderRadius: '24px 24px 0 0',
            }} />
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-map"
              style={{ display: 'inline-flex' }}
            >
              <span>🗺️</span>
              Open In Google Maps
            </a>
            <p style={{
              fontFamily: 'var(--font-serif)',
              color: '#b09aa0',
              fontSize: '0.85rem',
              marginTop: '12px',
            }}>
              Tap above for turn-by-turn directions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
