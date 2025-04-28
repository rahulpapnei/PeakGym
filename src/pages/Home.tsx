import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getMensProducts } from './MensProducts';

const Home = () => {
  const navigate = useNavigate();
  const bestSellers = getMensProducts().slice(0, 4)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1629426958003-35a5583b2977?q"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-white mb-6 font-heading">
              ELEVATE YOUR STYLE
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Premium t-shirts designed for the modern man. Quality, comfort, and style in every stitch.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => navigate('/mens')}
                className="bg-white text-black px-8 py-3 rounded-none font-semibold hover:bg-gray-100 transition-colors"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold font-heading text-primary">BEST SELLERS</h2>
            <button
              onClick={() => navigate('/mens?sort=best-selling')}
              className="flex items-center gap-2 text-primary hover:text-secondary"
            >
              VIEW ALL
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer"
                onClick={() => navigate(`/mens/${product.id}`)}
              >
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform"
                  />
                  {product.discount > 0 && (
                    <div className="absolute top-4 right-4 bg-accent text-background px-2 py-1 text-sm">
                      {product.discount}% OFF
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary">{product.name}</h3>
                <div className="flex items-center gap-2">
  {product.discount > 0 ? (
    <>
      <span className="text-lg font-bold text-primary">
        ₹{(product.originalPrice - (product.originalPrice * product.discount / 100)).toFixed(2)}
      </span>
      <span className="text-secondary line-through">₹{product.originalPrice}</span>
    </>
  ) : (
    <span className="text-lg font-bold text-primary">₹{product.originalPrice}</span>
  )}
</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook Section */}
      <section className="py-20 bg-white text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center font-heading">LOOKBOOK</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000014774123-Red-RED-1000014774123_01-2100.jpg"
                alt="Spring Collection Lookbook"
                className="h-[500px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl text-white font-bold mb-2">URBAN STYLE</h3>
                <p className="text-white/80">Street-inspired looks for the modern man</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="https://media-uk.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000012657281-Purple-PURPLE-1000012657281_01-2100.jpg"
                alt="Summer Collection Lookbook"
                className="h-[500px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl text-white font-bold mb-2">MINIMALIST</h3>
                <p className="text-white/80">Clean, simple, and sophisticated</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
