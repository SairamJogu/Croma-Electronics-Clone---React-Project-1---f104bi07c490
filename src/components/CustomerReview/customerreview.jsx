import { Rating } from "@mui/material";
import React from "react";
import { Randomnamegenerator } from "../../utils/Randomname";

const ReviewList = ({ names, productReviews }) => {
    return (
        <div className="review-list">
            {productReviews.map((review) => {
                return (
                    <div key={review._id}>
                        <h3>{Randomnamegenerator()}</h3>
                        <Rating style={{ color: "#12daa8" }} name="read-only" value={review.ratings} readOnly />
                        <p style={{ color: "white" }}>{review.text}</p>
                    </div>
                );
            })}
        </div>
    );
};
export default ReviewList;
