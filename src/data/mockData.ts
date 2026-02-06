import ramJanmabhoomi from '@/assets/ram-janmabhoomi.jpg';
import hanumanGarhi from '@/assets/hanuman-garhi.jpg';
import kanakBhawan from '@/assets/kanak-bhawan.jpg';
import saryuGhat from '@/assets/saryu-ghat.jpg';

export interface Guide {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  languages: string[];
  experience: number;
  specialization: string;
  description: string;
  price: number;
}

export interface TouristPlace {
  id: string;
  name: string;
  image: string;
  description: string;
  significance: string;
  location: string;
  timings: string;
  category: string;
}

export interface TourPackage {
  id: string;
  name: string;
  image: string;
  duration: string;
  price: number;
  highlights: string[];
  includes: string[];
  itinerary: string[];
  rating: number;
}

export const guides: Guide[] = [
  {
    id: '1',
    name: 'Pandit Ramesh Sharma',
    image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 234,
    languages: ['Hindi', 'English', 'Sanskrit'],
    experience: 15,
    specialization: 'Temple History & Rituals',
    description: 'Expert in Ayodhya\'s spiritual heritage with deep knowledge of temple rituals and historical significance.',
    price: 1500,
  },
  {
    id: '2',
    name: 'Shri Mohan Das',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 189,
    languages: ['Hindi', 'English'],
    experience: 12,
    specialization: 'Ram Katha & Mythology',
    description: 'Renowned storyteller who brings the epic Ramayana to life with engaging narratives.',
    price: 1200,
  },
  {
    id: '3',
    name: 'Acharya Vivek Mishra',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 312,
    languages: ['Hindi', 'English', 'Gujarati'],
    experience: 20,
    specialization: 'Architecture & Art History',
    description: 'Specialist in temple architecture and ancient art forms of Ayodhya.',
    price: 1800,
  },
  {
    id: '4',
    name: 'Pandit Suresh Tiwari',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 156,
    languages: ['Hindi', 'Bengali'],
    experience: 10,
    specialization: 'Pilgrimage Routes',
    description: 'Expert in traditional pilgrimage routes and lesser-known sacred sites.',
    price: 1000,
  },
  {
    id: '5',
    name: 'Dr. Anjali Dubey',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 178,
    languages: ['Hindi', 'English', 'Tamil'],
    experience: 8,
    specialization: 'Cultural Heritage',
    description: 'Historian specializing in the cultural evolution of Ayodhya through ages.',
    price: 1400,
  },
  {
    id: '6',
    name: 'Swami Krishnanand',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 267,
    languages: ['Hindi', 'Sanskrit', 'English'],
    experience: 25,
    specialization: 'Vedic Knowledge',
    description: 'Learned scholar in Vedic traditions and spiritual practices of Ayodhya.',
    price: 2000,
  },
];

export const touristPlaces: TouristPlace[] = [
  {
    id: '1',
    name: 'Ram Janmabhoomi',
    image: ramJanmabhoomi,
    description: 'The sacred birthplace of Lord Shri Ram, now home to the magnificent Ram Mandir. This divine site attracts millions of devotees from around the world.',
    significance: 'Birthplace of Lord Ram, one of the most revered deities in Hinduism. The newly constructed temple is an architectural marvel.',
    location: 'Central Ayodhya',
    timings: '7:00 AM - 11:00 PM',
    category: 'Temple',
  },
  {
    id: '2',
    name: 'Hanuman Garhi',
    image: hanumanGarhi,
    description: 'A 10th-century temple dedicated to Lord Hanuman, situated atop a hill with 76 steps leading to the main shrine.',
    significance: 'One of the most important temples in Ayodhya, believed to be where Hanuman guarded Ayodhya.',
    location: 'Near Ram Janmabhoomi',
    timings: '5:00 AM - 10:00 PM',
    category: 'Temple',
  },
  {
    id: '3',
    name: 'Kanak Bhawan',
    image: kanakBhawan,
    description: 'A stunning temple known for its golden ornaments and beautiful deities of Lord Ram and Sita.',
    significance: 'Gifted by Kaikeyi to Sita as part of her wedding presents. Houses magnificent gold-adorned idols.',
    location: 'Tulsi Nagar, Ayodhya',
    timings: '8:00 AM - 12:00 PM, 4:00 PM - 9:00 PM',
    category: 'Temple',
  },
  {
    id: '4',
    name: 'Saryu Ghat',
    image: saryuGhat,
    description: 'Sacred ghats along the holy Saryu River where pilgrims take ritual baths and perform ceremonies.',
    significance: 'The Saryu River is mentioned in ancient scriptures. The evening aarti here is a mesmerizing experience.',
    location: 'Along Saryu River',
    timings: 'Open 24 hours',
    category: 'Ghat',
  },
  {
    id: '5',
    name: 'Nageshwarnath Temple',
    image: ramJanmabhoomi,
    description: 'An ancient Shiva temple believed to have been established by Kush, son of Lord Ram.',
    significance: 'One of the oldest temples in Ayodhya, marking the continuous spiritual traditions of the city.',
    location: 'Near Saryu River',
    timings: '5:00 AM - 9:00 PM',
    category: 'Temple',
  },
  {
    id: '6',
    name: 'Treta Ke Thakur',
    image: hanumanGarhi,
    description: 'Temple at the site where Lord Ram performed the Ashwamedha Yagna after returning from Lanka.',
    significance: 'Historic site associated with one of the most important events in the Ramayana.',
    location: 'Naya Ghat, Ayodhya',
    timings: '6:00 AM - 8:00 PM',
    category: 'Temple',
  },
];

export const tourPackages: TourPackage[] = [
  {
    id: '1',
    name: 'Divine Darshan',
    image: ramJanmabhoomi,
    duration: '1 Day',
    price: 2499,
    highlights: ['Ram Janmabhoomi Darshan', 'Hanuman Garhi Visit', 'Saryu Aarti'],
    includes: ['Certified Guide', 'Temple Prasad', 'Local Transport'],
    itinerary: [
      '6:00 AM - Pickup from hotel',
      '7:00 AM - Ram Janmabhoomi Darshan',
      '10:00 AM - Hanuman Garhi Temple',
      '12:00 PM - Lunch Break',
      '2:00 PM - Kanak Bhawan',
      '5:00 PM - Saryu Ghat',
      '7:00 PM - Evening Aarti',
    ],
    rating: 4.9,
  },
  {
    id: '2',
    name: 'Spiritual Heritage Tour',
    image: hanumanGarhi,
    duration: '2 Days / 1 Night',
    price: 5999,
    highlights: ['Complete Temple Circuit', 'River Boat Ride', 'Cultural Evening'],
    includes: ['Expert Guide', 'Hotel Stay', 'All Meals', 'Transport'],
    itinerary: [
      'Day 1: Major temples and Ram Janmabhoomi',
      'Day 1 Evening: Saryu Aarti and Cultural Program',
      'Day 2: Lesser-known temples and Ghats',
      'Day 2: Boat ride on Saryu River',
    ],
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Ramayan Trail',
    image: kanakBhawan,
    duration: '3 Days / 2 Nights',
    price: 9999,
    highlights: ['All Major Sites', 'Ram Katha Session', 'VIP Darshan'],
    includes: ['Scholar Guide', 'Premium Hotel', 'All Meals', 'Special Pujas'],
    itinerary: [
      'Day 1: Ram Janmabhoomi and nearby temples',
      'Day 2: Extended tour with mythology sessions',
      'Day 3: Sacred baths and departure blessings',
    ],
    rating: 4.9,
  },
  {
    id: '4',
    name: 'Parivar Package',
    image: saryuGhat,
    duration: '2 Days / 1 Night',
    price: 7999,
    highlights: ['Family-Friendly Tour', 'Kids Activities', 'Photography Session'],
    includes: ['Family Guide', 'Family Room', 'All Meals', 'Souvenirs'],
    itinerary: [
      'Day 1: Kid-friendly temple visits',
      'Day 1 Evening: River activities and storytelling',
      'Day 2: Photo tour and shopping',
    ],
    rating: 4.7,
  },
];
