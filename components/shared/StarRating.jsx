"use client";
// components/StarRating.js
import React from "react";
import Rating from "react-rating";

const StarRating = ({ initialRating, onRatingChange, readOnly, classIcon }) => {
  return (
    <Rating
      initialRating={initialRating}
      onChange={onRatingChange}
      readonly={readOnly}
      emptySymbol={
        <img src="/assets/icons/star-full-icon.svg" className={classIcon} />
      }
      fullSymbol={
        <img src="/assets/icons/star-symbol-icon.svg" className={classIcon} />
      }
    />
  );
};

export default StarRating;
