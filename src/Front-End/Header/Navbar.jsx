import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <ul className="justify-between hidden md:flex gap-4 text-xl ">
          <motion.div whileTap={{ scale: 0.75 }}>
            <Link
              className="hover:bg-second px-2 py-1 transition-all duration-200 ease-in-out hover:text-black font-semibold rounded-md "
              to="/"
            >
              Home
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 0.75 }}>
            <Link
              className="hover:bg-second px-2 py-1 transition-all duration-200 ease-in-out hover:text-black font-semibold rounded-md "
              to="/about"
            >
              About
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 0.75 }}>
            <Link
              className="hover:bg-second px-2 py-1 transition-all duration-200 ease-in-out hover:text-black font-semibold rounded-md "
              to="/category"
            >
              Category
            </Link>
          </motion.div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
