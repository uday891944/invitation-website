const GALLERY_IMAGES = [
  {
    src: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Happy baby girl',
    height: 280,
  },
  {
    src: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Baby with flowers',
    height: 200,
  },
  {
    src: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Soft baby feet',
    height: 220,
  },
  {
    src: 'https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Baby accessories',
    height: 260,
  },
  {
    src: 'https://images.pexels.com/photos/1741235/pexels-photo-1741235.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Baby girl sleeping',
    height: 200,
  },
  {
    src: 'https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Pink flowers for princess',
    height: 240,
  },
];

export default function GallerySection() {
  return (
    <section className="section-bg-2 relative py-24 px-4 overflow-hidden">
      {/* BG sparkles */}
      {Array.from({ length: 12 }, (_, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${0.6 + Math.random() * 0.6}rem`,
            animation: `twinkle ${2 + Math.random() * 2}s ease-in-out ${Math.random() * 3}s infinite`,
            pointerEvents: 'none',
            opacity: 0.5,
          }}
        >
          ✨
        </span>
      ))}

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
            Precious Memories
          </p>
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="section-title gradient-text"
          >
            Gallery of Love
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="section-subtitle mt-4">
            Moments that will be cherished forever
          </p>
          <div className="divider-flowers mt-4">
            <div className="divider-line" />
            <span style={{ fontSize: '1.4rem', animation: 'float-gentle 3s ease infinite' }}>📷</span>
            <span style={{ fontSize: '1.2rem', animation: 'float-gentle 3s ease infinite 0.5s' }}>🌸</span>
            <span style={{ fontSize: '1.4rem', animation: 'float-gentle 3s ease infinite 1s' }}>📷</span>
            <div className="divider-line" />
          </div>
        </div>

        {/* Masonry grid */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          style={{
            columns: '3',
            columnGap: '16px',
          }}
          className="masonry-gallery"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                marginBottom: '16px',
                breakInside: 'avoid',
                height: img.height,
                border: '2px solid rgba(255,255,255,0.7)',
                boxShadow: '0 8px 30px rgba(217, 165, 165, 0.2)',
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
              <div className="gallery-overlay" />
              {/* Hover sparkle */}
              <div style={{
                position: 'absolute',
                top: '10px', right: '10px',
                fontSize: '1rem',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none',
              }} className="gallery-sparkle">
                ✨
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div data-aos="fade-up" data-aos-delay="400" className="text-center mt-10">
          <div className="glass inline-block px-8 py-4" style={{ borderRadius: '50px' }}>
            <p style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
              background: 'linear-gradient(135deg, #C4759A, #E7C97F)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Every picture holds a thousand smiles ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
