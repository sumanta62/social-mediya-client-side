import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import abouteimg from '../../Images/Aboute/image_processing20210711-25299-j2b0cv-removebg-preview.png'

const Aboute = () => {
    const [abouteUser, SetAbouteUser] = useState([]);
    const [reviews, setReview] = useState(abouteUser);
    console.log(reviews);
    console.log(abouteUser);

    useEffect(() => {
        fetch(`http://localhost:5000/aboute`)
            .then(res => res.json())
            .then(data => SetAbouteUser(data))
    }, [])

    const handlerStatusUpdaye = () => {
        fetch(`http://localhost:5000/aboute`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {

                    toast.success('Updated Seccess', { autoClose: "1000" })
                }
            })
    }

    const handlerInputChange = e => {
        e.preventDefault();
        const value = e.target.value;
        const field = e.target.name;
        const newUser = {...reviews };
        newUser[field] = value;
        setReview(newUser);

    }

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
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-info text-white shadow-slate-100">Aboute Edit</label>
                            {/* <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Aboute Us</button> */}

                        </div>
                        {/* ============= Modal =================== */}
                        {/* Put this part before </body> tag */}

                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        {
                            abouteUser.map(aboute =>
                                <div className="modal">
                                    <div className="modal-box relative">
                                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 className="text-lg font-bold">{aboute?.name}</h3>
                                        <form onSubmit={handlerStatusUpdaye} className="space-y-6 pt-8">
                                            <div className="space-y-1 text-sm">
                                                <input onChange={handlerInputChange} type="text" name="name" id="date" defaultValue={aboute?.name} className="w-full text-base px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                                            </div>
                                            <div className="space-y-1 text-sm">
                                                <input onChange={handlerInputChange} type="email" defaultValue={aboute?.email} name="email" id="Email" placeholder="Email Address" className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                                            </div>
                                            <div className="space-y-1 text-sm">
                                                <input onChange={handlerInputChange} type="text" name="university" id="name" defaultValue={aboute?.university} placeholder="Full Name" className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                                            </div>
                                            <div className="space-y-1 text-sm">
                                                <input onChange={handlerInputChange} type="text" name="address" id="name" defaultValue={aboute?.address} placeholder="Full Name" className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                                            </div>
                                            <button type='submit' className=" btn btn-info w-full p-3 text-center font-bold rounded-lg text-white ">Save</button>
                                        </form>
                                    </div>
                                </div>

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