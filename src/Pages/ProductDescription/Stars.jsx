import React, { useState } from 'react'

const StarIcon = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-600'}`}
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
  </svg>
)

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon key={star} filled={star <= rating} />
      ))}
    </div>
  )
}

const ReviewCard = ({ review }) => {
  const [helpful, setHelpful] = useState(review.helpfulCount)
  const [hasVoted, setHasVoted] = useState(false)

  const handleHelpful = () => {
    if (!hasVoted) {
      setHelpful(helpful + 1)
      setHasVoted(true)
    }
  }

  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
            {review.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">{review.name}</h3>
            <p className="text-gray-400 text-sm">{review.date}</p>
          </div>
        </div>
        <StarRating rating={review.rating} />
      </div>

      {review.productName && (
        <div className="mb-3">
          <span className="text-gray-500 text-sm">Product: </span>
          <span className="text-gray-300 text-sm">{review.productName}</span>
        </div>
      )}

      <h4 className="text-white font-medium text-lg mb-2">{review.title}</h4>
      <p className="text-gray-300 leading-relaxed mb-4">{review.comment}</p>

      {review.image && (
        <div className="mb-4">
          <img
            src={review.image}
            alt="Review"
            className="rounded-lg w-full max-w-md h-48 object-cover"
          />
        </div>
      )}

      <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
        <button
          onClick={handleHelpful}
          disabled={hasVoted}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
            hasVoted
              ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          Helpful ({helpful})
        </button>

        {review.verified && (
          <span className="flex items-center gap-1 text-green-400 text-sm">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Verified Purchase
          </span>
        )}
      </div>
    </div>
  )
}

const Stars = () => {
  const [filterRating, setFilterRating] = useState('all')

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      date: 'October 15, 2024',
      rating: 5,
      title: 'Absolutely Amazing Product!',
      comment:
        'I have been using this product for the past month and I am thoroughly impressed with its quality and performance. The attention to detail is outstanding, and it exceeded all my expectations. Highly recommend to anyone looking for premium quality!',
      productName: 'Premium Wireless Headphones',
      verified: true,
      helpfulCount: 24,
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Michael Chen',
      date: 'October 12, 2024',
      rating: 4,
      title: 'Great value for money',
      comment:
        'Really solid product overall. The build quality is excellent and it works exactly as described. I deducted one star only because the shipping took a bit longer than expected, but the product itself is fantastic.',
      productName: 'Smart Watch Pro',
      verified: true,
      helpfulCount: 18,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      date: 'October 10, 2024',
      rating: 5,
      title: 'Best purchase this year!',
      comment:
        'Cannot express how happy I am with this purchase. The quality is top-notch, customer service was helpful, and delivery was fast. This has become my go-to recommendation for friends and family.',
      productName: 'Leather Laptop Bag',
      verified: true,
      helpfulCount: 31,
      image:
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      name: 'David Kim',
      date: 'October 8, 2024',
      rating: 3,
      title: 'Good but could be better',
      comment:
        'The product is decent and serves its purpose well. However, I feel like some features could be improved. It is a bit overpriced for what you get, but still a reliable choice if you need something quick.',
      productName: 'Bluetooth Speaker',
      verified: false,
      helpfulCount: 9,
    },
    {
      id: 5,
      name: 'Jessica Taylor',
      date: 'October 5, 2024',
      rating: 5,
      title: 'Exceeded expectations!',
      comment:
        'I was skeptical at first, but this product has completely won me over. The design is sleek, functionality is perfect, and it has made my daily routine so much easier. Worth every penny!',
      productName: 'Fitness Tracker',
      verified: true,
      helpfulCount: 42,
    },
    {
      id: 6,
      name: 'Alex Martinez',
      date: 'October 2, 2024',
      rating: 4,
      title: 'Very satisfied customer',
      comment:
        'Great product with excellent features. Easy to use right out of the box. Minor issues with the manual being unclear, but overall a great experience. Would definitely buy from this store again.',
      productName: 'Portable Charger',
      verified: true,
      helpfulCount: 15,
    },
  ]

  const ratingCounts = [0, 0, 0, 0, 0, 0]
  reviews.forEach((review) => {
    ratingCounts[review.rating]++
  })

  const totalReviews = reviews.length
  const averageRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews
  ).toFixed(1)

  const filteredReviews =
    filterRating === 'all'
      ? reviews
      : reviews.filter((r) => r.rating === parseInt(filterRating))

  return (
    <div className=" bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-3 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Customer Reviews
          </h1>
          <p className="text-gray-400 text-lg">
            See what our customers are saying about their experience
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl p-8 mb-8 border border-gray-800">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center md:border-r border-gray-800">
              <div className="text-6xl font-bold mb-2">{averageRating}</div>
              <StarRating rating={Math.round(parseFloat(averageRating))} />
              <p className="text-gray-400 mt-3">
                Based on {totalReviews} reviews
              </p>
            </div>

            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((star) => {
                const count = ratingCounts[star]
                const percentage = (count / totalReviews) * 100

                return (
                  <div key={star} className="flex items-center gap-3">
                    <span className="text-sm text-gray-400 w-12">{star} star</span>
                    <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-400 w-8">{count}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setFilterRating('all')}
            className={`px-6 py-2 rounded-full transition-all whitespace-nowrap ${
              filterRating === 'all'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
            }`}
          >
            All Reviews
          </button>
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => setFilterRating(rating.toString())}
              className={`px-6 py-2 rounded-full transition-all flex items-center gap-2 whitespace-nowrap ${
                filterRating === rating.toString()
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
              }`}
            >
              {rating} <StarIcon filled={true} />
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No reviews found for this rating.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Stars
