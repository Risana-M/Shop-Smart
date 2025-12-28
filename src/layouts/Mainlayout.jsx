

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Mainlayout() {
  return (
    <>
      <Navbar />
<main className="max-w-[1440px] mx-auto w-full px-2 md:px-6">
      {/* <main className="min-h-[80vh]"> */}
        <Outlet />{/*This is where your child routes (Home, Products, Cart, etc.) 
           will be rendered */}
      </main>

      <Footer />
    </>
  );
}

export default Mainlayout;