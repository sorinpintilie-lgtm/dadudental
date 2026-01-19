import React from 'react';

const PromoBar: React.FC = () => {
  return (
    <div className="promo-bar">
      {/* Desktop version */}
      <div className="promo-desktop">
        <span>
          Concept demo • Conținut orientativ • Dezvoltat de sky.ro • 
          <a href="mailto:dan.trifan@sky.ro" className="promo-link">
            dan.trifan@sky.ro
          </a>
          • 
          <a href="tel:+40720088880" className="promo-link">
            +4 0720 088 880
          </a>
        </span>
        <a 
          href="https://wa.me/40720088880" 
          className="btn-promo"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>

      {/* Mobile version */}
      <div className="promo-mobile">
        <div className="promo-left">Concept demo</div>
        <div className="promo-center">Dezvoltat de sky.ro</div>
        <div className="promo-right">
          <a href="tel:+40720088880" className="promo-link">
            +4 0720 088 880
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoBar;
