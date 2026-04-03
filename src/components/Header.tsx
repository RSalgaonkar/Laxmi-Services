import { Bike, Car, Menu, Moon, Sun } from 'lucide-react';

type HeaderProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  activeService: 'car-rental' | 'bike-taxi';
  onServiceChange: (service: 'car-rental' | 'bike-taxi') => void;
};

export function Header({
  theme,
  onToggleTheme,
  activeService,
  onServiceChange,
}: HeaderProps) {
  return (
    <header className="header">
      <div className="brand">
        <div className="brand__logo" aria-hidden="true">
          <svg viewBox="0 0 64 64" role="img" aria-label="RentRide logo">
            <path
              d="M14 38c6-16 17-24 34-24h6L36 50H10l4-12Z"
              fill="currentColor"
              opacity="0.16"
            />
            <path
              d="M18 36c4-11 13-18 26-18h8l-7 24H16l2-6Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <circle cx="24" cy="46" r="4" fill="currentColor" />
            <circle cx="42" cy="46" r="4" fill="currentColor" />
          </svg>
        </div>

        <div>
          <p>Laxmi Rent a car & bike </p>
          <span>Taxi Service</span>
        </div>
      </div>

      <nav className="nav nav--desktop">
        <button
          className={activeService === 'car-rental' ? 'pill pill--active' : 'pill'}
          onClick={() => onServiceChange('car-rental')}
        >
          <Car size={16} /> Car taxi
        </button>

        <button
          className={activeService === 'bike-taxi' ? 'pill pill--active' : 'pill'}
          onClick={() => onServiceChange('bike-taxi')}
        >
          <Bike size={16} /> Bike & Car Rentals
        </button>
      </nav>

      <div className="header__actions">
        <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        <button className="icon-btn mobile-only" aria-label="Open navigation">
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}