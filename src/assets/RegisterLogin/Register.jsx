import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Firebase/Provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext)
    const handelFormOnceSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        // console.log({ name, email, photo, password })
        // eslint-disable-next-line no-undef
        createUser(email, password)
            .then((result) => {
                const user = result.user
                //console.log(user);
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo })
                }).catch((error) => {
                    // console.log(error)
                    setUser(user)
                })

            })
            .error((error) => {
                const errorMassage = error.massage;
                alert(errorMassage)
            });

    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <form onSubmit={handelFormOnceSubmit} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-bold flex justify-center text-2xl'>Register Your Account</h2>
                <div className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Full Name</label>
                        <input name='name' type="text" className="input" placeholder="Full Name" required />
                        {/* Email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />
                        {/* Photo */}<label className="label">Photo URL</label>
                        <input name='photo' type="text" className="input" placeholder="Photo URL" required />
                        {/* password */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </div>
                <p>don't have Account <span className='text-blue-700 text-xl hover:text-2xl'><Link to={"/auth/login"}>Log In</Link></span></p>
            </form>
        </div>
    );
};

export default Register;