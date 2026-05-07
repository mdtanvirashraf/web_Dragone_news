import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Firebase/Provider/AuthProvider';

const Login = () => {
    const { signIn } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handelLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log({ email, password })
        // eslint-disable-next-line no-undef
        signIn(email, password).then((result) => {
            const user = result.user
            // console.log(user)
            navigate(`${location.navigate ? location.navigate : "/"}`)
        }).catch((error) => {
            alert(error.code, error.massage)
        })
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <form onSubmit={handelLogIn} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-bold flex justify-center text-2xl'>LogIn Your Account</h2>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </div>
                <p>don't have Account <span className='text-blue-700 text-xl hover:text-2xl'><Link to={"/auth/register"}>Register</Link></span></p>
            </form>
        </div>

    );
};

export default Login;