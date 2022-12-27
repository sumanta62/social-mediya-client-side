import React, { useEffect, useState } from 'react';
import abouteimg from '../../Images/Aboute/image_processing20210711-25299-j2b0cv-removebg-preview.png'

const Aboute = () => {
    const [abouteUser, SetAbouteUser] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/aboute`)
            .then(res => res.json())
            .then(data => SetAbouteUser(data))
    }, [])
    console.log(abouteUser)

    return (
        <div className='pb-14 px-7'>
            <section className="">
                <div className="container md:flex md:flex-row-reverse md:flex-col-2 justify-center mx-auto py-10 lg:justify-start items-end">

                    <div className=" justify-center items-center w-11/12 md:w-3/6  lg:text-left text-center md:text-left  md:mx-10">
                        <h1 className="text-4xl font-bold leading-none text-center md:text-left">Aboute Us</h1>
                        {
                            abouteUser.map(aboute =>
                                <div>

                                    <p className="mt-5 md:text-md text-center md:text-left">Name: <small>{aboute?.name}</small> </p>
                                    <p className=" text-center md:text-left">Email: <small>{aboute?.email}</small> </p>
                                    <p className="  text-center md:text-left ">University: <small>{aboute?.university}</small> </p>
                                    <p className="  text-center md:text-left">Address: <small>{aboute?.address}</small> </p>
                                </div>
                            )

                        }

                        <div className="flex mt-5 space-y-4 sm:items-center justify-center md:justify-start md:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <button className="btn btn-sm btn-info text-white shadow-slate-100">Aboute Edit</button>
                            {/* <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Aboute Us</button> */}

                        </div>
                    </div>
                    <div className="flex flex-row-reverse w-full md:w-3/6 lg:2/5   ">
                        <img src={abouteimg} alt="" className="object-contain w-full max-h-80" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Aboute;