import { Award, Users, Clock, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleBecomeMember = () => {
    navigate('/contact');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 navbar-spacing">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-primary">About Peak Gym</h1>
        <p className="text-xl text-secondary max-w-3xl mx-auto">
          We're more than just a gym – we're a community dedicated to helping you achieve your fitness goals and live a healthier life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
            alt="Gym interior"
            className="rounded-lg shadow-lg w-full h-[400px] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
          <p className="text-secondary mb-4">
            Founded in 2015, Peak Gym has grown from a small local fitness center to a premium fitness destination. Our mission is to provide top-quality equipment, expert guidance, and a motivating environment for all our members.
          </p>
          <p className="text-secondary">
            We believe that fitness is not just about physical strength, but also about mental wellness and community support. That's why we've created a space where everyone feels welcome and supported in their fitness journey.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center p-6 bg-card rounded-lg shadow border border-border">
          <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2 text-primary">Expert Trainers</h3>
          <p className="text-secondary">Certified professionals to guide your fitness journey</p>
        </div>
        <div className="text-center p-6 bg-card rounded-lg shadow border border-border">
          <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2 text-primary">Strong Community</h3>
          <p className="text-secondary">A supportive environment for all fitness levels</p>
        </div>
        <div className="text-center p-6 bg-card rounded-lg shadow border border-border">
          <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2 text-primary">24/7 Access</h3>
          <p className="text-secondary">Work out on your schedule</p>
        </div>
        <div className="text-center p-6 bg-card rounded-lg shadow border border-border">
          <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2 text-primary">Goal-Focused</h3>
          <p className="text-secondary">Personalized programs for your success</p>
        </div>
      </div>

      <div className="bg-card text-primary rounded-lg p-12 text-center border border-border">
        <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
        <p className="text-xl mb-8 text-secondary">
          Start your fitness journey with us today and experience the Peak Gym difference.
        </p>
        <button
          onClick={handleBecomeMember}
          className="bg-accent text-background px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
        >
          Become a Member
        </button>
      </div>
    </div>
  );
};

export default About;