import { Fuel, Star, Users } from 'lucide-react';
import type { Vehicle } from '../types';

type VehicleCardProps = {
  vehicle: Vehicle;
  onSelect: (id: number) => void;
};

export function VehicleCard({ vehicle, onSelect }: VehicleCardProps) {
  return (
    <article className="vehicle-card">
      <img src={vehicle.image} alt={vehicle.name} />
      <div className="vehicle-card__body">
        <div className="vehicle-card__top">
          <div>
            <h3>{vehicle.name}</h3>
            <p>{vehicle.category}</p>
          </div>
          <span className="rating">
            <Star size={14} /> {vehicle.rating}
          </span>
        </div>

        <div className="vehicle-meta">
          {vehicle.seats ? <span><Users size={15} /> {vehicle.seats} seats</span> : null}
          {vehicle.fuel ? <span><Fuel size={15} /> {vehicle.fuel}</span> : null}
          {vehicle.transmission ? <span>{vehicle.transmission}</span> : null}
          {vehicle.baseFare ? <span>Base ₹{vehicle.baseFare}</span> : null}
        </div>

        <ul>
          {vehicle.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="vehicle-card__footer">
          <strong>
            {/* {vehicle.pricePerDay ? `₹${vehicle.pricePerDay}/day` : `₹${vehicle.pricePerKm}/km`} */}
            {"Contact +91 8698281323"}
          </strong>
          <button
            className="btn btn--secondary"
            onClick={() => onSelect(vehicle.id)}
            disabled={!vehicle.available}
          >
            {/* {vehicle.available ? 'Select ride' : 'Unavailable'} */}
            {'Available on call'}
          </button>
        </div>
      </div>
    </article>
  );
}