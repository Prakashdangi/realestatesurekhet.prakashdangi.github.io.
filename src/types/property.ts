export interface Property {
  id: string;
  title: string;
  type: 'house' | 'land' | 'apartment' | 'commercial';
  price: number;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  areaUnit: 'sqft' | 'acres';
  description: string;
  image: string;
  featured: boolean;
  status: 'available' | 'pending' | 'sold';
  createdAt: Date;
}

export interface ContactInquiry {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyInterest?: string;
}
