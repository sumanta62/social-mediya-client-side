import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import registerbg from '../../Images/Banner/social-media-marketing.webp'


const Register = () => {
     const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, googleSignin, updateUser } = useContext(AuthContext);
    const [signUpError, setSingUpError] = useState("");

    const location = useLocation();
    const navogate = useNavigate();
    const from = location.from?.state.pathname || '/'

    const handelSignUp = data => {
        console.log(data);
        setSingUpError('')
        createUser(data.email, data.password)
            .then(result => {
                handlerUpdateUserProfile(data.name)
                toast.success("User Create Succesfully");
                navogate(from, { replace: true })
            })
            .catch(error => {
                setSingUpError(error.message)

            })
    }

    const handlerGoogleSignin = () => {
        googleSignin()
            .then(result => {
                toast.success("User Create Successfully");
                navogate(from, { replace: true })
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    const handlerUpdateUserProfile = (name) => {
        console.log(name);
        const profile = {
            displayName: name,
        }
        console.log(profile);
        updateUser(profile)
            .then(() => {})
            .catch(error => console.error(error))

    }


    return (
        <div  style={{ backgroundImage: `url(${registerbg})`, width:'100%', height:'auto' }}  className='py-10 '>
        <div  className='h[800px]  w-96 md:w-3/6 lg:w-2/6 m-auto bg-gray-100 p-4 rounded-lg'>
            <div >
                <h2 className="text-4xl font-bold text-center">Sign Up!</h2>
                <form onSubmit={handleSubmit(handelSignUp)}>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: "Name is required" })} placeholder="Your Name" className="input input-bordered w-full text-black" />
                        {errors.name && <p className='text-orange-400'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} placeholder="XYZ@gmail.com" className="input input-bordered w-full text-black" />
                        {errors.email && <p className='text-orange-400'>{errors.email?.message}</p>}
                    </div>
                    
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password Address is required",

                                minLength: { value: 6, message: "Password must be 6 characters or length" },

                                // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be Strong" }
                            })} placeholder="******"
                            className="input input-bordered w-full text-black" />
                        {errors.password && <p className='text-orange-400'>{errors.password?.message}</p>}
                    </div>
                    <br />

                    <input className='btn btn-info w-full text-white' value="Sign Up" type="submit" />
                    <div>
                        {
                            signUpError && <p className='text-orange-400'>{signUpError}</p>
                        }
                    </div>
                </form>
                <p>Alrady Habe an Account <Link className='text-primary font-bold' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handlerGoogleSignin} className='btn btn-info w-full text-white'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    </div>
    );
};

export default Register;