import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const InputFild = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgbbHostKey = process.env.REACT_APP_imgbb_key;
    // const navigate = useNavigate();


    const handlerAddProduct = data => {
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
        <div>
            <div className='my-16'>
                <div className='h[800px]  w-5/6 md:w-2/6 m-auto bg-blue-50 p-4 rounded-lg'>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-center">Post Addeded</h2>
                        <form onSubmit={handleSubmit(handlerAddProduct)}>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="">Description</span>
                                </label>
                                <textarea type="text" {...register("description", { required: "description is required" })} className="input input-bordered w-full "
                                    cols="30" rows="10" placeholder='Description ' />
                                {errors.description && <p className='text-orange-400'>{errors.description?.message}</p>}
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="">Image</span>
                                </label>
                                <input type="file" {...register("image", { required: "image is required" })} className="input input-bordered w-full " placeholder='image' />
                                {errors.image && <p className='text-orange-400'>{errors.image?.message}</p>}
                            </div>

                            <div className='flex justify-center mt-5'>
                                <input className='btn btn-info w-full md:w-3/6 text-white' value="Submit" type="submit" />
                            </div>
                            {/* <div>
                            {
                                signUpError && <p className='text-orange-400'>{signUpError}</p>
                            }
                        </div> */}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputFild;