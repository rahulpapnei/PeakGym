
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - PEAKGYM | Premium Fitness Apparel</title>
        <meta
          name="description"
          content="Discover PEAKGYM, a premium fitness apparel brand dedicated to performance, comfort, and sustainability. Join us on a journey of excellence."
        />
        <meta name="keywords" content="fitness apparel, gym wear, sportswear, sustainable activewear, PEAKGYM" />
        <meta name="author" content="PEAKGYM" />
        <meta property="og:title" content="About Us - PEAKGYM" />
        <meta property="og:description" content="Premium fitness apparel designed for performance and sustainability. Explore our mission and story at PEAKGYM." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.peakgym.com/about" />
      </Helmet>

      <div className="bg-gray-100 min-h-screen py-10 px-6 md:px-20">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">About Us</h1>
          <p className="text-lg text-gray-700 text-center mb-6">
            Welcome to <strong>PEAKGYM</strong>, where passion meets performance. Our journey began with a vision
            to create high-quality, stylish, and functional fitness apparel that empowers individuals to push their limits.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700">
                At PEAKGYM, we are dedicated to designing apparel that enhances performance while maintaining comfort and sustainability.
                Our goal is to provide fitness enthusiasts with the perfect blend of style and functionality.
              </p>
            </div>
            <img
              src="https://source.unsplash.com/600x400/?fitness"
              alt="PEAKGYM fitness apparel"
              className="rounded-lg shadow-md w-full"
              loading="lazy"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
            <img
              src="https://source.unsplash.com/600x400/?gym"
              alt="Gym workout"
              className="rounded-lg shadow-md w-full"
              loading="lazy"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
              <p className="text-gray-700">
                - **Quality**: We use premium materials to ensure durability and comfort.<br />
                - **Sustainability**: Our eco-friendly approach reduces environmental impact.<br />
                - **Innovation**: We continuously improve our designs based on athlete feedback.<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
