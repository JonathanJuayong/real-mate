export { Layout } from './layout';
export { AppSidebar } from './layout/appSidebar';
export { Logo } from './logo';
export { PropertyCard } from './propertyCard';
export { ImageGallery } from './imageGallery';

export interface PropertyCardProps{
  name: string,
  city: string,
  price: number,
  bed: number,
  bath: number,
  thumbnail: string,
}