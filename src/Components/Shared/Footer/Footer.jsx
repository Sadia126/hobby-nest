import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from "../../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="  py-10 shadow-inner mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About HobbyNest */}
        <div>
           {/* Logo */}
                    <div className="flex items-center space-x-2">
                      <img className="w-24 h-16" src={logo} alt="logo" />
                    </div>
          <p className="text-sm mt-3">
            HobbyNest is your local hub to discover, join, or create hobby
            groups. Connect with like-minded people and grow your passions
            together.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigation</h3>
          <nav className="flex flex-col space-y-2">
            <a href="/" className="hover:text-[#64aab4] transition">
              Home
            </a>
            <a href="/allGroups" className="hover:text-[#64aab4] transition">
              Groups
            </a>
           
          </nav>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Sadia126/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              
              <FaGithub  className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/umme-sadia-sayti-35bb47362/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
             
              <FaLinkedin  className="w-6 h-6"/>
            </a>
            <a
              href="https://www.facebook.com/umme.sadia.sayti"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
            
              <FaFacebook className="w-6 h-6"/>
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm">Email: support@hobbynest.com</p>
          <p className="text-sm">Phone: +880 123 456 789</p>
          <p className="text-sm">Location: Chattogram, Bangladesh</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t mt-10 pt-5 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold text-[#64aab4]">HobbyNest</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
