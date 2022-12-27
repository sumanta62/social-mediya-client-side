import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Media = () => {
    const [media, setMedia] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/inputFild`)
            .then(res => res.json())
            .then(data => setMedia(data))
    }, [])
    // console.log(media.description.images);

    return (
        <div>
            <div className="container m-auto w-10/12 py-14">
                <div className='text-center w-5/6 md:w-3/6 lg:w-3/6 pb-3 m-auto'>
                    <h1 className="text-4xl font-bold pb-2 ">All Post</h1>
                    <p className='text-sm'>Here you can see the pictures and text of all the posts.</p>
                </div>

                <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>text </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            media.map((post, i) =>
                                <tr key={post._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={post?.images} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{post?.description}</td>
                                    {/* <td>{user?.role !== 'admin' && <button onClick={() => handlerMakeAdmin(user._id)} className="btn btn-xs btn-primary">Make Admin</button>}</td>
                                    <td><button  className="btn btn-xs btn-success">Verify </button></td>
                                    <td><button onClick={() =>handlerDeleteUsers(user._id)} className="btn btn-xs btn-danger">Delete</button></td> */}
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
            </div>

        </div>
    );
};

export default Media;