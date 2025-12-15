import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
function Projects(){
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
    return(
    <motion.section className="text-white max-w-7xl mx-auto space-y-5" variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}>
         <h2 className="text-lg font-semibold text-center py-14 px-8">Projects</h2>
     <div className="flex flex-col gap-22 p-10">
   <motion.div
          variants={cardVariants} className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0" >

  {/* Text Section */}
  <div className="space-y-7 max-w-3xl">
    <h3 className="text-2xl font-bold text-white mb-2">
      💎 Jeweluxe
    </h3>

    <p className="text-gray-300 text-base leading-relaxed">
      Jeweluxe is a modern jewelry landing page designed to showcase luxury jewelry  collections, highlight premium product features, and drive customer engagement.
      It includes elegant product displays, smooth animations, and a responsive layout to provide an excellent browsing experience across all devices.
      <br /><br />
      This project is built with React and Tailwind CSS, focusing on clean UI, performance, and mobile-first responsiveness. It features reusable components,
      an interactive hero section, and CTA buttons that guide users toward shopping and exploring collections.
    </p>

    <a href="https://papaya-tartufo-0c2b7e.netlify.app/">
      <button
        className="text-sm font-medium cursor-pointer border border-[#0EA5E9] py-2 px-4 rounded-lg transition-all duration-700 hover:scale-105 active:scale-95 hover:bg-[#0EA5E9]"
      >
        VIEW DEMO
      </button>
    </a>
  </div>

  {/* Image Section */}
  <div>
    <img 
      src="./jewelll.png" 
      alt="Jeweluxe Preview" 
      className="h-auto rounded-lg shadow-lg hover:scale-105 transition duration-300"
    />
  </div>

</motion.div>


     <motion.div
          variants={cardVariants} className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">

  {/* Text Section */}
  <div className="space-y-7 max-w-3xl">
    <h3 className="text-2xl font-bold text-white mb-2">
      🚗 SilexSecure
    </h3>

    <p className="text-gray-300 text-base leading-relaxed">
      SilexSecure is a smart automotive security landing page designed to help car owners protect their vehicles with advanced anti-theft technology. 
      It highlights intelligent features such as GPS tracking, remote engine lock, intrusion alerts, and mobile app monitoring — ensuring maximum 
      confidence and control for every driver.
      <br /><br />
      This project is built using React and Tailwind CSS, focusing on a clean layout, high-contrast UI, and smooth component-based animations. 
      It features an informative hero section, feature highlights, and strong call-to-action buttons that guide users toward securing their vehicles 
      with cutting-edge protection.
    </p>

    <a href="https://toyalerofiq.vercel.app/">
      <button
        className="text-sm font-medium cursor-pointer border border-[#0EA5E9] py-2 px-4 rounded-lg transition-all duration-700 hover:scale-105 active:scale-95 hover:bg-[#0EA5E9]"
      >
        VIEW DEMO
      </button>
    </a>
  </div>

  {/* Image Section */}
  <div>
    <img 
      src="./irescue (1).png"
      alt="SilexSecure Preview"
      className="h-auto rounded-lg shadow-lg hover:scale-105 transition duration-300"
    />
  </div>

</motion.div>


  
       <motion.div
          variants={cardVariants} className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">

  {/* Text Section */}
  <div className="space-y-7 max-w-3xl">
    <h3 className="text-2xl font-bold text-white mb-2">
      🏥 MediPlus
    </h3>

    <p className="text-gray-300 text-base leading-relaxed">
      MediPlus is a healthcare service website designed to make medical assistance more accessible 
      and reliable for patients. It provides users with streamlined access to hospital information, 
      doctor profiles, appointment booking, and health service details — ensuring quick decisions 
      during urgent situations.
      <br /><br />
      Built using React and Tailwind CSS, MediPlus focuses on delivering a clean, user-friendly interface 
      with strong accessibility and responsive design. It features well-organized medical service sections, 
      a highlighted hero CTA, and smooth navigation — all aimed at improving patient experience and trust.
    </p>

    <a href="https://medipluswebsit.netlify.app/">
      <button
        className="text-sm font-medium cursor-pointer border border-[#0EA5E9] py-2 px-4 rounded-lg transition-all duration-700 hover:scale-105 active:scale-95 hover:bg-[#0EA5E9]"
      >
        VIEW DEMO
      </button>
    </a>
  </div>

  {/* Image Section */}
  <div>
    <img 
      src="./medi.png"
      alt="MediPlus Preview"
      className="h-auto rounded-lg shadow-lg hover:scale-105 transition duration-300"
    />
  </div>

</motion.div>



  
 <motion.div
          variants={cardVariants} className="flex flex-col md:flex-row items-center justify-between gap-10 py-10">

  {/* Text Section */}
  <div className="space-y-6 md:w-1/2">
    <h3 className="text-2xl font-bold text-white">
      🔐 Hyrax Sign-Up Page
    </h3>

    <p className="text-gray-300 leading-relaxed text-base">
      Hyrax is a secure and user-friendly sign-up interface built to demonstrate modern form
      validation techniques and smooth onboarding flow. It includes real-time validation for email,
      password strength, and required fields to ensure accurate user input.
      <br /><br />
      Built using <span className="text-[#0EA5E9] font-semibold">HTML, CSS, and JavaScript</span>, the UI supports responsive design, accessible form elements,
      password toggling, and dynamic error messages. Smooth animations and visual feedback deliver
      a polished onboarding experience.
    </p>

    <a href="https://hyraxsign.vercel.app/" target="_blank">
      <button
        className="text-sm font-medium 
        border border-[#0EA5E9] py-2 px-6 rounded-lg
        transition-all duration-300 hover:scale-105 hover:bg-[#0EA5E9] hover:text-black"
      >
        VIEW DEMO
      </button>
    </a>
  </div>

  {/* Image Section */}
  <div className="md:w-1/2 flex justify-center">
    <img
      src="./hyraax.png"
      alt="Hyrax Sign-Up Page"
      className="rounded-lg shadow-xl w-full max-w-md object-cover hover:scale-105 transition duration-300"
    />
  </div>

</motion.div>


    <motion.div
          variants={cardVariants} className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">

  {/* Text Section */}
  <div className="space-y-7 max-w-3xl">
    <h3 className="text-2xl font-bold text-white mb-2">
      🎫 Ticket Booking App
    </h3>

    <p className="text-gray-300 text-base leading-relaxed">
      The Ticket Booking App is a responsive web application that allows users to
      browse events and book tickets seamlessly. It provides an intuitive interface where users can view 
      available seats, choose ticket categories, and complete bookings with real-time confirmation feedback.
      <br /><br />
      Built using React and Tailwind CSS, the project includes dynamic components, state management for interactive 
      seat selection, and smooth transitions for a delightful user experience. The design emphasizes clarity, 
      accessibility, and ease of navigation — making the booking process fast and stress-free on any device.
    </p>

    <a href="https://ticketappreact.vercel.app/">
      <button
        className="text-sm font-medium cursor-pointer border border-[#0EA5E9] py-2 px-4 rounded-lg transition-all duration-700 hover:scale-105 active:scale-95 hover:bg-[#0EA5E9]"
      >
        VIEW DEMO
      </button>
    </a>
  </div>

  {/* Image Section */}
  <div>
    <img
      src="./ticketa.png"
      alt="Ticket App Preview"
      className="h-auto rounded-lg shadow-lg hover:scale-105 transition duration-300"
    />
  </div>

</motion.div>

</div>
    </motion.section>
    )
}

export default Projects;