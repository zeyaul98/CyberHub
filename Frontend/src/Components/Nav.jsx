import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const navItems = ["Home", "About", "Services", "Blog", "Contacts"];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={logo}
            alt="Cyber Hub Logo"
            className="w-15 h-15 object-contain"
          />
          <span className="text-2xl font-bold">
            <span className="text-indigo-600">Cyber</span>{" "}
            <span className="text-gray-800">Hub</span>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.li
              key={item}
              className="relative hover:text-indigo-600 cursor-pointer text-gray-700 font-medium"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              {item}

              {/* Underline */}
              <motion.span
                variants={{
                  rest: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 -bottom-1 h-[2px] bg-indigo-600"
              />
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-2xl cursor-pointer text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-white shadow-lg"
        >
          <ul className="flex flex-col gap-6 py-6 px-8">
            {navItems.map((item) => (
              <li
                key={item}
                className="text-gray-700 font-medium border-b border-gray-100 pb-2"
                onClick={() => setOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
