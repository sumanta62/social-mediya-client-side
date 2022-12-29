import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import abouteimg from '../../Images/Aboute/image_processing20210711-25299-j2b0cv-removebg-preview.png'
import EditAboute from './EditAboute';

const Aboute = () => {
    const [abouteUser, SetAbouteUser] = useState([]);
    const { user } = useContext(AuthContext)
    console.log(user);

    useEffect(() => {
        fetch(`http://localhost:5000/aboute`)
            .then(res => res.json())
            .then(data => SetAbouteUser(data))
    }, [])



    return (
        <div className='pb-14 px-7'>
            <section className="">
                <div className="container md:flex md:flex-row-reverse md:flex-col-2 justify-center mx-auto py-10 lg:justify-start items-end">

                    <div className=" justify-center items-center w-11/12 md:w-3/6  lg:text-left text-center md:text-left  md:mx-10">
                        <h1 className="text-4xl font-bold leading-none text-center md:text-left">Aboute Us</h1>

                        {
                            abouteUser.map(aboute =>
                                <div>
                                    <p className="mt-5 md:text-md text-center md:text-left">Name: <small>{user?.displayName ? user?.displayName : 'name is null'}</small> </p>
                                    <p className=" text-center md:text-left">Email: <small>{user?.email ? user?.email : "email is null"}</small> </p>
                                    <p className="  text-center md:text-left ">University: <small>{aboute?.university}</small> </p>
                                    <p className="  text-center md:text-left">Address: <small>{aboute?.address}</small> </p>
                                    <label htmlFor="my-modal-3" className="mt-2 btn btn-sm btn-info text-white shadow-slate-100">Edit</label>
                                    {/* <Link to={`aboute/${aboute._id}`}>
                                    </Link> */}
                                </div>
                            )
                        }

                        {/* ============= Modal =================== */}
                        {
                            abouteUser.map(amoutUs =>
                                <EditAboute
                                    abouteUser={amoutUs}>

                                </EditAboute>

                            )
                        }

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