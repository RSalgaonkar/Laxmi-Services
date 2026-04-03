import type { Vehicle } from '../types';
import { VehicleCard } from '../components/VehicleCard';

type DashboardProps = {
  vehicles: Vehicle[];
  serviceType: 'car-rental' | 'bike-taxi';
  onSelectVehicle: (id: number) => void;
};

export function Dashboard({
  vehicles,
  serviceType,
  onSelectVehicle,
}: DashboardProps) {
  const filtered = vehicles.filter((vehicle) => vehicle.type === serviceType);

  return (
    <section className="fleet-section">
      <div className="section-heading">
        <span className="eyebrow">Available fleet</span>
        <h2>{serviceType === 'car-rental' ? 'Choose your car or bike' : 'Choose your car taxi'}</h2>
      </div>

      <div className="fleet-grid">
        {filtered.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            onSelect={onSelectVehicle}
          />
        ))}
      </div>
    </section>
  );
}