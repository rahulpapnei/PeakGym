import { Award, Users, Clock, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 navbar-spacing">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-primary">About Aristo</h1>
        <p className="text-xl text-secondary max-w-3xl mx-auto">
        Aristo creates comfortable, stylish t-shirts designed for everyday life. With quality you can feel and fits that just work, it’s your go-to brand for effortless, reliable style.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <img
            src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f"
            alt="Gym interior"
            className="rounded-lg shadow-lg w-full h-[400px] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Something About Us</h2>
          <p className="text-secondary mb-4">
          Aristo makes t-shirts that feel just right—soft on the skin, easy to wear, and built to last. Whether you're out with friends or relaxing at home, Aristo fits in perfectly.
          </p>
          <p className="text-secondary">
          We focus on simple styles and clean designs that work for anyone. No loud prints or fast trends—just good quality t-shirts that make you feel comfortable and confident every time you wear them.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center p-6 bg-card rounded-lg shadow border border-border">
          <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2 text-primary">Premium Comfort</h3>
          <p className="text-secondary">Our t-shirts are crafted with soft, breathable fabric that feels great from morning to night</p>
        </div>
        <div className="text-center p-6 bg-card rounded-lg shadow border border-border">
          <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2 text-primary">Perfect Fit</h3>
          <p className="text-secondary">Tailored to suit every body type—no sagging, no tight spots, just the right fit</p>
        </div>
        <div className="text-center p-6 bg-card rounded-lg shadow border border-border">
          <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2 text-primary">Long-Lasting Quality</h3>
          <p className="text-secondary">Built to last through countless washes without losing shape, color, or softness</p>
        </div>
        <div className="text-center p-6 bg-card rounded-lg shadow border border-border">
          <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2 text-primary">Timeless Style</h3>
          <p className="text-secondary">Minimalist, clean designs that stay in fashion and pair well with anything</p>
        </div>
      </div>
    </div>
  );
};

export default About;