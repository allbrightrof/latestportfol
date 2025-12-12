import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaWordpress, FaGithub, FaNode 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiFigma, SiApollographql, SiNextdotjs 
} from "react-icons/si";
import { motion } from "framer-motion";

function Skills() {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <div className="text-white max-w-7xl mx-auto space-y-5">
      <h2 className="text-lg font-semibold text-center py-8 px-8">Skills Stack</h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* HTML */}
        <motion.div variants={cardVariants} className="flex flex-col p-4 bg-[#202022] border border-[#0EA5E9] rounded-xl hover:scale-105 transition duration-300">
          <FaHtml5 className="text-[#e65127] text-4xl mb-2" />
          <h3 className="text-white font-semibold mb-1">HTML5</h3>
          <p className="text-gray-300 text-sm">Semantic and structured content.</p>
        </motion.div>

        {/* CSS */}
        <motion.div variants={cardVariants} className="flex flex-col p-4 bg-[#202022] border border-[#0EA5E9] rounded-xl hover:scale-105 transition duration-300">
          <FaCss3Alt className="text-blue-500 text-4xl mb-2" />
          <h3 className="text-white font-semibold mb-1">CSS3</h3>
          <p className="text-gray-300 text-sm">Modern layouts with Flexbox & Grid.</p>
        </motion.div>

        {/* JavaScript */}
        <motion.div variants={cardVariants} className="flex flex-col p-4 bg-[#202022] border border-[#0EA5E9] rounded-xl hover:scale-105 transition duration-300">
          <FaJs className="text-yellow-400 text-4xl mb-2" />
          <h3 className="text-white font-semibold mb-1">JavaScript</h3>
          <p className="text-gray-300 text-sm">Interactive and dynamic web pages.</p>
        </motion.div>

        {/* React */}
        <motion.div variants={cardVariants} className="flex flex-col p-4 bg-[#202022] border border-[#0EA5E9] rounded-xl hover:scale-105 transition duration-300">
          <FaReact className="text-[#61DBFB] text-4xl mb-2" />
          <h3 className="text-white font-semibold mb-1">React</h3>
          <p className="text-gray-300 text-sm">Component-based UI development.</p>
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div variants={cardVariants} className="p-5 bg-[#202022] border border-[#0EA5E9] rounded-xl hover:scale-105 transition duration-300">
          <SiTailwindcss className="text-[#38BDF8] text-4xl mb-2" />
          <h3 className="text-white font-semibold mb-1">Tailwind CSS</h3>
          <p className="text-gray-300 text-sm">Utility-first responsive styling.</p>
        </motion.div>

        {/* Bootstrap */}
        <motion.div variants={cardVariants} className="p-5 bg-[#202022] border border-[#0EA5E9] rounded-xl hover:scale-105 transition duration-300">
          <FaBootstrap className="text-purple-500 text-4xl mb-2" />
          <h3 className="text-white font-semibold mb-1">Bootstrap</h3>
          <p className="text-gray-300 text-sm">Fast layout with prebuilt components.</p>
        </motion.div>

        {/* WordPress */}
        <motion.div variants={cardVariants} className="p-5 bg-[#202022] border border-[#0EA5E9] rounded-xl hover:scale-105 transition duration-300">
          <FaWordpress className="text-blue-300 text-4xl mb-2" />
          <h3 className="text-white font-semibold mb-1">WordPress</h3>
          <p className="text-gray-300 text-sm">Building websites with themes & plugins.</p>
        </motion.div>

        {/* Git & GitHub */}
        <motion.div variants={cardVariants} className="p-5 bg-[#202022] border border-[#0EA5E9] rounded-xl hover:scale-105 transition duration-300">
          <FaGithub className="text-white text-4xl mb-2" />
          <h3 className="text-white font-semibold mb-1">Git & GitHub</h3>
          <p className="text-gray-300 text-sm">Version control & collaboration.</p>
        </motion.div>

        {/* Next.js */}
        <motion.div variants={cardVariants} className="flex flex-col p-5 bg-[#202022] border border-[#0EA5E9] rounded-xl hover:scale-105 transition duration-300">
          <SiNextdotjs className="text-white text-4xl mb-2" />
          <h3 className="text-white font-semibold mb-1">Next.js</h3>
          <p className="text-gray-300 text-sm">Building performant, SEO-friendly React applications.</p>
        </motion.div>

        {/* Figma */}
        <motion.div variants={cardVariants} className="p-5 bg-[#202022] border border-[#0EA5E9] rounded-xl hover:scale-105 transition duration-300">
          <SiFigma className="text-pink-500 text-4xl mb-2" />
          <h3 className="text-white font-semibold mb-1">Figma</h3>
          <p className="text-gray-300 text-sm">UI/UX design to code workflow.</p>
        </motion.div>

        {/* Node.js */}
        <motion.div variants={cardVariants} className="p-5 bg-[#202022] border border-[#0EA5E9] rounded-xl hover:scale-105 transition duration-300">
          <FaNode className="text-green-500 text-4xl mb-2" />
          <h3 className="text-white font-semibold mb-1">Node.js</h3>
          <p className="text-gray-300 text-sm">Server-side JavaScript & APIs.</p>
        </motion.div>

        {/* API Integration */}
        <motion.div variants={cardVariants} className="p-5 bg-[#202022] border border-[#0EA5E9] rounded-xl hover:scale-105 transition duration-300">
          <SiApollographql className="text-purple-400 text-4xl mb-2" />
          <h3 className="text-white font-semibold mb-1">API Integration</h3>
          <p className="text-gray-300 text-sm">Fetching and connecting data sources.</p>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default Skills;
