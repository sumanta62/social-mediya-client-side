import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const EditAboute = ({ abouteUser }) => {
    const [reviews, setReview] = useState(abouteUser);
    const { user } = useContext(AuthContext)

    console.log(abouteUser)

    const handlerStatusUpdaye = () => {
        fetch(`http://localhost:5000/updateAboute/${abouteUser._id}`, {
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
        const newUser = { ...reviews };
        newUser[field] = value;
        setReview(newUser);

    }

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{abouteUser?.name}</h3>
                    <form onSubmit={handlerStatusUpdaye} className="space-y-6 pt-8">
                        <div className="space-y-1 text-sm">
                            <input onChange={handlerInputChange} type="text" name="name" id="date" defaultValue={user?.displayName ? user.displayName : 'name is null'} className="w-full text-base px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <input onChange={handlerInputChange} type="email" defaultValue={user?.email} name="email" id="Email" placeholder="Email Address" className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <input onChange={handlerInputChange} type="text" name="university" id="name" defaultValue={abouteUser?.university} placeholder="Full Name" className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <input onChange={handlerInputChange} type="text" name="address" id="name" defaultValue={abouteUser?.address} placeholder="Full Name" className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                        </div>
                        <button type='submit' className=" btn btn-info w-full p-3 text-center font-bold rounded-lg text-white ">Save</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default EditAboute;