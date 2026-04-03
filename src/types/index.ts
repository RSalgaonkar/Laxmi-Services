export type ServiceType = 'car-rental' | 'bike-taxi';

export interface Vehicle {
  id: number;
  name: string;
  type: ServiceType;
  category: string;
  seats?: number;
  transmission?: string;
  fuel?: string;
  pricePerDay?: number;
  baseFare?: number;
  pricePerKm?: number;
  rating: number;
  image: string;
  available: boolean;
  features: string[];
}

export interface BookingForm {
  serviceType: ServiceType;
  pickup: string;
  dropoff: string;
  startDate: string;
  endDate: string;
  passengers: number;
  vehicleId: number;
}

export interface RideStat {
  label: string;
  value: string;
}