import { useMemo } from 'react';
import type { BookingForm as BookingFormType, ServiceType, Vehicle } from '../types';

type BookingFormProps = {
  form: BookingFormType;
  setForm: (form: BookingFormType) => void;
  vehicles: Vehicle[];
  onSubmit: () => void;
};

export function BookingForm({
  form,
  setForm,
  vehicles,
  onSubmit,
}: BookingFormProps) {
  const serviceVehicles = useMemo(
    () => vehicles.filter((vehicle) => vehicle.type === form.serviceType),
    [form.serviceType, vehicles]
  );

  const updateService = (serviceType: ServiceType) => {
    const nextVehicles = vehicles.filter((item) => item.type === serviceType);
    setForm({ ...form, serviceType, vehicleId: nextVehicles[0]?.id ?? 0 });
  };

  return (
    <section className="booking-section">
      <div className="section-heading">
        <span className="eyebrow">Booking desk</span>
        <h2>Plan your next ride</h2>
      </div>

      <div className="booking-card">
        <div className="toggle-row">
          <button
            className={form.serviceType === 'car-rental' ? 'pill pill--active' : 'pill'}
            onClick={() => updateService('car-rental')}
          >
            Car rental
          </button>

          <button
            className={form.serviceType === 'bike-taxi' ? 'pill pill--active' : 'pill'}
            onClick={() => updateService('bike-taxi')}
          >
            Bike taxi
          </button>
        </div>

        <div className="form-grid">
          <label>
            Pickup
            <input
              value={form.pickup}
              onChange={(e) => setForm({ ...form, pickup: e.target.value })}
              placeholder="Enter pickup location"
            />
          </label>

          <label>
            Dropoff
            <input
              value={form.dropoff}
              onChange={(e) => setForm({ ...form, dropoff: e.target.value })}
              placeholder="Enter destination"
            />
          </label>

          <label>
            Start date
            <input
              type="date"
              value={form.startDate}
              onChange={(e) => setForm({ ...form, startDate: e.target.value })}
            />
          </label>

          <label>
            End date
            <input
              type="date"
              value={form.endDate}
              onChange={(e) => setForm({ ...form, endDate: e.target.value })}
            />
          </label>

          <label>
            Passengers
            <input
              type="number"
              min={1}
              max={7}
              value={form.passengers}
              onChange={(e) => setForm({ ...form, passengers: Number(e.target.value) })}
            />
          </label>

          <label>
            Vehicle
            <select
              value={form.vehicleId}
              onChange={(e) => setForm({ ...form, vehicleId: Number(e.target.value) })}
            >
              {serviceVehicles.map((vehicle) => (
                <option key={vehicle.id} value={vehicle.id}>
                  {vehicle.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button className="btn btn--primary" onClick={onSubmit}>
          Check fare & availability
        </button>
      </div>
    </section>
  );
}