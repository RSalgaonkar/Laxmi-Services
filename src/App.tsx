import { useEffect, useMemo, useState } from 'react';
import { BookingForm } from './components/BookingForm';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Testimonials } from './components/Testimonials';
import { vehicles, stats } from './data/mockData';
import { Dashboard } from './pages/Dashboard';
import type { BookingForm as BookingFormType, ServiceType } from './types';

const defaultVehicleId = vehicles[0]?.id ?? 0;

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeService, setActiveService] = useState<ServiceType>('car-rental');
  const [notice, setNotice] = useState('Pick a ride to see pricing and instant availability.');
  const [form, setForm] = useState<BookingFormType>({
    serviceType: 'car-rental',
    pickup: 'Siolim',
    dropoff: 'Airport',
    startDate: '2026-04-04',
    endDate: '2026-04-06',
    passengers: 2,
    vehicleId: defaultVehicleId,
  });

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // const selectedVehicle = useMemo(
  //   () => vehicles.find((vehicle) => vehicle.id === form.vehicleId),
  //   [form.vehicleId]
  // );

  const handleServiceChange = (service: ServiceType) => {
    setActiveService(service);
    const firstVehicle = vehicles.find((vehicle) => vehicle.type === service);
    setForm((current) => ({
      ...current,
      serviceType: service,
      vehicleId: firstVehicle?.id ?? 0,
    }));
  };

  const handleSelectVehicle = (id: number) => {
    const match = vehicles.find((vehicle) => vehicle.id === id);
    if (!match) return;

    setActiveService(match.type);
    setForm((current) => ({
      ...current,
      serviceType: match.type,
      vehicleId: id,
    }));

    setNotice(
      `${match.name} selected. ${
        match.pricePerDay
          ? `Estimated from ₹${match.pricePerDay}/day.`
          : `Estimated from ₹${match.baseFare} + ₹${match.pricePerKm}/km.`
      }`
    );
  };

  // const handleBooking = () => {
  //   if (!selectedVehicle) return;

  //   const estimate = selectedVehicle.pricePerDay
  //     ? `${selectedVehicle.name} is available from ₹${selectedVehicle.pricePerDay}/day for ${form.passengers} passenger(s).`
  //     : `${selectedVehicle.name} is available from ₹${selectedVehicle.baseFare} base fare plus ₹${selectedVehicle.pricePerKm}/km.`;

  //   setNotice(`${estimate} Pickup: ${form.pickup}, Dropoff: ${form.dropoff}.`);
  // };

  return (
    <div className="app-shell">
      <Header
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) => (current === 'light' ? 'dark' : 'light'))
        }
        activeService={activeService}
        onServiceChange={handleServiceChange}
      />

      <main className="main-layout">
        <Hero stats={stats} activeService={activeService} />

        {/* <BookingForm
          form={form}
          setForm={setForm}
          vehicles={vehicles}
          onSubmit={handleBooking}
        /> */}

        {/* <div className="notice-banner">{notice}</div> */}

        <Dashboard
          vehicles={vehicles}
          serviceType={activeService}
          onSelectVehicle={handleSelectVehicle}
        />

        <Testimonials />
      </main>
    </div>
  );
}

export default App;