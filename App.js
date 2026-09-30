// ## Namaste React Course by Akshay Saini
// Chapter 09 - Optimizing our App

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import RestaurantMenu from "./Components/RestaurantMenu";
import Profile from "./Components/ProfileClass";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
import { CartProvider } from "./context/cartContext";
import Cart from "./Components/cart";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

const AppLayout = () => {
  return (
    <React.Fragment>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </React.Fragment>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },

      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
      
      {
        path: "cart",
        element: <Cart />,
       },
    ],
  },

  {
    path: "login",
    element: <Login />,
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <CartProvider>
    <RouterProvider router={appRouter} />
  </CartProvider>
);