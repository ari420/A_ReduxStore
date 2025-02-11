// Footer.tsx

import React from "react";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 ">
      <div className="container mx-auto px-6 md:px-12">
        {/* Footer Top Section with Logo, Description, and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-10">
          {/* Logo and Company Info */}
          <div className="text-center md:text-left">
            <figure className=" w-32 h-32 mb-4 ">
              <Image
                src="/myPhoto.jpg" // Replace this with your photo or logo path
                alt="Your Company Logo"
                className=" w-full h-full object-cover rounded-full mx-auto md:mx-0 mb-4"
                layout="reintrinsic"
                height={800}
                width={1200}
              />
            </figure>
            <p className="text-lg font-semibold">Ari Stodio</p>
            <p className="text-sm mt-2">
              Building amazing experiences for the web. We provide cutting-edge
              solutions to enhance your online presence.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-4 md:mt-0 *:text-[25px]">
            <a
              href="https://www.linkedin.com/in/arian-afsharian-7a3903156"
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>{" "}
              {/* Replace with actual icon */}
            </a>
            <a
              href="https://github.com/ari420"
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> {/* Replace with actual icon */}
            </a>
            <a
              href="https://www.instagram.com/component__shop?igsh=enRla3lxa3dzYXho"
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>{" "}
              {/* Replace with actual icon */}
            </a>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {/* Services Section */}
          <div>
            <p className="font-semibold mb-4">Our Services</p>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <p className="font-semibold mb-4">Quick Links</p>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <p className="font-semibold mb-4">Contact Us</p>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Email: ari.afsharian1@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Phone: +98-9389149539
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Address: Ari studio - Tehran
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup Section */}
          <div>
            <p className="font-semibold mb-4">Subscribe to Our Newsletter</p>
            <p className="text-sm mb-4">
              Stay updated with our latest news and offers. We promise not to
              spam you!
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md text-gray-700 focus:outline-none w-full"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t pt-6 text-center text-xs text-gray-400">
          <p>&copy; 2025 YourCompany. All rights reserved.</p>
          <p>Built with ♥ using Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;