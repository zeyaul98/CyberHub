import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import cyber1  from "../assets/cyber1.jpg";
import cyber2  from "../assets/cyber2.jpg";
import cyber3  from "../assets/cyber3.jpg";

const images = [
  cyber1,
  cyber2,
  cyber3,
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* Sliding Background Images */}
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt="CyberHub Background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center text-center px-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-400">
            Welcome to CyberHub
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Secure • Fast • Scalable  
            <br />
            Your One-Stop Digital Cyber Solution
          </p>

          <div className="mt-8 flex gap-4 justify-center">
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-xl transition">
              Get Started
            </button>

            <button className="px-8 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded-xl transition">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
