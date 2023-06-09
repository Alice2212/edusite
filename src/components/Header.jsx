// import React from "react";
// import { useState } from "react";
// import {Link} from "react-router-dom"

// export default function Header() {
//   const [navbar, setNavbar] = useState(false);

//   return (
//     <nav className=" w-full bg-[--orange-web] fixed opacity-70 shadow">
//       <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
//         <div>
//           <div className="flex items-center justify-between py-3 md:py-5 md:block">
//             <a href="">
//               <h2 className="text-2xl font-bold text-white">Edusite</h2>
//             </a>
//             <div className="md:hidden">
//               <button
//                 className="p-2 text-[black] bg-[--mantis] rounded-md outline-none focus:border-[--orange-web] focus:border"
//                 onClick={() => setNavbar(!navbar)}
//               >
//                 {navbar ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6 text-white"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6 text-white"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="">
//           <div
//             className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//               navbar ? "block" : "hidden"
//             }`}
//           >
//             <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-white">
//               <Link to="/" className="">
//                 Home
//               </Link>

//               <Link to="/about" className="">
//                 About
//               </Link>
//               <Link to="/service" className="">
//                 Service
//               </Link>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import React from "react";
import { Navbar, Button } from "flowbite-react";

const Header = () => {
  return (
    <section className="fixed w-full z-50">
      <div>
        <Navbar
          // fluid={true}
          // rounded={true}

          style={{
            background: "var(--gradient)",
          }}
        >
          <Navbar.Brand>
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              EDUSITE
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2 text-2xl">
            <Button className="btn-primary hover:bg-amber-500 focus:bg-[--gambog] focus:outline outline-inherit text-3xl">
              Get started
            </Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="#home" className="text-xl" >
              Home
            </Navbar.Link>
            <Navbar.Link href="#about" className="text-xl">
              About
            </Navbar.Link>
            <Navbar.Link href="#department" className="text-xl">
              Department
            </Navbar.Link>
            <Navbar.Link href="#teams" className="text-xl">
              Teams
            </Navbar.Link>
            <Navbar.Link href="#contact" className="text-xl">
              Contact
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </section>
  );
};

export default Header;
