import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Shop1 from "../assets/shop1.jpeg";
import Shop2 from "../assets/shop2.jpeg";

const updates = [
  "📢 Aadhaar Update service available daily (10 AM – 6 PM)",
  "🆕 PAN Card correction now available at CyberHub",
  "💳 Banking services: AEPS, Money Transfer active",
  "📄 Online form filling for Govt jobs open",
  "🖨️ High quality printing & scanning services",
  "🛂 Passport application assistance available",
  "📚 CSC services for students & businesses",

  "🆔 Aadhaar address & mobile number update available",
  "🪪 New PAN card apply with instant acknowledgment",
  "🧾 PAN–Aadhaar linking assistance available",
  "🆔 Voter ID correction & update service open",
  "💳 Cash withdrawal through AEPS available",
  "💸 Fast money transfer service (All banks)",
  "🏦 Bank account opening assistance available",
  "🧾 PF withdrawal & UAN services available",

  "📄 Scholarship form filling available",
  "🎓 Online admission form assistance available",
  "🏛️ Income certificate apply here",
  "🏛️ Caste certificate application support",
  "🏛️ Residence certificate services available",
  "📄 Birth certificate online apply support",
  "📄 Death certificate correction service",
  "📄 Ration card apply & correction available",

  "🛂 Passport appointment booking available",
  "🛂 Passport renewal assistance available",
  "✈️ Travel ticket booking support available",
  "✈️ Train & bus ticket booking available",
  "🛂 Police verification form filling available",
  "🧳 E-visa assistance available",

  "🖨️ Color & black-white print available",
  "📠 Scanning & photocopy service available",
  "🖨️ Lamination service available",
  "📑 Spiral binding service available",
  "📠 Bulk printing facility available",
  "💻 Fast internet browsing available",

  "📚 Exam admit card download & print service",
  "📚 Online result download support",
  "📚 Marksheet download & print service",
  "🎓 Online exam registration support",
  "📚 Resume / CV creation service available",

  "🏢 GST registration assistance available",
  "🧾 GST return filing support",
  "🏢 MSME registration available",
  "🏢 Shop act registration support",
  "💼 Digital signature (DSC) assistance available",

  "🌐 DigiLocker services available",
  "🌐 Online government portal assistance",
  "🌐 Online appointment booking support",
  "🌐 Email ID creation support available",
  "🌐 Online grievance registration support",

  "⭐ Trusted cyber cafe in your area",
  "⭐ Government approved CSC center",
  "⭐ All digital services under one roof",
  "⭐ Experienced & friendly staff available",
  "⭐ Affordable charges & fast service",
  "⭐ Same day service for most applications",

  "🔔 New services launching soon at CyberHub",
  "🔔 Updated service timings available",
  "🔔 Customers requested to carry original documents",
  "🔔 Sunday special services available",
  "🔔 Instant print & scan services available",

  "📢 CyberHub – Your trusted digital service partner",
  "📢 Visit CyberHub for all online & CSC services",
  "📢 Reliable & secure digital solutions available",
  "📢 Serving students, businesses & citizens",
  "📢 CyberHub – Fast, Secure & Professional"
];


const BroadcastSection = () => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    startScroll();
    return stopScroll;
  }, []);

  const startScroll = () => {
    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop += 1;

        if (
          scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
          scrollRef.current.scrollHeight
        ) {
          scrollRef.current.scrollTop = 0;
        }
      }
    }, 35); // thoda smoother
  };

  const stopScroll = () => {
    clearInterval(intervalRef.current);
  };

  const handleReadMore = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };

  return (
    <section className="relative py-28 bg-gradient-to-b from-indigo-50 via-white to-sky-100 overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-sky-300 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6
              bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
              bg-clip-text text-transparent">
              CyberHub Information Broadcast
            </h2>

            <p className="text-gray-600 mb-8">
              Stay updated with the latest digital services, government forms,
              banking updates and announcements at CyberHub.
            </p>

            <div className="relative flex gap-4">

  {/* background shadow / glow */}
  <div className="absolute -inset-6 bg-indigo-300 rounded-3xl blur-3xl opacity-25"></div>

  <img
    src={Shop1}
    className="
      relative
      w-52 h-60
      object-cover
      rounded-xl
      border-4 border-white
      shadow-xl
    "
    alt="Cyber service"
  />

  <img
    src={Shop2}
    className="
      relative
      w-58 h-62 mt-10
      object-cover
      rounded-xl
      border-4 border-white
      shadow-xl
    "
    alt="Government services"
  />

</div>


          </motion.div>

          {/* RIGHT SIDE – BROADCAST BOARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8"
          >
            <h3 className="font-semibold text-xl mb-5 text-indigo-600">
              🔔 Live Updates
            </h3>

            <div
              ref={scrollRef}
              onMouseEnter={stopScroll}
              onMouseLeave={startScroll}
              className="h-80 overflow-hidden space-y-4 pr-2"
            >
              {updates.concat(updates).map((item, i) => (
                <div
                  key={i}
                  className="
                    p-4 rounded-xl bg-gray-50 border border-gray-100
                    text-sm text-gray-700 shadow-sm
                  "
                >
                  {item}
                </div>
              ))}
            </div>

            {/* READ MORE BUTTON */}
            <div className="mt-6 text-center">
              <button
                onClick={handleReadMore}
                className="
                  inline-flex items-center justify-center
                  px-6 py-3 rounded-xl
                  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                  text-white font-semibold
                  hover:scale-105 transition
                  shadow-lg
                "
              >
                Read More Updates →
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-4 text-center">
              Hover to pause scrolling
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BroadcastSection;
