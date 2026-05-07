// import { createBrowserRouter } from "react-router";
// import HomeLayout from "../Layout/HomeLayout";
// import Home from "../Component/Pages/Home";
// import CategoryNews from "../Component/Pages/CategoryNews";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <HomeLayout></HomeLayout>,
//         children: [
//             {
//                 path: "",
//                 element: <Home></Home>
//             },
//             {
//                 path: "/category/:id",
//                 element: <CategoryNews></CategoryNews>
//                 , loader: () => fetch('/public/demo-data/news.json')
//             }
//         ]
//     },
//     {
//         path: "/auth",
//         element: <h2>Auth</h2>
//     },
//     {
//         path: "/news",
//         element: <h2>News</h2>
//     }, {
//         path: "/",
//         element: <h2>Error 404</h2>
//     }
// ])
// export default router;

import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Component/Pages/Home";
import CategoryNews from "../Component/Pages/CategoryNews";
import Register from "../RegisterLogin/Register";
import Login from "../RegisterLogin/Login";
import Authorization from "../RegisterLogin/Authorization";
import NewsDetelse from "../Component/Pages/NewsDetelse";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
import Loading from "../Component/PrivateRoute/Loading";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true, // ✅ path:"" এর বদলে better
                element: <Home />,
            },
            {
                path: "category/:id", // ✅ nested child route => "/" দিবেন না
                element: <CategoryNews />,
                loader: async () => {
                    const res = await fetch("/demo-data/news.json"); // ✅ Vite public path
                    if (!res.ok) throw new Error("Failed to load news.json");
                    return res.json(); // ✅ useLoaderData() এ data পাবেন
                },
                hydrateFallbackElement: <Loading></Loading>
            },
        ],
    },
    {
        path: "/auth", element: <Authorization></Authorization>, children: [
            {
                index: true, // ✅ path:"" এর বদলে better
                element: <Login></Login>,
            },
            { path: "/auth/login", element: <Login></Login> },
            { path: "/auth/register", element: <Register></Register> }
        ]
    },
    {
        path: "/newsdetelse/:id",
        element: <PrivateRoute><NewsDetelse></NewsDetelse></PrivateRoute>, loader: () => fetch('/demo-data/news.json'),
        hydrateFallbackElement: <Loading></Loading>
    },

    // ✅ 404 route must be "*"
    { path: "*", element: <h2>Error 404</h2> },
]);

export default router;
