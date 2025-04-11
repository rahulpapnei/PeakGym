import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const classes = [
  {
    id: 1,
    name: "HIIT Training",
    instructor: "John Smith",
    time: "6:00 AM - 7:00 AM",
    days: "Monday, Wednesday, Friday",
    capacity: 20,
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Yoga Flow",
    instructor: "Sarah Johnson",
    time: "8:00 AM - 9:00 AM",
    days: "Tuesday, Thursday",
    capacity: 15,
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Strength Training",
    instructor: "Mike Wilson",
    time: "5:00 PM - 6:00 PM",
    days: "Monday, Wednesday, Friday",
    capacity: 12,
    image: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Spin Class",
    instructor: "Emma Davis",
    time: "6:30 PM - 7:30 PM",
    days: "Tuesday, Thursday",
    capacity: 18,
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&q=80&w=800"
  }
];

const Classes = () => {
  const navigate = useNavigate();

  const handleBookClass = () => {
    navigate('/contact');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {classes.map((classItem) => (
          <div key={classItem.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={classItem.image}
              alt={classItem.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{classItem.name}</h3>
              <p className="text-gray-600 mb-2">Instructor: {classItem.instructor}</p>
              
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>{classItem.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span>{classItem.days}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="h-5 w-5" />
                  <span>Capacity: {classItem.capacity} people</span>
                </div>
              </div>
              
              <button
                onClick={handleBookClass}
                className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
              >
                Book Class
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;