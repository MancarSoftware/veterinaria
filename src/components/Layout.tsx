import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Activity, ArrowRight, Clock3, Mail, MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { business } from '../config/business';
import { generalWhatsApp } from '../utils/whatsapp';

const links = [
  ['/', 'Inicio'], ['/services', 'Servicios'], ['/team', 'Equipo'],
  ['/facilities', 'Espacios'], ['/pet-care', 'Cuidados'], ['/contact', 'Contacto'],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(scrollY > 30);
    updateHeader();
    addEventListener('scroll', updateHeader, { passive: true });
    return () => removeEventListener('scroll', updateHeader);
  }, []);

  return <>
    <div className={`utility-bar ${scrolled ? 'hidden' : ''}`}>
      <span>{business.address} · {business.city}</span>
      <a href={`tel:${business.emergencyPhone}`}><Activity size={13}/> Emergencias · {business.emergencyPhone}</a>
    </div>
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="logo" aria-label="Alma Vet, inicio">
        <span>AV</span><b>ALMA VET<small>CLÍNICA VETERINARIA</small></b>
      </Link>
      <nav className={open ? 'open' : ''} aria-label="Navegación principal">
        {links.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}
      </nav>
      <button className="menu" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>{open ? <X/> : <Menu/>}</button>
    </header>
  </>;
}

export function Footer() {
  return <footer>
    <div className="footer-cta">
      <div><span>Tu mascota merece atención clara y cercana</span><h2>¿Listos para su próxima visita?</h2></div>
      <Link className="footer-cta-link" to="/contact#appointment">Solicitar una cita <ArrowRight/></Link>
    </div>
    <div className="footer-main">
      <div className="footer-brand"><div className="logo light"><span>AV</span><b>ALMA VET<small>CLÍNICA VETERINARIA</small></b></div><p>{business.tagline}<br/>Cuidamos la salud y el vínculo que comparten.</p><div className="social"><a href={business.socials.instagram} target="_blank" rel="noreferrer">Instagram <ArrowRight/></a><a href={business.socials.facebook} target="_blank" rel="noreferrer">Facebook <ArrowRight/></a></div></div>
      <div className="footer-nav"><h4>Explora</h4>{links.slice(1).map(([to, label]) => <Link to={to} key={to}>{label}<ArrowRight/></Link>)}</div>
      <div className="footer-contact"><h4>Hablemos</h4><a href={`tel:${business.phone}`}><Phone/><span><small>Teléfono</small>{business.phone}</span></a><a href={generalWhatsApp}><MessageCircle/><span><small>WhatsApp</small>Escribir al equipo</span></a><a href={`mailto:${business.email}`}><Mail/><span><small>Correo</small>{business.email}</span></a></div>
      <div className="footer-hours"><h4>Visítanos</h4><div><MapPin/><span>{business.address}<br/>{business.city}</span></div><div><Clock3/><span>{business.openingHours.map(item => <small key={item}>{item}</small>)}<small className="emergency-hours">{business.emergencyHours}</small></span></div></div>
    </div>
    <div className="footer-bottom"><span>© 2026 Alma Vet. Información educativa; no sustituye una consulta veterinaria.</span><span>Privacidad · Términos</span></div>
    <div className="mobile-actions"><a href={`tel:${business.phone}`}><Phone/>Llamar</a><a href={generalWhatsApp}><MessageCircle/>WhatsApp</a></div>
  </footer>;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <><Header/><main>{children}</main><Footer/></>;
}
