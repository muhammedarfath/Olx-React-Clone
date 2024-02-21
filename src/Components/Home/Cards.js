import React from 'react';
import { FaRegHeart } from "react-icons/fa";

function Cards() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-10">
        <h2 className="text-black text-xl mb-8">Fresh recommendations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white w-[288px] rounded-lg overflow-hidden shadow-md relative">
            <div className="absolute top-0 right-0 p-2 bg-white m-5 rounded-2xl cursor-pointer">
              <FaRegHeart className='text-black' />
            </div>
            <img
              src="https://apollo.olx.in/v1/files/t0huicnfrvpt1-IN/image;s=400x800;q=60"
              alt="Dish 1"
              className="w-full p-2 h-48 object-cover"
            />
            <div className="p-4">
              <h5 className="text-gray-800 font-bold">₹ 3,75,000</h5>
              <p className="text-gray-600 text-sm">No complaints,good condition,</p>
              <small className="text-gray-600">ELAMPA, THIRUVANANTHAPURAM</small>
              <p className="text-gray-600 text-sm absolute bottom-0 right-0 p-2">Today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
