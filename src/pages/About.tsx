import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleBecomeMember = () => {
    navigate('/contact');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Peak Gym</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2015, Peak Gym has grown from a small local fitness center to a premium fitness destination. Our mission is to provide top-quality equipment, expert guidance, and a motivating environment for all our members.
          </p>
          <p className="text-gray-600">
            We believe that fitness is not just about physical strength, but also about mental wellness and community support. That's why we've created a space where everyone feels welcome and supported in their fitness journey.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow">
          <Award className="h-12 w-12 mx-auto mb-4 text-black" />
          <h3 className="text-xl font-semibold mb-2">Expert Trainers</h3>
          <p className="text-x-600">Certified professionals to guide your fitness journey</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow">
          <Users className="h-12 w-12 mx-auto mb-4 text-black" />
          <h3 className="text-xl font-semibold mb-2">Strong Community</h3>
          <p className="text-x-600">A supportive environment for all fitness levels</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow">
          <Clock className="h-12 w-12 mx-auto mb-4 text-black" />
          <h3 className="text-xl font-semibold mb-2">24/7 Access</h3>
          <p className="text-x-600">Work out on your schedule</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow">
          <Target className="h-12 w-12 mx-auto mb-4 text-black" />
          <h3 className="text-xl font-semibold mb-2">Goal-Focused</h3>
          <p className="text-x-600">Personalized programs for your success</p>
        </div>
      </div>

      <div className="bg-black text-white rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
        <p className="text-xl mb-8">
          Start your fitness journey with us today and experience the Peak Gym difference.
        </p>
        <button
          onClick={handleBecomeMember}
          className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Become a Member
        </button>
      </div>
    </div>
  );
};

export default About;