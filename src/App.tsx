
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // ✅ Import HelmetProvider
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/About/AboutPage';
import CartPage from './pages/CartPage';
import Contact from './pages/About/Contact';
import Community from './pages/About/Community';
import Accessories from './pages/category/Accessories';
import NewReleases from './pages/category/NewReleases';
import Men from './pages/category/Men';
import Women from './pages/category/Women';

function App() {
  return (
    <HelmetProvider> {/* ✅ Wrap everything inside HelmetProvider */}
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/help/contact" element={<Contact />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/about/our-story" element={<AboutPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about/community" element={<Community />} />
              <Route path="/new-releases" element={<NewReleases />} />
              <Route path="/men-wear" element={<Men/>} />
              <Route path="/women-wear" element={<Women/>} />
              <Route path="/gym-accessories" element={<Accessories/>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
