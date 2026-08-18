import { business } from '../config/business';
export const whatsappUrl=(message:string)=>`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
export const generalWhatsApp=whatsappUrl(`Hola, quisiera información sobre los servicios de ${business.clinicName}.`);
