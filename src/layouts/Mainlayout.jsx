

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { Outlet } from "react-router-dom";

// function Mainlayout() {
//   return (
//     <>
//       <Navbar />
// <main className="max-w-[1440px] mx-auto w-full px-2 md:px-6">
//       {/* <main className="min-h-[80vh]"> */}
//         <Outlet />{/*This is where your child routes (Home, Products, Cart, etc.) 
//            will be rendered */}
//       </main>

//       <Footer />
//     </>
//   );
// }

// export default Mainlayout;
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Mainlayout() {
  return (
    // The outer wrapper ensures the background color is consistent and prevents horizontal scrolling
    <div className="bg-gray-50 min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />

      {/* 1. max-w-[1536px]: Standard 2xl width is best for 1920px screens to prevent ultra-wide text lines.
        2. mx-auto: Centers the entire store on large monitors.
        3. flex-grow: Pushes the footer to the bottom even on empty pages.
        4. px-2 to md:px-8: Tight margins for 375px mobile, generous breathing room for desktop.
      */}
      <main className="max-w-[1536px] mx-auto w-full flex-grow px-2 sm:px-4 md:px-8 py-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Mainlayout;