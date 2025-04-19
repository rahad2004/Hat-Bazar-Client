import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignIn from "../Pages/SignUp";
import AllProducts from "../Pages/AllProducts";
import CategorywiseProducts from "../Pages/CategorywiseProducts";
import ProductDetails from "../Pages/ProductDetails";
import AddProduct from "../Pages/AddProduct";
import Errorpage from "../Pages/Errorpage";
import MyAddproduct from "../Pages/MyAddproduct";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage></Errorpage>,
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
        path: "/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/my-add-product",
        element: <MyAddproduct></MyAddproduct>,
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
