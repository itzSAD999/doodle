import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import SubServiceDetailsPage from './pages/SubServiceDetailsPage';
import Industries from './pages/Industries';
import IndustryDetails from './pages/IndustryDetails';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import SuccessStories from './pages/SuccessStories';
import SuccessStoryDetails from './pages/SuccessStoryDetails';
import PlaceholderPage from './pages/PlaceholderPage';
import GenAIPage from './pages/GenAIPage';
import Approach from './pages/Approach';
import Careers from './pages/Careers';
import ApplyNow from './pages/ApplyNow';
import Blogs from './pages/Blogs';
import TermsAndConditions from './pages/TermsAndConditions';
import CSRPolicy from './pages/CSRPolicy';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:serviceId" element={<ServiceDetailsPage />} />
          <Route path="services/:serviceId/:subServiceId" element={<SubServiceDetailsPage />} />
          <Route path="industries" element={<Industries />} />
          <Route path="industries/:id" element={<IndustryDetails />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="approach" element={<Approach />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="genai" element={<GenAIPage />} />
          <Route path="gen-ai" element={<GenAIPage />} />
          <Route path="success-stories" element={<SuccessStories />} />
          <Route path="success-stories/:id" element={<SuccessStoryDetails />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="terms" element={<TermsAndConditions />} />
          <Route path="csr-policy" element={<CSRPolicy />} />
          <Route path="csr" element={<CSRPolicy />} />
          <Route path="careers" element={<Careers />} />
          <Route path="careers/openings" element={<ApplyNow />} />
          <Route path="careers/apply-now" element={<ApplyNow />} />
          <Route path="careers/interns" element={<ApplyNow />} />
          <Route path="careers/upskill" element={<ApplyNow />} />
          <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; // Trigger reload
