import React from 'react'
import "./ProductReview.css"

function ProductReview(props) {

    const reviews = props.reviews.map((review) => (
      <div key={review.id} className="review">
        <div className="user">
          <h3>{review.user.username}</h3>
     
        </div>
        <div className="review-style">
          <h5>Ratings:{review.rating}</h5>
          <p>
            comment:{review.comment}
          </p>
          <h6>Date:{review.date}</h6>
        </div>
      </div>
    ));

  return (
    <div>
        {reviews}
    </div>
  )
}

export default ProductReview