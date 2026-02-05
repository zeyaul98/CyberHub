import React from 'react'
import Nav from '../Components/Nav'
import Hero from './Hero'
import Information from './Information'
import { motion } from "framer-motion";
import { useState } from "react";

// services page icons
import {
  FileText,
  Printer,
  BadgeCheck,
  ClipboardList,
  Ticket,
    IdCard,
  Landmark,
  Zap,
  PhoneCall,
  Phone, Mail, MapPin, Send
} from "lucide-react";



import cyberSupport from "../assets/cyberhub.mp4";
import { section } from 'framer-motion/client';

const Home = () => {

    // services page Data
    const servicesData = [
  {
    title: "Document Services",
    desc: "Assistance with drafting, updating, and processing all types of official documents.",
    icon: FileText,
  },
  {
    title: "Printing & Scanning",
    desc: "High-quality printing, scanning, photocopy, and lamination services.",
    icon: Printer,
  },
  {
    title: "ID Cards & Certificates",
    desc: "Design and printing of ID cards and essential government certificates.",
    icon: BadgeCheck,
  },
  {
    title: "Exam Forms & Admissions",
    desc: "Online form filling and support for exams and educational admissions.",
    icon: ClipboardList,
  },
  {
    title: "Tickets & Bill Services",
    desc: "Booking tickets and paying utility bills quickly and securely.",
    icon: Ticket,
  },
  {
    title: "RTPS & Birth Certificates",
    desc: "Online application support for RTPS services and birth certificates.",
    icon: Landmark,
  },
];

// work section  data
const steps = [
  {
    title: "Visit Us or Contact Online",
    desc: "Visit Cyber Hub in Gaya or contact us online to discuss your service requirements.",
    icon: PhoneCall,
    gradient: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-400/40",
  },
  {
    title: "Provide Necessary Details",
    desc: "Share required documents and information for your CSC or digital service application.",
    icon: FileText,
    gradient: "from-indigo-500 to-purple-500",
    glow: "shadow-purple-400/40",
  },
  {
    title: "Get Quick Solutions",
    desc: "Our experts process your request efficiently with timely updates and fast completion.",
    icon: Zap,
    gradient: "from-emerald-500 to-teal-400",
    glow: "shadow-emerald-400/40",
  },
];

// review data
const reviews = [
  {
    name: "Rakesh Kumar",
    location: "Karmganj, Gaya",
    rating: 5,
    text: "CyberHub Cafe ka service kaafi fast hai. Aadhaar update aur online form bina kisi problem ke ho gaya. Highly satisfied!",
    img: "https://runawayjuno.com/wp-content/uploads/2013/07/india-kolkata-chai-maker.jpg",
  },
  {
    name: "Priya Singh",
    location: "Maroofganj, Gaya",
    rating: 4,
    text: "Staff bahut cooperative aur polite hai. CSC aur banking related kaam ke liye ekdum trusted jagah hai.",
    img: "https://img.freepik.com/free-photo/indian-woman-posing-cute-stylish-outfit-camera-smiling_482257-122351.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Mohammad Imran",
    location: "Enayat Colony, Gaya",
    rating: 5,
    text: "CyberHub par government forms, printing aur scanning sab kuch easily ho jata hai. Time bhi save hota hai.",
    img: "https://thumbs.dreamstime.com/b/indian-man-young-good-looking-people-smiling-standing-isolated-white-background-31400054.jpg",
  },
  {
    name: "Sunita Devi",
    location: "Gewal Bigha, Gaya",
    rating: 5,
    text: "PAN card aur passport form bina tension ke fill ho gaya. Staff ne proper guide kiya. Bahut achha experience raha.",
    img: "https://media.licdn.com/dms/image/v2/C4D03AQHOhkxtOelySQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1633605519025?e=2147483647&v=beta&t=dLoPKiYAWGb2cV-iq3Y1FKWAXPrfyCgCnBoKL2cjoQE",
  },
  {
    name: "Amit Verma",
    location: "Karmganj, Gaya",
    rating: 4,
    text: "Fast internet, clean environment aur professional staff. Printing quality bhi kaafi achhi hai.",
    img: "https://img.freepik.com/premium-photo/indian-ethnicity-cheerful-confident-studio-concept_53876-51452.jpg",
  },
  {
    name: "Neha Kumari",
    location: "Maroofganj, Gaya",
    rating: 5,
    text: "CyberHub Gaya ka best cyber cafe hai. CSC aur government related kaam ke liye main hamesha yahin aati hoon.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpaFhaECe2PVHRxA0SlypXoEf3Q_Ai-OGoiQ&s",
  },
];



// contact page data
const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "917463085766";

    const text = `👋 New Contact Form Message

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
💬 Message:
${formData.message}
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
    setFormData({
    name: "",
    phone: "",
    message: "",
  });
  };





  return (
    <> 
    <Hero/>
    <Information/>

    {/* about section */}
    <section className="py-24 bg-[#f5f7fb]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-lg p-12 grid grid-cols-1 md:grid-cols-2 gap-16 mb-12 items-center">

          {/* LEFT – VISUAL BLOCK */}
          <div className="relative">
            {/* Floating stat */}
            <div className="absolute -top-6 right-6 bg-white rounded-xl shadow-md px-5 py-4">
              <h4 className="text-xl font-bold text-gray-900">3+ Years</h4>
              <p className="text-sm text-gray-500">Experience</p>
            </div>

            {/* Image placeholders (same UI feel) */}
            <div className="grid grid-cols-2 gap-6">
              <div className="h-64 rounded-2xl bg-purple-200 shadow-md" > 
                <img src="https://i.pinimg.com/736x/82/02/f6/8202f64a040f6f1caf3cbf93f04e044a.jpg" alt="CyberHub Interior" className="w-full h-full object-cover rounded-2xl" /> </div>
              <div className="h-64 rounded-2xl bg-purple-300 shadow-md mt-10" >
                <img src="https://i.pinimg.com/736x/72/3f/8c/723f8cd0c94d6637f65169f2916d1482.jpg" alt="CyberHub Exterior" className="w-full h-full object-cover rounded-2xl" /> </div>
            </div>
          </div>

          {/* RIGHT – CONTENT */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-purple-500">CyberHub</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              CyberHub is a modern cyber café and digital service center designed
              to provide fast, secure, and reliable internet access along with
              essential online services — all under one roof.
            </p>

            <p className="text-gray-600 leading-relaxed mb-10">
              Whether you need high-speed browsing, online form assistance,
              printing & scanning, or professional digital support, CyberHub is
              your trusted destination for smart and hassle-free solutions.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="text-xl font-semibold text-purple-500">3+ Years</h4>
                <p className="text-sm text-gray-500">Experience</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="text-xl font-semibold text-purple-500">24/7</h4>
                <p className="text-sm text-gray-500">Digital Support</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="text-xl font-semibold text-purple-500">Secure</h4>
                <p className="text-sm text-gray-500">Internet Access</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="text-xl font-semibold text-purple-500">All-in-One</h4>
                <p className="text-sm text-gray-500">Online Services</p>
              </div>
            </div>

            {/* EXPLORE BUTTON (BOTTOM) */}
            <button className="px-8 py-4 bg-purple-500 text-white rounded-xl shadow-md hover:bg-purple-600 transition">
              Explore More
            </button>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Card */}
        <div className="group bg-white/80 backdrop-blur rounded-3xl p-8 text-center 
                        border border-cyan-100 shadow-lg 
                        hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-500 text-white shadow-md">
              <IdCard className="w-8 h-8" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 group-hover:text-purple-500 mb-4">
            License Services
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Assistance with new licenses, renewals, and corrections for all
            vehicle types.
          </p>
        </div>

        {/* Card */}
        <div className="group bg-white/80 backdrop-blur rounded-3xl p-8 text-center 
                        border border-cyan-100 shadow-lg 
                        hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-500 text-white shadow-md">
              <Landmark className="w-8 h-8" />
            </div>
          </div>
          <h3 className="text-2xl font-bold group-hover:text-purple-500 text-slate-800 mb-4">
            CSC Center
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Apply for PAN, Aadhaar, Voter ID, and other government services in
            one place.
          </p>
        </div>

        {/* Card */}
        <div className="group bg-white/80 backdrop-blur rounded-3xl p-8 text-center 
                        border border-cyan-100 shadow-lg 
                        hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-500 text-white shadow-md">
              <FileText className="w-8 h-8" />
            </div>
          </div>
          <h3 className="text-2xl font-bold group-hover:text-purple-500 text-slate-800 mb-4">
            Document Help
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Support for online forms, scanning, printing, uploads, and
            submissions.
          </p>
        </div>

        {/* Card */}
        <div className="group bg-white/80 backdrop-blur rounded-3xl p-8 text-center 
                        border border-cyan-100 shadow-lg 
                        hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-500 text-white shadow-md">
              <Zap className="w-8 h-8" />
            </div>
          </div>
          <h3 className="text-2xl group-hover:text-purple-500 font-bold text-slate-800 mb-4">
            Quick Support
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Personalized service with a customer-first approach, always on
            time.
          </p>
        </div>

      </div>  
      </div>
    </section>

    {/* serives section */}
    <section className="py-24 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold mb-6
                         bg-gradient-to-r from-blue-600 to-indigo-600
                         text-transparent bg-clip-text">
            Our Services
          </h2>

          <p className="text-gray-600 text-lg max-w-md mb-10">
            Fast & Reliable Cyber Cafe in Patna – Get All Services in One Place
          </p>

          {/* Services List */}
          <div className="space-y-4 mb-10">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group flex gap-4 p-5 rounded-2xl
                             border border-transparent
                             bg-white
                             hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50
                             hover:border-blue-200
                             shadow-sm hover:shadow-md
                             transition-all duration-300"
                >
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl
                               bg-gradient-to-r from-blue-500 to-indigo-500
                               flex items-center justify-center
                               text-white shadow-md"
                  >
                    <Icon size={22} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            className="px-8 py-4 rounded-full font-semibold text-white
                       bg-gradient-to-r from-blue-400 to-indigo-600
                       shadow-lg hover:shadow-indigo-400/40
                       hover:scale-105 transition"
          >
            Read More
          </button>
        </motion.div>

        {/* RIGHT ILLUSTRATION */}
        <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="relative"
>
  {/* Background Circle Image */}
  <img
    src="https://i.pinimg.com/736x/3a/d9/13/3ad91302d7d017512b76ec7129b63ca1.jpg"
    alt="Background Shape"
    className="absolute -right-10 top-1/2 -translate-y-1/2
               w-full h-full object-cover
               rounded-l-full opacity-40 z-0"
  />

  {/* Foreground Illustration */}
  <img
    src="https://illustrations.popsy.co/blue/remote-work.svg"
    alt="Services Illustration"
    className="relative z-10 w-full max-w-xl mx-auto"
  />
</motion.div>


      </div>
    </section>

    {/* why choose us section */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
        
        {/* Main Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5
                     bg-gradient-to-r from-cyan-400 to-indigo-500
                     text-transparent bg-clip-text"
        >
          Why Choose Cyber Hub in Gaya
        </h2>

        {/* Sub Heading */}
        <h3 className="text-base sm:text-lg md:text-2xl font-semibold mb-5 text-gray-200">
          Top Digital Services by Cyber Hub – Fast & Hassle-Free
        </h3>

        {/* Paragraph 1 */}
        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-5 max-w-3xl mx-auto">
          At <span className="text-white font-semibold">Cyber Hub</span>, we provide
          reliable digital services, expert guidance, and quick solutions for all
          your cyber cafe and CSC-related needs in Gaya. Our customer-first approach
          ensures every service is smooth, transparent, and completely hassle-free.
        </p>

        {/* Paragraph 2 */}
        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
          As a result, you save time, avoid long queues, and get affordable, trusted
          services — all under one roof. Whether it’s documentation, online
          applications, printing, or government services, Cyber Hub is your
          one-stop digital solution in Gaya.
        </p>

      </div>
    </section>

    {/* work section */}
    <section className="py-24 bg-gradient-to-br from-blue-100 via-white to-indigo-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE – CARDS */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4
                           bg-gradient-to-r from-blue-600 to-indigo-600
                           text-transparent bg-clip-text">
              How It Works
            </h2>

            <p className="text-gray-600 text-lg max-w-md mb-4">
              Digital Support from the Best Cyber Cafe in Gaya
            </p>

            <p className="text-gray-600 max-w-lg">
              Cyber Hub Cafe makes your CSC and digital services simple with fast,
              reliable, and completely hassle-free solutions. Our experienced team
              guides you at every step to ensure a smooth and transparent process.
            </p>
          </div>

          {/* Cards */}
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex gap-4 p-6 rounded-2xl
                            bg-white border border-gray-100
                            shadow-md hover:shadow-xl ${step.glow}
                            transition group`}
              >
                {/* Gradient Border */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0
                              group-hover:opacity-10 transition
                              bg-gradient-to-r ${step.gradient}`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center
                              text-white shadow-lg
                              bg-gradient-to-r ${step.gradient}`}
                >
                  <Icon size={22} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Step Number */}
                <span className="absolute top-4 right-5 text-4xl font-bold
                                 text-gray-100 group-hover:text-gray-200 transition">
                  0{index + 1}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* RIGHT SIDE – VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background Glow */}
          <div
            className="absolute -right-16 top-1/2 -translate-y-1/2
                       w-[420px] h-[420px]
                       bg-gradient-to-br from-blue-100 to-indigo-100
                       rounded-full blur-2xl -z-10"
          />

          <video
            src={cyberSupport}   
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[650px] max-w-md mx-auto rounded-2xl shadow-xl"
          />
        </motion.div>

      </div>
    </section>

    {/* review section */}
    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
      
      {/* Soft Background Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-center text-3xl md:text-4xl font-extrabold mb-14
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            bg-clip-text text-transparent
          "
        >
          Loved by customers across Bihar ❤️
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4 text-sm">
                {[...Array(5)].map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className={
                      starIndex < r.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
                <span className="ml-2 text-xs text-gray-500">
                  {r.rating}.0
                </span>
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {r.text}
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-12 h-12 rounded-full border"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {r.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {r.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    
    {/* contact us section */}
    <section className="relative py-24 bg-gradient-to-b from-white via-sky-50 to-indigo-100 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-extrabold mb-6
          bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
          bg-clip-text text-transparent"
        >
          Get in Touch with CyberHub
        </motion.h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Have questions or need digital services? Reach out to CyberHub —
          we’re here to help you grow online.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              { icon: Phone, title: "Call Us", value: "+91 7463085766" },
              { icon: Mail, title: "Email", value: "cyberhub7463@gmail.com" },
              {
                icon: MapPin,
                title: "Visit Us",
                value:
                  "In Front of GBM College, Lal Kothi, Near Dominos, Gaya",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-xl bg-white
                shadow-lg hover:shadow-2xl transition border border-gray-100"
              >
                <item.icon className="w-8 h-8 text-purple-600" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <div className="grid grid-cols-1 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <textarea
                rows="4"
                name="message"
                placeholder="Your Message"
                className="input resize-none"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-2
                bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                text-white font-semibold py-3 rounded-xl
                hover:scale-105 transition shadow-lg"
              >
                Send Message <Send size={18} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>

    




    </>
  )
}

export default Home
