import { useState } from "react";
function Contact(){
const [isOpen, setIsOpen] = useState(false);
const openModal = () => setIsOpen(true);
const closeModal = () => setIsOpen(false);

return(
    <section>
       <div className="text-center p-10 bg-[#202022] rounded-xl max-w-4xl mx-auto">
        <h2 className="text-gray-300 text-2xl font-bold mb-2">Let's build something great together</h2>
        <p className="text-gray-300 mb-4">
          Whether you're looking to collaborate on a project, need a developer for your team, or just want to chat about ideas — I'd love to hear from you. Let's connect and see what we can create!
        </p>
        <button className="bg-[#0EA5E9] text-white px-6 py-2 rounded-lg hover:bg-[#38bdf8]" onClick={openModal}>
          Connect With Me
        </button>
      </div>
          {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-[#202022] rounded-xl p-8 w-96 relative">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-white" onClick={closeModal}>X</button>
            <h3 className="text-xl font-bold mb-2">Contact Me</h3>
            <p className="text-gray-300 mb-4">
              Don't hesitate to reach out if you have something interesting or just want to say hi!
            </p>
            <div className="flex justify-around mt-4">
              <a href="https://wa.me/your-number" target="_blank" className="bg-green-500 p-3 rounded-full text-white">WhatsApp</a>
              <a href="https://discord.com/users/your-id" target="_blank" className="bg-indigo-600 p-3 rounded-full text-white">Discord</a>
              <a href="mailto:yourmail@gmail.com" className="bg-red-500 p-3 rounded-full text-white">Gmail</a>
              <a href="https://instagram.com/yourusername" target="_blank" className="bg-pink-500 p-3 rounded-full text-white">Instagram</a>
            </div>
          </div>
        </div>
      )}
      <footer className="py-10 text-center">
  <p className="text-gray-300 text-sm">
    Built by <span className="text-white font-semibold">Afolabi@allbright016</span> — 
    you can find me on{" "}
    <a 
      href="https://github.com/allbrightrof/"
      target="_blank"
      className="text-[#0EA5E9]"
    >
      GitHub
    </a>{" "}
    and{" "}
    <a 
      href="https://discord.com/"
      target="_blank"
      className="text-[#0EA5E9]"
    >
       x Twitter
    </a>, and don't forget to check out my{" "}
    <a 
      href="/resume.pdf"
      target="_blank"
      className="text-[#0EA5E9]"
    >
      Cv
    </a>
  </p>
</footer>

    </section>
)
}
export default Contact;