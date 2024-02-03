import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Users from "./Pages/Users/Users";
import Products from "./Pages/Products/Products";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";
import Login from "./Pages/Login/Login";
import "./styles/global.scss";
import User from "./Pages/User/User";
import Product from "./Pages/Product/Product";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Users",
          element: <Users />,
        },
        {
          path: "/Products",
          element: <Products />,
        },
        {
          path: "/Users/:id",
          element: <User />,
        },
        {
          path: "/Products/:id",
          element: <Product />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
