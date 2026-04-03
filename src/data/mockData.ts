import type { RideStat, Vehicle } from '../types';

export const stats: RideStat[] = [
  { label: 'Active drivers', value: '1,240+' },
  { label: 'Cities covered', value: '32' },
  { label: 'Avg. pickup time', value: '4 min' },
  { label: 'Happy riders', value: '48k+' },
];

export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: 'Swift City Automatic',
    type: 'car-rental',
    category: 'Hatchback',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    pricePerDay: 1799,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=900&q=80',
    available: true,
    features: ['AC', 'Fast booking', 'Fuel efficient']
  },
  {
    id: 2,
    name: 'Hyryder Family SUV',
    type: 'car-rental',
    category: 'SUV',
    seats: 7,
    transmission: 'Manual',
    fuel: 'Hybrid',
    pricePerDay: 2899,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80',
    available: true,
    features: ['Spacious cabin', 'Bluetooth', 'Road trip ready']
  },
  {
    id: 3,
    name: 'Executive Sedan Prime',
    type: 'car-rental',
    category: 'Sedan',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Diesel',
    pricePerDay: 2499,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
    available: false,
    features: ['Premium comfort', 'GPS', 'Airport pickup']
  },
  {
    id: 4,
    name: 'Flash Bike Taxi',
    type: 'bike-taxi',
    category: 'Bike Taxi',
    baseFare: 49,
    pricePerKm: 12,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80',
    available: true,
    features: ['Helmet included', 'Quick city rides', 'Live tracking']
  },
  {
    id: 5,
    name: 'Rush Commuter Bike',
    type: 'bike-taxi',
    category: 'Bike Taxi',
    baseFare: 59,
    pricePerKm: 14,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1517846693594-c9d836ed4e5a?auto=format&fit=crop&w=900&q=80',
    available: true,
    features: ['Peak hour priority', 'Driver chat', 'Cashless payment']
  },
  {
    id: 6,
    name: 'Night Owl Bike Taxi',
    type: 'bike-taxi',
    category: 'Bike Taxi',
    baseFare: 69,
    pricePerKm: 16,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1529429617124-aee711a5ac1c?auto=format&fit=crop&w=900&q=80',
    available: true,
    features: ['Late night safety', 'SOS support', 'Verified riders']
  }
];

export const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'Daily commuter',
    text: 'Bike taxis save me at least 30 minutes every morning. The app feels quick and clean.'
  },
  {
    name: 'Neha Kamat',
    role: 'Weekend traveler',
    text: 'I booked an SUV for a Goa road trip in under two minutes. Pickup and billing were smooth.'
  },
  {
    name: 'Rohan Desai',
    role: 'Startup founder',
    text: 'The fleet cards, fare estimate, and mobile layout make this project look production-ready.'
  }
];