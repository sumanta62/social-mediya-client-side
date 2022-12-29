import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Spinner from '../../Spinner/Spinner';
import InputFild from '../InputFild/InputFild';
import Cunnect from './Cunnect';
import './HomePage.css'
import Profile from './Profile';

const HomePage = () => {
const { loading} = useContext(AuthContext)
// console.log(user);
    if(loading){
        <Spinner></Spinner>
    }

   
    return (
        <div className=''>
            <div className='container md:flex m-auto gap-7 py-6'>
              <Profile></Profile>
               <InputFild></InputFild>
                <Cunnect></Cunnect>
            </div>
        </div>
    );
};

export default HomePage;