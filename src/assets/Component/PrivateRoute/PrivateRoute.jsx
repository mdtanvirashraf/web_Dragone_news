import React, { use } from 'react';
import { AuthContext } from '../../Firebase/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from './Loading';

const PrivateRoute = ({ childen }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation()
    // console.log(user, location)
    if (loading) {
        return <Loading></Loading>
    }
    if (user && user?.email) {

        return (childen);
    }
    else {
        return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
    }
};

export default PrivateRoute;