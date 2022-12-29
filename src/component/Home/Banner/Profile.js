import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    console.log(user);

    return (
        <div className=''>
            <div className="flex flex-col profile m-auto md:m-0 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">

                <div>
                    <div className='relative '>
                        <div className='flex justify-center items-end'>
                            <div className=' '>
                                <img src="https://media.licdn.com/dms/image/D5616AQEEav78awMa6w/profile-displaybackgroundimage-shrink_350_1400/0/1670502708064?e=1677715200&v=beta&t=MCqFbJxd8JoGB_xcH0Jli-FO15B-35FtuQenDtD_CiQ" alt="" className="object-cover w-full mb-4 dark:bg-gray-500" />
                            </div>
                            <div className='absolute'>
                                <img src="https://media.licdn.com/dms/image/D5603AQEVhd-2WOOZjg/profile-displayphoto-shrink_200_200/0/1668929024867?e=1677715200&v=beta&t=wPpr4Q17jIW3Z93Oq7wGDedYRLjOjYW-kITo8s0B_-Q" alt="" className='w-16 rounded-full' />
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <h2 className="mb-1 text-lg md:text-xl font-semibold  cursor-pointer">Sumanta Majumder</h2>
                        <p className="text-sm dark:text-gray-400">Web Developer || React Developer || JavaScript Developer</p>
                    </div>
                    <div className='mt-3'>
                        <hr />
                    </div>
                    <div className='p-3 text-sm hover:bg-slate-300 cursor-pointer'>
                        <div className='flex justify-between'>
                            <p className='text-sm text-gray-500'>Who's viewed your profile</p>
                            <p className='text-blue-800 font-bold'>12</p>
                        </div>
                    </div>
                    <div className='p-3 text-sm hover:bg-slate-300 cursor-pointer'>
                        <div className='flex justify-between'>
                            <p className='text-sm text-gray-500'>Impressions of your post</p>
                            <p className='text-blue-800 font-bold'>30</p>
                        </div>
                    </div>
                    <div className=''>
                        <hr />
                    </div>
                    <div className='p-3 hover:bg-slate-300 cursor-pointer'>
                        <p className='text-sm text-gray-500'>Access exclusive tools & insights Get hired faster. Try Premium free.</p>

                    </div>
                </div>
                <div className=''>
                    <hr />
                </div>
                <div className="flex flex-wrap justify-between cursor-pointer hover:bg-slate-300 p-3">
                    <div className=" flex items-center">
                        <p className="text-sm"> My Items</p>

                        <button aria-label="Bookmark this post" type="button" className="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;