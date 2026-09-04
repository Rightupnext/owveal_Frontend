import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // 1. Import ScrollToTop
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import ClientSuccessStoriesPage from './components/success/ClientSuccessStoriesPage';
import CaseStudiesPage from './components/CaseStudiesPage/CaseStudiesPage';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import CareersPage from './components/CareersPage/CareersPage';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import ContactUsPage from './components/Contact/Contact';
import ProductsSection from './components/Products/ProductsSection'; // Import the ProductsSection component
import EngineeringSection from './components/EngineeringSection/EngineeringSection'; // Import the EngineeringSection component
import Healthcare from './components/Helathcare'; // Import the OwvealHealthcare component
import TechnologyPage from './components/Technology/Technologypage';
import RailwayPage from './components/Railwaypage/Railwaypage';
import AerospacePage from './components/Aerospace/Aerospacepage';
import DefensePage from './components/Defensepage/Defensepage';
import AutomotivePage from './components/Automotive/Automotive';
import PharmaceuticalsPage from './components/Pharmaceuticalspage/Pharmaceuticals';
import HeavyMachineryPage from './components/Heavymachinerypage/Heavymachinery';
import FoodBeveragePage from './components/Foodbeveragepage/Foodbeverage';
import AgroTechPage from './components/Agrotechpage/Agrotech';
import EngineeringRnDPage from './components/ExperticesPages/Engineering';
import EducationPage from './components/ExperticesPages/Education';
import ManufacturingPage from './components/ExperticesPages/Manufacturing';
import DigitalSolutionsPage from './components/ExperticesPages/Digitalsolutions';





function App() {
  return (
    <BrowserRouter>
      {/* 2. Resets viewport scroll position on route transitions */}
      <ScrollToTop /> 

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success-stories" element={<ClientSuccessStoriesPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/engineering" element={<EngineeringSection />} />
        <Route path="/products" element={<ProductsSection />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/industries/healthcare" element={<Healthcare />} />
        <Route path="/industries/Technology" element={<TechnologyPage />} />
        <Route path="/industries/railway" element={<RailwayPage />} />
        <Route path="/industries/aerospace" element={<AerospacePage />} />
        <Route path="/industries/defense" element={<DefensePage />} />
        <Route path="/industries/automotive" element={<AutomotivePage />} />
        <Route path="industries/pharmaceuticals" element={<PharmaceuticalsPage />} />
        <Route path="/industries/heavy-machinery" element={<HeavyMachineryPage />} />
        <Route path="/industries/food-beverage" element={<FoodBeveragePage />} />
        <Route path="/industries/agro-tech" element={<AgroTechPage />} />
        <Route path="/expertise/engineering-rd" element={<EngineeringRnDPage />} />
        <Route path="/expertise/education" element={<EducationPage/>} />
        <Route path="/expertise/manufacturing" element={<ManufacturingPage/>} />
        <Route path="/expertise/digital-solutions" element={<DigitalSolutionsPage/>} />
 
      </Routes>

      <WhatsAppFloatingButton />
      <Footer />
    </BrowserRouter>
  );
}

export default App;