import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignIn from "../Pages/SignUp";
import AllProducts from "../Pages/AllProducts";
import CategorywiseProducts from "../Pages/CategorywiseProducts";
import ProductDetails from "../Pages/ProductDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/log-in",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignIn></SignIn>,
      },
      {
        path: "/products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/products/:category",
        element: <CategorywiseProducts></CategorywiseProducts>,
      },
      {
        path: "/products/details/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

export default Router;
