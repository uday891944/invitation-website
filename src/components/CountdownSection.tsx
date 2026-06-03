import { useState, useEffect, useRef } from 'react';

const TARGET = new Date('2026-06-10T12:00:00');

function getTimeLeft() {
  const now = new Date();
  const diff = TARGET.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownSection() {
  const [time, setTime] = useState(getTimeLeft);
  const prevRef = useRef(time);

  useEffect(() => {
    const id = setInterval(() => {
      prevRef.current = time;
      setTime(getTimeLeft());
    }, 1000);
    return () => clearInterval(id);
  });

  const boxes = [
    { value: time.days,    label: 'Days' },
    { value: time.hours,   label: 'Hours' },
    { value: time.minutes, label: 'Minutes' },
    { value: time.seconds, label: 'Seconds' },
  ];

  return (
    <section className="section-bg-2 relative py-24 px-4 overflow-hidden">
      {/* Floating hearts */}
      {[...Array(8)].map((_, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: `${10 + i * 12}%`,
            bottom: '-20px',
            fontSize: `${0.8 + Math.random() * 1}rem`,
            animation: `float-up ${10 + i * 2}s linear ${i * 1.5}s infinite`,
            pointerEvents: 'none',
            opacity: 0.5,
          }}
        >
          {['💕', '🌸', '⭐', '✨', '💝', '🎀', '💫', '🌷'][i]}
        </span>
      ))}

      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        {/* Header */}
        <div className="text-center mb-14">
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
            The Big Day Approaches
          </p>
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="section-title gradient-text"
          >
            Counting Down
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="section-subtitle mt-4">
            Every second brings us closer to the moment we meet our little princess
          </p>
          <div className="divider-flowers mt-4">
            <div className="divider-line" />
            <span style={{ fontSize: '1.4rem', animation: 'heartbeat 2s ease infinite' }}>💗</span>
            <div className="divider-line" />
          </div>
        </div>

        {/* Countdown boxes */}
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="200"
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          {boxes.map((box, i) => (
            <CountBox key={i} value={box.value} label={box.label} index={i} />
          ))}
        </div>

        {/* Date */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-center mt-12"
        >
          <div className="glass inline-block px-8 py-4" style={{ borderRadius: '50px' }}>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1rem',
              letterSpacing: '0.1em',
              color: '#9b7a8a',
            }}>
              10th June 2026 &nbsp;·&nbsp; 12:00 PM onwards
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CountBox({ value, label, index }: { value: number; label: string; index: number }) {
  const gradients = [
    'linear-gradient(135deg, #F8C8DC, #FFD6E7)',
    'linear-gradient(135deg, #DCC6FF, #E8D9FF)',
    'linear-gradient(135deg, #FFE0CC, #FFF7ED)',
    'linear-gradient(135deg, #D9EEFF, #FFF9F5)',
  ];

  return (
    <div
      className="countdown-box"
      style={{
        borderTop: `3px solid transparent`,
        backgroundImage: `linear-gradient(white, white), ${gradients[index]}`,
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        animationDelay: `${index * 0.5}s`,
      }}
    >
      <div className="countdown-number">{String(value).padStart(2, '0')}</div>
      <div className="countdown-label">{label}</div>
    </div>
  );
}
