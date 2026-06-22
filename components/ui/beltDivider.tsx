"use client";
import { X } from "lucide-react";
export default function BeltDivider() {
  const items = Array.from({ length: 24 });

  return (
    <>
      <style>{`
        .belt-divider {
          position: relative;
          width: 100%;
          height: 340px; 
          overflow: hidden; 
        }

        .belt {
          position: absolute;
          left: -25%; 
          width: 150%;
          height: 56px;
          display: flex;
          align-items: center;
          overflow: hidden;
          border-top: 4px solid #000;
          border-bottom: 4px solid #000;
          box-shadow: 0 8px 0 #000, 0 -8px 0 #000;
        }

        .belt-violet {
          top: 30px; 
          background: #7C3AED;
          transform: rotate(4deg);
          transform-origin: left center;
        }

        .belt-white {
          top: 90px; 
          background: #fff;
          transform: rotate(-4deg);
          transform-origin: right center;
        }

        .belt-black {
          display: none; 
          top: 140px; 
          background: #000;
          transform: rotate(3deg);
          transform-origin: left center;
          border-top: 4px solid #fff;
          border-bottom: 4px solid #fff;
          box-shadow: 0 2px 0 #000, 0 -2px 0 #000;
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

        .belt-black .belt-track {
          animation: scrollLeft 14s linear infinite; 
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

        .belt-black .belt-item {
          color: #fff;
        }

        .belt-violet .sep {
          color: #f5d90a;
          font-size: 18px;
        }

        .belt-white .sep {
          color: #7C3AED;
          font-size: 18px;
        }

        .belt-black .sep {
          color: #fff;
          font-size: 18px;
        }

        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-30%); }
        }

        @keyframes scrollRight {
          from { transform: translateX(-30%); }
          to { transform: translateX(0); }
        }

        @media (max-width: 768px) {
          .belt-black {
            display: flex;
          }
          
          .belt-divider {
            /* FIX: Reduced height dramatically for mobile to center the belts */
            height: 240px; 
          }
        }
      `}</style>

      <div className="belt-divider" aria-hidden="true">
        <div className="belt belt-violet">
          <div className="belt-track">
            {[...items, ...items].map((_, i) => (
              <span key={`v-${i}`} className="belt-item">
                NEW <span className="sep">✦</span>
              </span>
            ))}
          </div>
        </div>

        <div className="belt belt-white">
          <div className="belt-track">
            {[...items, ...items].map((_, i) => (
              <span key={`w-${i}`} className="belt-item">
                FRESH <span className="sep">+</span>
              </span>
            ))}
          </div>
        </div>

        <div className="belt belt-black">
          <div className="belt-track">
            {[...items, ...items].map((_, i) => (
              <span key={`b-${i}`} className="belt-item">
                DROP <span className="sep"><X strokeWidth={4}/></span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}