import { Clock3, MapPinned, ShieldCheck } from 'lucide-react';
import type { RideStat, ServiceType } from '../types';

type HeroProps = {
  stats: RideStat[];
  activeService: ServiceType;
};

export function Hero({ stats, activeService }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero__copy">
        <span className="eyebrow">Urban mobility that moves fast</span>
        <h1>
          Book a {activeService === 'car-rental' ? 'self-drive car' : 'bike taxi'} in a few taps.
        </h1>
        <p>
          Laxmi Services combines flexible car and bike rentals with quick car taxi pickups for daily commutes,
          airport runs, and weekend travel.
        </p>

        <div className="hero__highlights">
          <div><Clock3 size={18} /> Instant confirmation</div>
          <div><MapPinned size={18} /> Live route visibility</div>
          <div><ShieldCheck size={18} /> Verified drivers and support</div>
        </div>
      </div>

      <div className="hero__panel">
        {stats.map((item) => (
          <article key={item.label} className="stat-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}