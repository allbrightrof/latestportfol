import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa"; // For certificates
import { SiYoutube, SiWhatsapp } from "react-icons/si"; // For CodeRush channels

function Achievements() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="text-white max-w-7xl mx-auto space-y-5 py-10">
      <h2 className="text-2xl font-semibold text-center py-4">Certificates & Achievements</h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* JavaScript Certificate */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col items-center p-5 bg-[#202022] border border-[#0EA5E9] rounded-xl hover:scale-105 transition duration-300"
        >
          <FaCertificate className="text-yellow-400 text-4xl mb-3" />
          <h3 className="text-white font-semibold mb-2">JavaScript Certificate</h3>
          <p className="text-gray-300 text-sm text-center">
            Certified in JavaScript, focusing on web development fundamentals, DOM manipulation, and interactive web apps.
          </p>
          {/* Optional: Add an image if you have */}
        <a href="
https://freecodecamp.org/certification/allbright016/javascript-algorithms-and-data-structures-v8 "> <img src="./javscript data structure.png" alt="JS Certificate" className="mt-3 rounded-md" /> </a> 
        </motion.div>

        {/* HNG Internship Certificate */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col items-center p-5 bg-[#202022] border border-[#0EA5E9] rounded-xl hover:scale-105 transition duration-300"
        >
          <FaCertificate className="text-blue-500 text-4xl mb-3" />
          <h3 className="text-white font-semibold mb-2">HNG Internship Certificate</h3>
          <p className="text-gray-300 text-sm text-center">
            Completed the HNG Tech Internship, gaining hands-on experience in React, Tailwind CSS, and project-based web development.
          </p>
          {/* Optional: Add an image */}
         <a href="./hnginter.png" download="HNG-Certificate.png"><img src="./hnginter.png" alt="HNG Certificate" className="mt-3 rounded-md" /></a> 
        </motion.div>

        {/* CodeRush Tech Community */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col items-center p-5 bg-[#202022] border border-[#0EA5E9] rounded-xl hover:scale-105 transition duration-300"
        >
          {/* Use a custom logo or a tech icon */}
          <SiYoutube className="text-red-500 text-4xl mb-2" />
          <SiWhatsapp className="text-green-500 text-4xl mb-2" />
          <h3 className="text-white font-semibold mb-2">CodeRush Community</h3>
          <p className="text-gray-300 text-sm text-center">
            CodeRush is a tech learning community where I create educational content for aspiring developers. It includes a <strong>WhatsApp channel with 11k+ followers</strong> and a <strong>YouTube channel with 1.5k subscribers</strong>, sharing tutorials, tech tips, and programming guidance.
          </p>
          {/* Optional: Add a logo/image */}
          <img src="./coderush.jpg" alt="CodeRush Logo" className="mt-3 rounded-md" /> 
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Achievements;
