import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./Review.css";

export default function Review(props) {
  const { user, review, rating } = props;
  console.log("review", review);
  return (
    <div className="review-index-item">
      <h3>Review</h3>
      <div className="review-info">
        <div>
            <div className="user-avatar">
            <img src={user.avatarUrl} alt="User Avatar" />
            </div>
            <span className="reviewer-name">{user.firstName} {user.lastName}</span>
        </div>
        <div className="review-name-date">
          
          <br />
          <span>
            {" "}
            <AiFillStar size={20} /> {rating} rating
          </span>
          {/* <i className='small-review-text'>{month[review.reviewDate.slice(5,7)] + ' ' + review÷.reviewDate.slice(0,4)}</i> */}
        </div>
      </div>

      <span>{review}</span>
    </div>
  );
}
