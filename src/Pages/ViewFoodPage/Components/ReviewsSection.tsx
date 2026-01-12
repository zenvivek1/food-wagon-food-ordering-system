import { Star } from "lucide-react";

interface Review {
  id: number;
  user_name: string;
  rating: number;
  comment: string;
  created_at: string;
}

const reviews: Review[] = [
  {
    id: 1,
    user_name: "Rahul",
    rating: 5,
    comment: "Amazing taste! Definitely ordering again 🔥",
    created_at: "2 days ago",
  },
  {
    id: 2,
    user_name: "Ananya",
    rating: 4,
    comment: "Good quality and packaging was neat.",
    created_at: "5 days ago",
  },
  {
    id: 3,
    user_name: "Vikram",
    rating: 3,
    comment: "Decent but portion size could be better.",
    created_at: "1 week ago",
  },
];

const ReviewsSection = () => {
  return (
    <section className="w-[80vw] mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">
        Customer Reviews
      </h2>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white border rounded-2xl p-6 shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                {/* User avatar (first letter) */}
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">
                  {review.user_name[0]}
                </div>

                <div>
                  <p className="font-semibold">{review.user_name}</p>
                  <p className="text-xs text-gray-400">
                    {review.created_at}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < review.rating
                        ? "fill-orange-500 text-orange-500"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
            </div>

            <p className="text-gray-600 mt-3 leading-relaxed">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
