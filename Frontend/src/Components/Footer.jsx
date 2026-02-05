import { MapPin, Mail, Phone } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14">

        {/* Brand Section */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Cyber Hub"
              className="w-16 h-16 rounded-xl bg-white p-2 shadow-lg"
            />
            <h2 className="text-xl font-semibold tracking-wide">
              Cyber <span className="text-cyan-400">Hub</span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-white/80">
            Cyber Hub is your trusted destination for all types of online
            services, digital solutions, and documentation support, ensuring
            fast, reliable, and hassle-free service.
          </p>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-cyan-400">
            Support
          </h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="hover:text-white hover:translate-x-1 transition cursor-pointer">
              Help Centre
            </li>
            <li className="hover:text-white hover:translate-x-1 transition cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-white hover:translate-x-1 transition cursor-pointer">
              Terms and Conditions
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-cyan-400">
            Company
          </h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="hover:text-white hover:translate-x-1 transition cursor-pointer">
              About Us
            </li>
            <li className="hover:text-white hover:translate-x-1 transition cursor-pointer">
              Services
            </li>
            <li className="hover:text-white hover:translate-x-1 transition cursor-pointer">
              License
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-cyan-400">
            Get In Touch
          </h3>

          <ul className="space-y-5 text-sm text-white/80">

            <li className="flex gap-4 items-start">
              <div className="bg-white/10 backdrop-blur p-2 rounded-lg">
                <MapPin className="w-5 h-5 text-cyan-400" />
              </div>
              <span>
                In Front of GBM College, Lal Kothi, Near Dominos, Gaya
              </span>
            </li>

            <li className="flex gap-4 items-start">
              <div className="bg-white/10 backdrop-blur p-2 rounded-lg">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <span>
                cyberhub7463@gmail.com
              </span>
            </li>

            <li className="flex gap-4 items-start">
              <div className="bg-white/10 backdrop-blur p-2 rounded-lg">
                <Phone className="w-5 h-5 text-cyan-400" />
              </div>
              <span>+91 7463085766 </span>
            </li>

          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 text-center py-5 text-sm text-white/70">
        © 2026 All Rights Reserved. Designed by{" "}
        <span className="text-cyan-400 font-medium cursor-pointer hover:underline">
          Zeyaul
        </span>
      </div>

    </footer>
  );
};

export default Footer;
