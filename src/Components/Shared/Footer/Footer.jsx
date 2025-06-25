import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="  py-10 shadow-inner mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About HobbyNest */}
        <div>
          <h2 className="text-xl font-bold text-[#64aab4] mb-3">HobbyNest</h2>
          <p className="text-sm">
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
            <a href="/groups" className="hover:text-[#64aab4] transition">
              Groups
            </a>
            <a href="/explore" className="hover:text-[#64aab4] transition">
              Explore
            </a>
            <a href="/about" className="hover:text-[#64aab4] transition">
              About Us
            </a>
          </nav>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
             
              <FaYoutube  className="w-6 h-6"/>
            </a>
            <a
              href="https://facebook.com"
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
