import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/Pages').then(module => ({ default: module.ServicesPage })));
const ServiceDetail = lazy(() => import('./pages/Pages').then(module => ({ default: module.ServiceDetail })));
const TeamPage = lazy(() => import('./pages/Pages').then(module => ({ default: module.TeamPage })));
const FacilitiesPage = lazy(() => import('./pages/Pages').then(module => ({ default: module.FacilitiesPage })));
const PetCarePage = lazy(() => import('./pages/Pages').then(module => ({ default: module.PetCarePage })));
const PetCareArticlePage = lazy(() => import('./pages/Pages').then(module => ({ default: module.PetCareArticlePage })));
const ContactPage = lazy(() => import('./pages/Pages').then(module => ({ default: module.ContactPage })));
const PrivacyPage = lazy(() => import('./pages/LegalPages').then(module => ({ default: module.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/LegalPages').then(module => ({ default: module.TermsPage })));

function RouteFallback() {
  return <div className="route-loader" role="status" aria-live="polite"><span/>Cargando página…</div>;
}

export default function App() {
  return <Layout><Suspense fallback={<RouteFallback/>}><Routes><Route path="/" element={<Home/>}/><Route path="/services" element={<ServicesPage/>}/><Route path="/services/:slug" element={<ServiceDetail/>}/><Route path="/team" element={<TeamPage/>}/><Route path="/facilities" element={<FacilitiesPage/>}/><Route path="/pet-care" element={<PetCarePage/>}/><Route path="/pet-care/:slug" element={<PetCareArticlePage/>}/><Route path="/contact" element={<ContactPage/>}/><Route path="/privacy" element={<PrivacyPage/>}/><Route path="/terms" element={<TermsPage/>}/><Route path="*" element={<Home/>}/></Routes></Suspense></Layout>;
}
