import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-semibold text-center mb-4">Contact Us</h2>
      <p className="text-lg text-center mb-6">Have questions? We're here to help!</p>
      <div className="space-y-4 text-center">
        <p><strong>Phone:</strong> <a href="tel:+917428630762" className="text-blue-400 hover:underline">7428630762</a></p>
        <p><strong>Email:</strong> <a href="mailto:rahulpapnei@gmail.com" className="text-blue-400 hover:underline">rahulpapnei@gmail.com</a></p>
        <p><strong>Address:</strong> Lukhi Society, 3rd Floor</p>
      </div>
    </div>
  );
};

export default Contact;
