"use client";

export default function BeltDivider() {
  const items = Array.from({ length: 24 });

  return (
    <>
      <style>{`
.belt-divider {
  position: relative;
  width: 100%;
  height: 260px;
  overflow: visible;
}

        .belt {
          position: absolute;
          left: -10%;
          width: 120%;
          height: 56px;
          display: flex;
          align-items: center;
          overflow: hidden;
          border-top: 4px solid #000;
          border-bottom: 4px solid #000;
          box-shadow: 0 8px 0 #000, 0 -8px 0 #000;
        }

        .belt-violet {
          top: 42px;
          background: #7C3AED;
          transform: rotate(4deg);
          transform-origin: left center;
        }

        .belt-white {
          top: 100px;
          background: #fff;
          transform: rotate(-4deg);
          transform-origin: right center;
        }

        .belt-track {
          display: flex;
          flex-wrap: nowrap;
          width: max-content;
          white-space: nowrap;
          will-change: transform;
        }

        .belt-violet .belt-track {
          animation: scrollLeft 12s linear infinite;
        }

        .belt-white .belt-track {
          animation: scrollRight 12s linear infinite;
        }

        .belt-item {
          font-family: Arial Black, Arial, sans-serif;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0 24px;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          user-select: none;
        }

        .belt-violet .belt-item {
          color: #fff;
          -webkit-text-stroke: 0.5px #000;
        }

        .belt-white .belt-item {
          color: #0e0e0e;
        }

        .belt-violet .sep {
          color: #f5d90a;
          font-size: 18px;
        }

        .belt-white .sep {
          color: #7C3AED;
          font-size: 18px;
        }

        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-30%);
          }
        }

        @keyframes scrollRight {
          from {
            transform: translateX(-30%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>

      <div className="belt-divider" aria-hidden="true">
        <div className="belt belt-violet">
          <div className="belt-track">
            {[...items, ...items].map((_, i) => (
              <span key={i} className="belt-item">
                NEW <span className="sep">✦</span>
              </span>
            ))}
          </div>
        </div>

        <div className="belt belt-white">
          <div className="belt-track">
            {[...items, ...items].map((_, i) => (
              <span key={i} className="belt-item">
                NEW <span className="sep">+</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}