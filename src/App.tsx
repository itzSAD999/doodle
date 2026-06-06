import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import IndustriesPage from './pages/IndustriesPage';
import AboutPage from './pages/AboutPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="services/:serviceId" element={<ServiceDetailsPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="genai" element={<PlaceholderPage title="Gen AI Center of Excellence" />} />
          <Route path="success-stories" element={<SuccessStoriesPage />} />
          <Route path="careers" element={<PlaceholderPage title="Careers at doodleblue" />} />
          <Route path="blogs" element={<PlaceholderPage title="Latest Insights & Blogs" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
