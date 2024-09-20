import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* About Section */}
        <div>
          <h3 className="font-semibold mb-4 text-white">About</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-100">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-100">
                Shop
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-100">
                Our story
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-100">
                Blogs
              </Link>
            </li>
          </ul>
          <div className="mt-4">
            <button className="bg-gray-800 text-gray-400 py-2 px-4 rounded">
              English
            </button>
          </div>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Help</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-100">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-100">
                Track Order
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-100">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Contact</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-light">Phone:</span> (+1) 123 456 7893
            </li>
            <li>
              <span className="font-light">Email:</span> name@email.com
            </li>
          </ul>
        </div>

        {/* Subscription and Social Links Section */}
        <div>
          <h3 className="font-semibold mb-4 text-white">
            Receive new promotions
          </h3>
          <p className="mb-4">Duis ea tempor commodo amet reprehenderit</p>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Input your email"
              className="py-2 px-3 w-full bg-gray-800 border border-gray-700 text-gray-400 rounded focus:outline-none"
            />
            <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-400">
              Subscribe
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="mt-6 flex space-x-4 text-2xl">
            <a href="#" className="text-blue-500 hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-300">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-red-600 hover:text-red-500">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-500 text-sm">
        &copy; 2022 Brand, Inc. &nbsp; • &nbsp; Privacy &nbsp; • &nbsp; Terms
        &nbsp; • &nbsp; Sitemap
      </div>
    </footer>
  );
};

export default Footer;
