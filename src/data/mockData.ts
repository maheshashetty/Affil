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
    asin: 'B0D79S575Z',
    name: 'Ray-Ban Meta Smart Glasses (Wayfarer)',
    slug: 'ray-ban-meta-smart-glasses-review',
    category: 'tech',
    categoryName: 'Tech & Gadgets',
    shortDescription: 'The ultimate wearable tech for creators and social media enthusiasts.',
    fullReview: 'The Ray-Ban Meta glasses bridge the gap between style and utility. With an improved 12MP camera and open-ear audio, they allow for hands-free content creation and seamless AI assistance. The integration with Meta AI makes them more than just a camera; they are a wearable personal assistant that looks like a classic fashion staple.',
    rating: 4.5,
    reviewCount: 1850,
    ourScore: 9.4,
    price: 299.00,
    images: ['https://m.media-amazon.com/images/I/51AAtR8+9sL._AC_SL1500_.jpg'],
    pros: ['Seamless social sharing', 'Excellent open-ear audio', 'Iconic Wayfarer design'],
    cons: ['Limited battery life', 'Meta account required'],
    specs: { 'Camera': '12MP', 'Storage': '32GB', 'Battery': '4 hours per charge' },
    tags: ['wearables', 'ai', 'creator'],
    isEditorChoice: true,
    isBestValue: false,
    publishedAt: '2026-04-27',
  },
  {
    id: '2',
    asin: 'B0C7S2TMZ1',
    name: 'Anker 737 Power Bank (PowerCore 24K)',
    slug: 'anker-737-power-bank-review',
    category: 'tech',
    categoryName: 'Tech & Gadgets',
    shortDescription: 'Ultra-powerful 140W portable charger with a smart digital display.',
    fullReview: 'Ankers 737 is a powerhouse. Capable of charging a MacBook Pro at full speed while on the go, its smart display gives you real-time data on input/output power. It is the gold standard for travelers and digital nomads who cannot afford to run out of juice.',
    rating: 4.7,
    reviewCount: 12400,
    ourScore: 9.2,
    price: 149.99,
    images: ['https://m.media-amazon.com/images/I/61S-r5U-7YL._AC_SL1500_.jpg'],
    pros: ['140W fast charging', 'Intuitive smart display', 'Massive capacity'],
    cons: ['Heavy weight', 'Takes up significant bag space'],
    specs: { 'Capacity': '24,000mAh', 'Max Output': '140W', 'Ports': '2x USB-C, 1x USB-A' },
    tags: ['charging', 'travel', 'productivity'],
    isEditorChoice: false,
    isBestValue: true,
    publishedAt: '2026-04-27',
  },
  {
    id: '3',
    asin: 'B0CX985QBC',
    name: 'ARZOPA Portable Monitor S1 Table',
    slug: 'arzopa-portable-monitor-review',
    category: 'tech',
    categoryName: 'Tech & Gadgets',
    shortDescription: 'Boost your productivity with a 15.6-inch ultra-slim dual screen.',
    fullReview: 'The ARZOPA S1 is a game changer for remote workers. It is plug-and-play via USB-C, lightweight enough to slip into a backpack, and provides a crisp 1080P FHD experience for a fraction of the cost of premium brands.',
    rating: 4.5,
    reviewCount: 28000,
    ourScore: 9.0,
    price: 89.98,
    images: ['https://m.media-amazon.com/images/I/71YyO3Z17DL._AC_SL1500_.jpg'],
    pros: ['Extremely affordable', 'Plug-and-play', 'Ultra-slim profile'],
    cons: ['Average color accuracy', 'Weak internal speakers'],
    specs: { 'Resolution': '1920x1080', 'Panel': 'IPS', 'Size': '15.6 inch' },
    tags: ['productivity', 'monitor', 'wfh'],
    isEditorChoice: false,
    isBestValue: true,
    publishedAt: '2026-04-27',
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
