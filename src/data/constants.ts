export const WHATSAPP_NUMBER = "919004750603";
export const WHATSAPP_DEFAULT_MSG = "Hi! Can I get more details about your Maharashtra tour packages?";

export const generateWhatsAppLink = (message = WHATSAPP_DEFAULT_MSG) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const CONTACT_INFO = {
  vrushali: "7700076554",
  yogesh: "9004750603",
  whatsapp: WHATSAPP_NUMBER,
  email: "hello@vytours.com"
};

export const DESTINATIONS = [
  { id: 'lonavala', name: 'Lonavala & Khandala', desc: 'Misty hills and cascading waterfalls.', img: '/dest_lonavala.jpg' },
  { id: 'mahabaleshwar', name: 'Mahabaleshwar', desc: 'Strawberry fields and stunning viewpoints.', img: '/dest_mahabaleshwar.jpg' },
  { id: 'matheran', name: 'Matheran', desc: 'Asia’s only automobile-free hill station.', img: null },
  { id: 'alibaug', name: 'Alibaug', desc: 'Golden beaches and coastal forts.', img: '/dest_alibaug.jpg' },
  { id: 'igatpuri', name: 'Igatpuri', desc: 'Serene nature and wellness retreats.', img: null },
  { id: 'nashik', name: 'Nashik', desc: 'Wine capital of India.', img: '/dest_nashik.jpg' },
  { id: 'konkan', name: 'Konkan', desc: 'Untouched beaches and authentic seafood.', img: null },
  { id: 'ratnagiri', name: 'Ratnagiri', desc: 'Alphonso mangoes and historic temples.', img: null },
  { id: 'sindhudurg', name: 'Sindhudurg', desc: 'Magnificent sea forts and scuba diving.', img: null },
  { id: 'pune', name: 'Pune', desc: 'Cultural capital with a rich Maratha history.', img: null },
  { id: 'mumbai', name: 'Mumbai', desc: 'The city of dreams and colonial heritage.', img: null },
  { id: 'sambhajinagar', name: 'Chhatrapati Sambhajinagar', desc: 'Gateway to ancient rock-cut caves.', img: null },
  { id: 'ajanta', name: 'Ajanta & Ellora', desc: 'UNESCO World Heritage architectural marvels.', img: null },
  { id: 'tadoba', name: 'Tadoba', desc: 'Thrilling tiger safaris and rich wildlife.', img: '/dest_tadoba.jpg' },
  { id: 'kolhapur', name: 'Kolhapur', desc: 'Spiritual heritage and spicy local cuisine.', img: null },
];

export const EXPERIENCES = [
  { id: 'hill', label: 'Hill Station Escapes', icon: '🏔️', img: '/exp_hill.jpg' },
  { id: 'coastal', label: 'Coastal Getaways', icon: '🌊', img: '/exp_coastal.jpg' },
  { id: 'fort', label: 'Fort & Heritage Trails', icon: '🏰', img: '/exp_fort.jpg' },
  { id: 'nature', label: 'Nature & Wildlife', icon: '🌿', img: '/dest_tadoba.jpg' },
  { id: 'spiritual', label: 'Spiritual Journeys', icon: '🛕', img: '/exp_spiritual.jpg' },
  { id: 'food', label: 'Food & Culture', icon: '🍽️', img: '/gal_1.jpg' },
  { id: 'couple', label: 'Couple Getaways', icon: '💕', img: '/gal_5.jpg' },
  { id: 'family', label: 'Family Adventures', icon: '👨‍👩‍👧', img: null },
];

export const TOUR_PACKAGES = [
  {
    id: 'pkg1',
    title: 'Lonavala Weekend Escape',
    duration: '2 Days / 1 Night',
    price: '₹3,999',
    img: '/pkg_lonavala.jpg',
    highlights: ['Stay in a premium hill resort', 'Visit Tiger Point & Bhushi Dam', 'Complimentary breakfast & dinner']
  },
  {
    id: 'pkg2',
    title: 'Mahabaleshwar Hill Retreat',
    duration: '3 Days / 2 Nights',
    price: '₹5,999',
    img: '/dest_mahabaleshwar.jpg',
    highlights: ['Sightseeing of Pratapgarh Fort', 'Strawberry farm visit & tasting', 'Boating at Venna Lake']
  },
  {
    id: 'pkg3',
    title: 'Konkan Coastal Escape',
    duration: '4 Days / 3 Nights',
    price: '₹8,499',
    img: '/pkg_konkan.jpg',
    highlights: ['Beachfront cottage stay', 'Authentic Malvani cuisine meals', 'Sindhudurg Fort tour & scuba diving']
  },
  {
    id: 'pkg4',
    title: 'Maharashtra Heritage Trail',
    duration: '5 Days / 4 Nights',
    price: '₹12,999',
    img: '/pkg_heritage.jpg',
    highlights: ['Ajanta & Ellora caves tour', 'Daulatabad Fort exploration', 'Guided historical walks with experts']
  },
  {
    id: 'pkg5',
    title: 'Alibaug Beach Getaway',
    duration: '2 Days / 1 Night',
    price: '₹4,499',
    img: '/dest_alibaug.jpg',
    highlights: ['Ferry tickets from Mumbai included', 'Stay near Nagaon Beach', 'Water sports assistance provided']
  },
  {
    id: 'pkg6',
    title: 'Nashik Wine & Nature Tour',
    duration: '2 Days / 1 Night',
    price: '₹4,999',
    img: '/dest_nashik.jpg',
    highlights: ['Vineyard tour and wine tasting', 'Trimbakeshwar temple visit', 'Stay amidst lush green valleys']
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Sharma',
    hometown: 'Mumbai',
    rating: 5,
    text: 'Our family trip to Mahabaleshwar was perfectly arranged by VY Tours. The hotel was fantastic and the itinerary was relaxed yet covered everything.',
  },
  {
    id: 2,
    name: 'Rahul & Sneha',
    hometown: 'Pune',
    rating: 5,
    text: 'Booked the Konkan coastal package for our anniversary. The beachfront property they suggested was a hidden gem! Highly recommend Yogesh and Vrushali.',
  },
  {
    id: 3,
    name: 'Amit Patel',
    hometown: 'Ahmedabad',
    rating: 5,
    text: 'Very professional and genuinely caring travel hosts. They handled everything for our Nashik trip. The vineyard experience was unforgettable.',
  },
  {
    id: 4,
    name: 'Neha Desai',
    hometown: 'Delhi',
    rating: 5,
    text: 'As a solo female traveler, I was hesitant about the Heritage trail, but VY Tours made me feel completely safe and planned the best transport.',
  },
  {
    id: 5,
    name: 'Karan Singh',
    hometown: 'Bengaluru',
    rating: 5,
    text: 'The Lonavala weekend escape was exactly what we needed. Hassle-free booking, great price, and wonderful memories made.',
  }
];
