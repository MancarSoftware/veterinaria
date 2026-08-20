import { useEffect, useLayoutEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Activity, ArrowRight, Clock3, Mail, MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { business } from '../config/business';
import { generalWhatsApp } from '../utils/whatsapp';

const links = [
  ['/', 'Inicio'], ['/services', 'Servicios'], ['/team', 'Equipo'],
  ['/facilities', 'Espacios'], ['/pet-care', 'Cuidados'], ['/contact', 'Contacto'],
];

function TikTokIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.6 3c.3 2.5 1.8 4 4.4 4.2v3.1a8.1 8.1 0 0 1-4.4-1.4v6.2a6.1 6.1 0 1 1-5.3-6V12a3.1 3.1 0 1 0 2.2 3V3h3.1Z" fill="currentColor" stroke="none"/></svg>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>;
}

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.3 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V10H8v3h2.9v8h3.4Z" fill="currentColor" stroke="none"/></svg>;
}

function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const previous = history.scrollRestoration;
    history.scrollRestoration = 'manual';
    return () => { history.scrollRestoration = previous; };
  }, []);

  useLayoutEffect(() => {
    const moveToDestination = () => {
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) {
          target.scrollIntoView({ block: 'start', behavior: 'auto' });
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    moveToDestination();
    const frame = requestAnimationFrame(moveToDestination);
    const timer = window.setTimeout(moveToDestination, 80);
    return () => { cancelAnimationFrame(frame); clearTimeout(timer); };
  }, [pathname, hash, key]);

  return null;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(scrollY > 30);
    updateHeader();
    addEventListener('scroll', updateHeader, { passive: true });
    return () => removeEventListener('scroll', updateHeader);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  const navigateFromHeader = () => {
    setOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  return <>
    <div className={`utility-bar ${scrolled ? 'hidden' : ''}`}>
      <span>{business.address} · {business.city}</span>
      <a href={`tel:${business.emergencyPhone}`}><Activity size={13}/> Emergencias · {business.emergencyPhone}</a>
    </div>
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="logo" aria-label="Alma Vet, inicio" onClick={navigateFromHeader}>
        <span>AV</span><b>ALMA VET<small>CLÍNICA VETERINARIA</small></b>
      </Link>
      <nav className={open ? 'open' : ''} aria-label="Navegación principal">
        {links.map(([to, label]) => <NavLink key={to} to={to} onClick={navigateFromHeader}>{label}</NavLink>)}
      </nav>
      <button className="menu" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>{open ? <X/> : <Menu/>}</button>
    </header>
  </>;
}

export function Footer() {
  const { pathname } = useLocation();
  const showAppointmentCta = !['/contact', '/privacy', '/terms'].includes(pathname);
  const navigateToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

  return <footer>
    {showAppointmentCta && <div className="footer-cta">
      <div><span>Tu mascota merece atención clara y cercana</span><h2>¿Listos para su próxima visita?</h2></div>
      <Link className="footer-cta-link" to="/contact#appointment">Solicitar una cita <ArrowRight/></Link>
    </div>}
    <div className="footer-main">
      <div className="footer-brand"><div className="logo light"><span>AV</span><b>ALMA VET<small>CLÍNICA VETERINARIA</small></b></div><p>{business.tagline}<br/>Cuidamos la salud y el vínculo que comparten.</p><div className="social"><a href={business.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon/></a><a href={business.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon/></a><a href={business.socials.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok"><TikTokIcon/></a></div></div>
      <div className="footer-nav"><h4>Explora</h4>{links.slice(1).map(([to, label]) => <Link to={to} key={to} onClick={navigateToTop}>{label}<ArrowRight/></Link>)}</div>
      <div className="footer-contact"><h4>Hablemos</h4><a href={`tel:${business.phone}`}><Phone/><span><small>Teléfono</small>{business.phone}</span></a><a href={generalWhatsApp}><MessageCircle/><span><small>WhatsApp</small>Escribir al equipo</span></a><a href={`mailto:${business.email}`}><Mail/><span><small>Correo</small>{business.email}</span></a></div>
      <div className="footer-hours"><h4>Visítanos</h4><div><MapPin/><span>{business.address}<br/>{business.city}</span></div><div><Clock3/><span>{business.openingHours.map(item => <small key={item}>{item}</small>)}<small className="emergency-hours">{business.emergencyHours}</small></span></div></div>
    </div>
    <div className="footer-bottom"><span>© 2026 Alma Vet. Información educativa; no sustituye una consulta veterinaria.</span><nav className="footer-legal" aria-label="Información legal"><Link to="/privacy" onClick={navigateToTop}>Privacidad y seguridad</Link><Link to="/terms" onClick={navigateToTop}>Términos de uso</Link></nav></div>
  </footer>;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <><ScrollManager/><Header/><main>{children}</main><Footer/></>;
}
