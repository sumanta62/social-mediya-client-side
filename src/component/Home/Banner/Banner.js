import React from 'react';
import img2 from '../../Images/Banner/social-media-marketing.webp'

const Banner = () => {
    return (
        <div className="bg-gray-50 w-full">
            <div className="p-7  md:w-10/12 m-auto md:flex items-center justify-center">
                <div className="">
                    <h1 className="mb-5 text-3xl md:text-4xl font-bold text-center md:text-left">Welcome to the social media platform</h1>
                    <p className="mb-5 text-sm md:text-md">With a proper social media strategy, spread your message and build your audience of targeted voters, constituents and consumers. Social media is one of the most assessable forms of communication, but many find it hard to start.</p>
                    <button className="btn btn-info text-center flex text-white">Read More</button>
                </div>
                <div className=" w-full">
                    <img src={img2} alt=""  className=''/>
                </div>
            </div>
        </div>
    );
};

export default Banner;