import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { BiPhotoAlbum, } from "react-icons/bi";
import { AiFillVideoCamera } from "react-icons/ai";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { RiArticleFill } from "react-icons/ri";
import PostData from './PostData';
import { AuthContext } from '../../context/AuthProvider';

import { Link } from 'react-router-dom';

const InputFild = () => {
    const { user } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgbbHostKey = process.env.REACT_APP_imgbb_key;
    // const navigate = useNavigate();


    const handlerAddProduct = data => {
        console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imgbbHostKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgbb => {
                if (imgbb.success) {
                    const product = {
                        description: data.description,
                        images: imgbb.data.url,
                        profileImg:data.profileImg
                    }
                    fetch(`http://localhost:5000/inputFild`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            toast.success(`Post added successfully`);

                        })
                }

            })

    }



    return (
        <div className=''>
            <div >
                <div className='shadow-md h[800px]  p-4 rounded-lg'>
                    <div>
                        <form onSubmit={handleSubmit(handlerAddProduct)}>
                            <div className="form-control w-full ">
                                <div className='flex items-center gap-3'>
                                    <label className="">
                                        <img src={user?.photoURL ? user?.photoURL : "N/I"} {...register("profileImg" )} alt="" className='w-12 h-12 rounded-full border' />
                                    </label>
                                    <textarea type="text" {...register("description" )} className="input input-bordered w-full "
                                        placeholder='Start Post ' />
                                    {errors.description && <p className='text-orange-400'>{errors.description?.message}</p>}
                                </div>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <BiPhotoAlbum className='text-3xl'></BiPhotoAlbum> <span>Photo</span>
                                </label>
                                <input type="file" {...register("image")} className="p-3 border rounded-lg" placeholder='image' />
                                {errors.image && <p className='text-orange-400'>{errors.image?.message}</p>}
                            </div>
                            <div className='mt-3 flex flex-wrap justify-between'>
                                <p className='flex gap-3 items-center hover:bg-slate-200 p-3 rounded-lg cursor-pointer'> <AiFillVideoCamera className='text-2xl text-yellow-700'></AiFillVideoCamera> <span className='font-bold text-gray-500 text-sm'>Video</span></p>
                                <p className='flex gap-3 items-center hover:bg-slate-200 p-3 rounded-lg cursor-pointer'> <BsFillCalendar2EventFill className='text-2xl text-orange-600'></BsFillCalendar2EventFill> <span className='font-bold text-gray-500 text-sm'>Event</span></p>
                                <p className='flex gap-3 items-center hover:bg-slate-200 p-3 rounded-lg cursor-pointer'> <RiArticleFill className='text-2xl text-orange-600'></RiArticleFill> <span className='font-bold text-gray-500 text-sm'>Write article</span></p>
                            </div>

                            {!user?.uid ?
                                <>
                                    <Link to="/login" className='text-md font-semibold text-blue-500'>Please Login!</Link>
                                </>
                                :
                                <>
                                    <div className='flex justify-center mt-5'>
                                        <input className='btn btn-info w-full text-white' value=" Post" type="submit" />
                                    </div>
                                </>
                            }  
                        </form>
                    </div>
                </div>
            <PostData></PostData>
            </div>
        </div>
    );
};

export default InputFild;