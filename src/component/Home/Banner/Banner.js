import React from 'react';
import img2 from '../../Images/Banner/social-media-marketing.webp'

const Banner = () => {
    return (
        <div className="bg-gray-50 w-full">
            <div className="p-7  md:w-10/12 m-auto md:flex items-center justify-center">
                <div className="">
                    <h1 className="mb-5 text-3xl md:text-4xl font-bold text-center md:text-left">WELCOME TO THE CAR DEALER </h1>
                    <p className="mb-5 text-sm md:text-md">Browse our selection of quality used cars for sale in Wembley, Middlesex. If you can’t find what you’re looking for please feel free to contact.</p>
                    <button className="btn btn-info text-center flex ">Read More</button>
                </div>
                <div className=" w-full">
                    <img src={img2} alt=""  className=''/>
                </div>
            </div>
        </div>
    );
};

export default Banner;