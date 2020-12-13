export { Layout } from './layout';
export { AppSidebar } from './layout/appSidebar';
export { Logo } from './logo';
export { PropertyCard } from './propertyCard';
export { ImageGallery } from './imageGallery';
export { PropertyPageForm } from './propertyPageForm';

export interface PropertyCardProps{
  name: string,
  city: string,
  price: number,
  bed: number,
  bath: number,
  thumbnail: string,
}

export interface PropertyDataType {
  name: string,
  price: number,
  currency: string,
  address: {
    line: string,
    city: string,
    provinceStateRegion: string,
    country: string,
    zipCode: string
  },
  details: {
    size: {
      area: number,
      unit: string,
      floors: number
    },
    amenities: Array<{type: string, qty: number}>
  },
  images: Array<{type: string, url: string}>
}

export type PropertyFormType = Omit<PropertyDataType, "images">