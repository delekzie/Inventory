import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <>
    //   <nav className="flex flex-wrap justify-between items-center text-white text-xl px-6 md:px-16 py-6 bg-blue-900 shadow-xl">
    //     <div className="w-full md:w-auto">
    //       <ul className="flex flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0">
    //         <li>
    //           <NavLink 
    //             to="/" 
    //             className={({ isActive }) => 
    //               isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition"
    //             }
    //             aria-label="About Us"
    //           >
    //             Home
    //           </NavLink>
    //         </li>
    //         <li>
    //           <a href="#about"
    //             className={({ isActive }) => 
    //               isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition" }>
    //             About
    //             </a>
    //         </li>
    //         <li>
    //           <NavLink 
    //             to="/products" 
    //             className={({ isActive }) => 
    //               isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition"
    //             }
    //             aria-label="Our Products"
    //           >
    //             Our Products
    //           </NavLink>
    //         </li>
    //         <li>
    //         <a href="#contact"
    //             className={({ isActive }) => 
    //               isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition" }
    //            >
    //             Contacts
    //             </a>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Center Section - Logo */}
    //     <div className="w-full md:w-auto flex justify-center my-4 md:my-0">
    //       <h1 className="text-2xl font-bold text-blue-50" aria-label="Dr. Teals Logo">
    //         Dr. Teals
    //       </h1>
    //     </div>

    //     {/* Right Section - Actions */}
    //     <div className="w-full md:w-auto">
    //       <ul className="flex flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0">
    //         <li className="relative">
    //           <NavLink 
    //             to="/cart" 
    //             className={({ isActive }) => 
    //               isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition"
    //             }
    //             aria-label="View Cart"
    //           >
    //             Cart
    //           </NavLink>
    //           {/* Optional badge for cart items */}
    //           <span className="absolute top-[-7px] left-7 bg-red-500 text-white text-sm rounded-full w-5 h-5 flex justify-center items-center">
    //             3
    //           </span>
    //         </li>
    //         <li>
    //           <NavLink 
    //             to="/login" 
    //             className={({ isActive }) => 
    //               isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition"
    //             }
    //             aria-label="Login"
    //           >
    //             Login
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink 
    //             to="/register" 
    //             className={({ isActive }) => 
    //               isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition"
    //             }
    //             aria-label="Sign Up"
    //           >
    //             Sign Up
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // </>
    <>
        <nav className="flex flex-wrap justify-between items-center text-white text-xl px-6 md:px-16 py-2 lg:py-6 bg-blue-900 shadow-xl">
          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? "✖" : "☰"}
          </button>
    
          {/* Left Section - Navigation Links */}
          <div className={`w-full md:w-auto ${isOpen ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0">
              <li>
                <NavLink 
                  to="/homepage" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition"
                  }
                  aria-label="Home"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>
              <li>
                <NavLink 
                  to="/products" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition"
                  }
                  aria-label="Our Products"
                >
                  Our Products
                </NavLink>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
    
          {/* Center Section - Logo */}
          <div className="w-full md:w-auto flex justify-center my-4 md:my-0">
            <h1 className="text-2xl font-bold text-blue-50" aria-label="Dr. Teals Logo">
              Dr. Teals
            </h1>
          </div>
    
          {/* Right Section - Actions */}
          <div className={`w-full md:w-auto ${isOpen ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0">
              <li className="relative">
                <NavLink 
                  to="/cart" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition"
                  }
                  aria-label="View Cart"
                >
                  Cart
                </NavLink>
          
              </li>
              <li>
                <NavLink 
                  to="/login" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition"
                  }
                  aria-label="Login"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/register" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition"
                  }
                  aria-label="Sign Up"
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        </>
      );
    };
export default Navbar;
