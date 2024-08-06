'use client';
import React from 'react';

const AddToCartButton = () => {
  return (
    // <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600">
    <button
      className=" my-2 btn btn-primary"
      onClick={() => console.log('Added to cart!')}
    >
      Add To Cart
    </button>
    // </div>
  );
};

export default AddToCartButton;
