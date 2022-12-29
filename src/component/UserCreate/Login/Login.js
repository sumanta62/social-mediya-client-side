import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import loginbg from '../../Images/Banner/resized.png'

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { loginUser, handlerForgete, googleSignin } = useContext(AuthContext);
    const [loginUserEmail, setLoginUserEmail] = useState("")
    const [loginError, setLoginError] = useState('')

    const [resetEmail, setresetEmail] = useState(' ')

    const location = useLocation();
    const navogate = useNavigate();
    const from = location.from?.state.pathname || '/'

    const handelLogin = data => {
        loginUser(data.email, data.password)
            .then(result => {
                setLoginUserEmail(data.email);
                toast.success("Login Successfully");
                navogate(from, { replace: true })

            }).catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            })
    }

    const handlerGoogleSignin = () => {
        googleSignin()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Login Successfully")
                navogate(from, { replace: true })

            })
            .catch(error => {
                console.error(error.message);
                setLoginError(error.message)
            })

    }

    const handlerForgetePassword = () => {
        handlerForgete(resetEmail)
            .then(() => {
                alert(' Password reaste email send. Please chck your email')
            })
            .catch(error => {
                console.log(error);

            })
    }

    return (
        <div  style={{ backgroundImage: `url(${loginbg})`, width:'100%', backgroundSize:'cover',  backgroundRepeat:'no-repeat'}}  className='py-9 '>
        <div className='h[800px] w-96 md:w-3/6 lg:w-2/6 m-auto bg-gray-100 p-4 rounded-lg'>
            <div>
                <h2 className="text-4xl font-bold text-center">Login!</h2>
                <form onSubmit={handleSubmit(handelLogin)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="">Email</span>
                        </label>
                        <input type="email" name='email'  {...register("email",
                            {
                                onBlur: (event) => setresetEmail(event.target.value)
                            },
                            { required: "Email Address is required" })} placeholder='xyz@gmail.com' className="input input-bordered w-full text-black" />
                        {errors.email && <p className='text-orange-400'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password Address is required",
                                minLength: { value: 6, message: "Password must be 6 characters or length" }
                            })} placeholder='******'
                            className="input input-bordered w-full text-black" />
                        {errors.password && <p className='text-orange-400'>{errors.password?.message}</p>}
                    </div>
                    <label className="label">
                        <b>
                            <Link onClick={handlerForgetePassword} className="text-blue-700">Forgete Password! </Link>
                        </b>

                    </label>

                    <input className='btn btn-info text-white w-full' value="Login" type="submit" />

                    <div>
                        {
                            loginError && <p className='text-orange-400'>{loginError}</p>
                        }
                    </div>
                </form>
                <p>New to Doctors Portal <Link className='text-primary font-bold' to='/register'>Create new Account</Link></p>

                <div className="divider">OR</div>
                <button onClick={handlerGoogleSignin} className='btn btn-info text-white w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    </div>
    );
};

export default Login;