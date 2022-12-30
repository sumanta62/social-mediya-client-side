import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import abouteimg from '../../Images/Aboute/edit-icon-png-3602.png'
import EditAboute from './EditAboute';

const Aboute = () => {
    const [abouteUser, SetAbouteUser] = useState([]);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://social-mediya-server-side.vercel.app/abouteUser`)
            .then(res => res.json())
            .then(data => SetAbouteUser(data))
    }, [])
    console.log(abouteUser);


    return (
        <div className='h-screen'>
            <section  style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmVJV2ULOtbcxVr1WypNMXAuXrmYvXFVvfM0IsNK3VxUqSCJvIbpif-hSSme-atkV17nY&usqp=CAU)`, width:'100%', height:'screen' }}  className=" flex justify-center items-center h-screen bg-no-repeat bg-cover">

                <div className="max-w-md  items-end p-8 sm:flex sm:space-x-6 bg-sky-300">
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        <img src={user?.photoURL? user?.photoURL : "https://imagez.tmz.com/image/05/1by1/2022/12/15/05bf4f9059a5452ba8d0b7a2f7c44294_xl.jpg"} alt="" className="object-cover object-center w-full h-full rounded bg-gray-500" />
                    </div>
                    <div className="flex flex-col space-y-4 relative">
                        <div className='absolute -right-5 -top-5'>
                            <label htmlFor="my-modal-3" className="mt-2 cursor-pointer text-white shadow-slate-100">
                                <img src={abouteimg} className="w-6" alt="" />
                            </label>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">{user?.displayName ? user?.displayName : 'name is null'}</h2>
                            <span className="text-sm text-gray-800">{user?.email ? user?.email : "email is null"}</span>
                        </div>
                        {
                            abouteUser.map(aboute =>
                                <div className="space-y-1">
                                    <span className="flex items-center space-x-2">
                                        <svg className="w-4 h-4" fill="#00000" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 395.71 395.71">
                                            <g>
                                                <g>
                                                    <path d="M238.562,0h31.753c6.228,0,11.277,5.062,11.277,11.283v30.378h-54.313V11.283C227.278,5.062,232.34,0,238.562,0z" />
                                                    <path d="M36.683,0h31.75C74.657,0,79.71,5.062,79.71,11.283v29.195H25.397V11.283C25.397,5.062,30.459,0,36.683,0z" />
                                                    <path d="M278.367,207.43c-13.343,58.619-64.689,99.56-124.87,99.56c-60.171,0-111.521-40.94-124.863-99.554
			c-2.147-9.415-3.237-19.029-3.237-28.553V67.896H79.71v110.986c0,40.683,33.101,73.787,73.787,73.787
			c40.683,0,73.781-33.104,73.781-73.787V69.085h54.313v110.032C281.573,188.562,280.492,198.099,278.367,207.43z"/>
                                                </g>
                                            </g>
                                        </svg>
                                        <span className="text-gray-700">{aboute?.university}</span>
                                    </span>
                                    <span className="flex items-center space-x-2">

                                        <svg className="w-4 h-4" fill="#00000" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 395.71 395.71"
                                        >
                                            <g>
                                                <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
                                            </g>
                                        </svg>
                                        <span className="text-gray-700">{aboute?.address}</span>
                                    </span>

                                </div>
                            )
                        }
                    </div>
                </div>



                {
                    abouteUser.map(amoutUs =>
                        <EditAboute
                            abouteUser={amoutUs}>

                        </EditAboute>

                    )
                }
            </section >
        </div >
    );
};

export default Aboute;