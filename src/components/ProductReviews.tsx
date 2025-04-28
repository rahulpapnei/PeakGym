import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';

interface ProductReviewsProps {
  reviews: Review[];
  productId: string;
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews }) => {
  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="border-b pb-6 last:border-b-0">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < review.rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="font-semibold">{review.user}</span>
            {review.verified && (
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                Verified Purchase
              </span>
            )}
          </div>
          <p className="text-gray-600 mb-2">{review.comment}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{review.date}</span>
            <button className="hover:text-gray-700">
              Helpful ({review.helpful})
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductReviews;