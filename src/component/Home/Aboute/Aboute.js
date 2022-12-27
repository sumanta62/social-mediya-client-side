import React from 'react';
import abouteimg from '../../Images/Aboute/bg-remove.png'

const Aboute = () => {
    return (
        <div className='py-14 px-7'>
            <section className="">
                <div className="container md:flex md:flex-row-reverse items-center md:flex-col-2 justify-center mx-auto py-10  lg:justify-start">
                   
                    <div className=" justify-center items-center w-11/12 md:w-3/6  lg:text-left  md:mx-10">
                        <h1 className="text-4xl font-bold leading-none text-center md:text-left">Aboute Us</h1>
                        <p className="mt-5 text-sm md:text-md text-justify">Autotrader is one of the classic go-to resources for buying and selling second-handler vehicles. One of the biggest benefits of Autotrader is you can reach many potential buyers by listing your vehicle on its site. The website has name recognition that many other websites do not.
                        </p>
                        <p className="mt-2 mb-6 text-sm md:text-md text-justify">Intra-oral photos are photos that are taken of your teeth, gums and oral tissue. These photos may be of a single tooth, a group of teeth, or any area of your mouth.</p>
                        <div className="flex space-y-4 sm:items-center justify-center  sm:justify-center md:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <button className="btn shadow-slate-100">Aboute Us</button>
                            {/* <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Aboute Us</button> */}

                        </div>
                    </div>
                    <div className="flex w-full md:w-3/6 lg:2/5   ">
                        <img src={abouteimg} alt="" className="object-contain w-full max-h-80" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Aboute;