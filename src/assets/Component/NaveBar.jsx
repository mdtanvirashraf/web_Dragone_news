import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Firebase/Provider/AuthProvider';

const NaveBar = () => {
    const { user, logOut } = use(AuthContext)
    const handelLogOut = () => {
        // console.log("log out")
        logOut().then(() => {
            alert("LogOut Suesfull")
        }).error((error) => {
            alert(error.massage)
        })
    }
    return (
        <div className='my-6 flex justify-between items-center  '>
            {user && user.email}
            <nav className='mx-auto justify-center'>
                <NavLink className="mx-2 border-2 border-blue-600 rounded-3xl p-2" to="/">Home</NavLink>
                <NavLink className="mx-2 border-2 border-blue-600 rounded-3xl p-2" to="/news" to="/auth">Auth</NavLink>
                <NavLink className="mx-2 border-2 border-blue-600 rounded-3xl p-2" to="/news">News</NavLink>
            </nav>
            <div className='flex gap-5'>
                <img className='w-12 rounded-2xl' src={`${user ? user.photoURL : "../../../public/assets/user.png"}`} alt="User" />
                {
                    user ? <button onClick={handelLogOut} className='bg-primary text-white px-3.5 py-1.5'>Log Out</button> : <button className='bg-primary text-white px-3.5 py-1.5'><Link to={"auth/login"}>Login</Link></button>
                }

            </div>
        </div>
    );
};

export default NaveBar;