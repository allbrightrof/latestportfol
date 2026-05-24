import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Hero(){
   return(
    <section className="bg-[#010514] text-white flex justify-between px-6">
        <div className="max-w-[80%] mx-auto space-y-8">
    <h4 className="text-3xl md:text-2xl font-bold">
  💻 Full Stack Developer
</h4>

<p className="text-[#0EA5E9] text-lg md:text-xl font-medium">
  📍 Nigeria — Building and Securing the Web
</p>

<p className="text-gray-300 leading-relaxed text-sm md:text-base">
  Web Developer focused on building modern, responsive, and user-friendly web applications using HTML, CSS, JavaScript, TypeScript, React, Bootstrap, Node.js, Express, MongoDB, and WordPress.
  
  <br />
  <br />

  I enjoy working across both frontend and backend development while continuously improving my problem-solving skills through Data Structures & Algorithms practice on freeCodeCamp and LeetCode.

  <br />
  <br />

  Beyond development, I’m deeply interested in Cybersecurity and secure engineering practices, with the goal of building impactful digital products that solve real-world problems.

  <br />
  <br />

  Driven by creativity, consistency, and continuous learning.
</p>
   <ul className="flex gap-6 mt-6 max-w-7xl mx-auto">
  <li>
    <a href="https://github.com/allbrightrof" target="_blank" className="text-white hover:text-gray-400 transition">
      <FontAwesomeIcon icon={faGithub} />
  Git Hub  </a>
  </li>

  <li>
    <a href="https://x.com/allbright016?s=21" target="_blank" className="text-white hover:text-gray-400 transition">
      <FontAwesomeIcon icon={faXTwitter} />
    Formerly Twitter  </a>
  </li>

  <li>
    <a href="https://www.linkedin.com/in/rofiq-afolabi-760364271" target="_blank" className="text-white hover:text-gray-400 transition">
      <FontAwesomeIcon icon={faLinkedin} className="text-[#1f61c4]" />
    Linkedin  </a>
  </li>
  <li>
  <a
    href="rofiqvincas@gmail.com"
    target="_blank"
    className="text-white hover:text-gray-400 transition"
  >
    <FontAwesomeIcon icon={faEnvelope} />
   Gmail </a>
</li>

</ul>
<h2>Work Experience</h2>
<p className="text-gray-300">Mediplus medical site & Ticketing Projects</p>
<ul className=" list-disc text-sm md:text-base text-gray-300 leading-relaxed">
   <li>Migrated frontend codebase from Create React App (CRA) to Vite to improve build speed and performance.</li>
   <li>Developed and redesigned landing pages, user dashboards, and health-related interfaces using React + Tailwind CSS.</li>
   <li>Built interactive components, including chatbots, API-driven dashboards, and ticket booking systems.</li>
   <li>Designed role-based admin dashboards to manage user access, content, and bookings.</li>
   <li>Implemented UI/UX improvements for accessibility, usability, and responsive design.</li>
   <li>Suggested and applied security-aware development practices aligned with cybersecurity standards</li>
   <li>Collaborated in an Agile environment using Git/GitHub for version control and project management.</li>
</ul>

<h2>Freelance</h2>
<p className="text-gray-300">Frontend Developer (October 2024 – September 2025)</p>
<ul className=" list-disc text-sm md:text-base text-gray-300 leading-relaxed">
   <li>Developed Mediplus (2024), a healthcare web app; Ticket Booking App (2025); a Jewelry e-commerce website;
       and the Silex Car project, along with other custom web apps/business websites using React, JavaScript, and Tailwind CSS.</li>
   <li>Translated client requirements into responsive, interactive product experiences</li>
   <li>Optimized websites and apps for fast load times, mobile-first design, and SEO.</li>
   <li>Integrated features including forms, authentication flows, dashboards, booking systems, and navigation menus.</li>
   <li>Managed deployments and continuous updates based on client feedback.</li>
   <li>Maintained strong communication and time management with a client-focused approach.</li>
</ul>
        </div>

    </section>
   )
}
export default Hero;
