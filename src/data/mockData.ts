export type CategorySlug = 'tech' | 'kitchen' | 'fitness' | 'beauty' | 'outdoor' | 'pets';

export interface Product {
  id: string;
  asin: string;
  name: string;
  slug: string;
  category: CategorySlug;
  categoryName: string;
  shortDescription: string;
  fullReview: string;
  rating: number;
  reviewCount: number;
  ourScore: number;
  price: number;
  originalPrice?: number;
  affiliateUrl: string;
  images: string[];
  pros: string[];
  cons: string[];
  specs: Record<string, string>;
  tags: string[];
  isEditorChoice: boolean;
  isBestValue: boolean;
  publishedAt: string;
}

export const CATEGORIES = [
  { slug: 'tech', name: 'Tech & Gadgets', icon: 'Cpu' },
  { slug: 'kitchen', name: 'Home & Kitchen', icon: 'CookingPot' },
  { slug: 'fitness', name: 'Fitness & Health', icon: 'Dumbbell' },
  { slug: 'beauty', name: 'Beauty & Personal Care', icon: 'Sparkles' },
  { slug: 'outdoor', name: 'Outdoor & Sports', icon: 'Tent' },
  { slug: 'pets', name: 'Pet Supplies', icon: 'PawPrint' },
];

export const PRODUCTS: Product[] = [
  // TECH
  {
    id: '1',
    asin: 'B09G96TFF7',
    name: 'Sony WH-1000XM5 Wireless Headphones',
    slug: 'sony-wh1000xm5-headphones',
    category: 'tech',
    categoryName: 'Tech & Gadgets',
    shortDescription: 'The industry-leading noise cancelling headphones with exceptional sound quality.',
    fullReview: 'The Sony WH-1000XM5 headphones set a new standard for noise-cancelling performance and audio quality. With a refined design and improved microphones, they are perfect for both travel and work.',
    rating: 4.8,
    reviewCount: 15420,
    ourScore: 9.6,
    price: 348.00,
    originalPrice: 399.00,
    affiliateUrl: 'https://amazon.com/dp/B09G96TFF7?tag=bestpickshub-20',
    images: ['https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?q=80&w=800&auto=format&fit=crop'],
    pros: ['Best-in-class ANC', 'Comfortable for long wear', 'Excellent call quality', 'Long battery life'],
    cons: ['Does not fold as small as XM4', 'Premium price point'],
    specs: { 'Battery Life': '30 hours', 'Noise Cancelling': 'Industry Leading', 'Bluetooth': '5.2' },
    tags: ['audio', 'noise-cancelling', 'wireless'],
    isEditorChoice: true,
    isBestValue: false,
    publishedAt: '2025-01-15',
  },
  {
    id: '2',
    asin: 'B08H93ZRLL',
    name: 'Keychron K2 Mechanical Keyboard',
    slug: 'keychron-k2-keyboard',
    category: 'tech',
    categoryName: 'Tech & Gadgets',
    shortDescription: 'A compact 75% layout wireless mechanical keyboard for Mac and Windows.',
    rating: 4.6,
    reviewCount: 3200,
    ourScore: 8.8,
    price: 79.99,
    affiliateUrl: 'https://amazon.com/dp/B08H93ZRLL?tag=bestpickshub-20',
    images: ['https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800&auto=format&fit=crop'],
    pros: ['Hot-swappable', 'Tactile typing experience', 'Great battery life', 'Wireless/Wired mode'],
    cons: ['Quite thick/tall', 'ABS keycaps feel average'],
    specs: { 'Layout': '75%', 'Connect': 'Bluetooth/USB-C', 'Switches': 'Gateron G Pro' },
    tags: ['keyboard', 'mechanical', 'productivity'],
    isEditorChoice: false,
    isBestValue: true,
    publishedAt: '2025-02-10',
    fullReview: 'A solid entry-point for mechanical keyboard enthusiasts.',
  },
  // KITCHEN
  {
    id: '3',
    asin: 'B0868846C5',
    name: 'Ninja AF101 Air Fryer',
    slug: 'ninja-af101-air-fryer',
    category: 'kitchen',
    categoryName: 'Home & Kitchen',
    shortDescription: 'The quick and easy way to cook your favorite foods with 75% less fat.',
    rating: 4.8,
    reviewCount: 45000,
    ourScore: 9.2,
    price: 89.99,
    originalPrice: 129.99,
    affiliateUrl: 'https://amazon.com/dp/B0868846C5?tag=bestpickshub-20',
    images: ['https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop'],
    pros: ['Fast cooking', 'Easy to clean', 'Compact size', 'Crispy results'],
    cons: ['Small capacity for families', 'Fan can be loud'],
    specs: { 'Capacity': '4 Quart', 'Temp Range': '105-400°F', 'Wattage': '1550W' },
    tags: ['cooking', 'air-fryer', 'healthy'],
    isEditorChoice: true,
    isBestValue: true,
    publishedAt: '2025-03-01',
    fullReview: 'The Ninja AF101 is a kitchen staple for those looking to eat healthier without sacrificing flavor.',
  },
  // Adding more mock data entries for variety
  {
    id: '4',
    asin: 'B00RGH08C6',
    name: 'Manduka PRO Yoga Mat',
    slug: 'manduka-pro-yoga-mat',
    category: 'fitness',
    categoryName: 'Fitness & Health',
    shortDescription: 'High-performance yoga mat, dense cushioning, and legendary durability.',
    rating: 4.7,
    reviewCount: 8900,
    ourScore: 9.5,
    price: 129.00,
    affiliateUrl: 'https://amazon.com/dp/B00RGH08C6?tag=bestpickshub-20',
    images: ['https://images.unsplash.com/photo-1592432678016-e910b452f9a2?q=80&w=800&auto=format&fit=crop'],
    pros: ['Lifetime guarantee', 'Eco-friendly', 'Excellent grip'],
    cons: ['Heavy to carry', 'Breaking-in period required'],
    specs: { 'Material': 'PVC', 'Thickness': '6mm', 'Length': '71 inches' },
    tags: ['fitness', 'yoga', 'durability'],
    isEditorChoice: true,
    isBestValue: false,
    publishedAt: '2025-01-20',
    fullReview: 'The last yoga mat you will ever need to buy.',
  },
  {
    id: '5',
    asin: 'B07V39F76H',
    name: 'Hydro Flask Water Bottle',
    slug: 'hydro-flask-water-bottle',
    category: 'outdoor',
    categoryName: 'Outdoor & Sports',
    shortDescription: 'Insulated stainless steel water bottle with wide mouth and straw lid.',
    rating: 4.9,
    reviewCount: 32000,
    ourScore: 9.0,
    price: 44.95,
    affiliateUrl: 'https://amazon.com/dp/B07V39F76H?tag=bestpickshub-20',
    images: ['https://images.unsplash.com/photo-1602143399827-bd9396fbc3a9?q=80&w=800&auto=format&fit=crop'],
    pros: ['Keeps drinks cold 24h', 'Durable powder coat', 'BPA-free'],
    cons: ['Expensive for a bottle', 'Not dishwasher safe (standard)'],
    specs: { 'Capacity': '32 oz', 'Insulation': 'TempShield', 'Material': 'Steel' },
    tags: ['outdoor', 'hydration', 'hiking'],
    isEditorChoice: false,
    isBestValue: false,
    publishedAt: '2025-02-15',
    fullReview: 'A reliable companion for everyday hydration.',
  }
];
