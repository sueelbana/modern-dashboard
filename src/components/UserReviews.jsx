import React from "react";
import { ArrowRight } from "lucide-react";

const reviews = [
  {
    name: "Belle Epoque",
    rating: 4,
    comment:
      "Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.",
  },
  {
    name: "Nagita Almania",
    rating: 4,
    comment:
      "Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.",
  },
  {
    name: "Esmeralda Striff",
    rating: 4,
    comment:
      "Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {index < rating ? "⭐" : <span className="text-gray-300">⭐</span>}
        </span>
      ))}
    </div>
  );
};

export default function UserReviews() {
  return (
    <div className="mt-12 px-4">
      <h3 className="text-lg font-semibold mb-4 text-text">User Reviews</h3>
      <div className="flex items-center space-x-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-bg p-4 rounded-xl shadow-sm border border-border w-full max-w-sm flex-1"
          >
            <div className="flex items-center space-x-3 mb-2">
              <StarRating rating={review.rating} />
              <span className="font-bold text-text">{review.name}</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              {review.comment}
            </p>
          </div>
        ))}
        <button className="p-2 rounded-full bg-bg border border-border shadow-sm">
          <ArrowRight className="w-5 h-5 text-purple-600" />
        </button>
      </div>
    </div>
  );
}
