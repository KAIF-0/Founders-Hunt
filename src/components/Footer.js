import React from "react";
import SubscriptionBanner from "./SubscriptionBanner";

const Footer = () => {
  return (
    <footer className="text-gray-300 w-full mt-5">
      <div className="mx-auto">
        <div className="flex flex-col justify-between items-center">

        <div className="w-[97%] my-7">
        <SubscriptionBanner/>
        </div>

          <div className="bg-[#202020] bg-opacity-90 flex flex-col md:flex-row justify-between items-center px-6 py-3 rounded-t-3xl w-full space-y-6 md:space-y-0">
            {/* Company Info Section */}
            <div className="text-center md:text-left md:w-1/2">
              <h3 className="text-xl font-bold text-white">Founders Hunt</h3>
              <p className="text-sm text-gray-300 mt-2">
                Some very detailed description about the Founders Hunt company
                which is going to be sitting wrote here. I am writing to have
                some content filled here so it looks good.
              </p>
              <div className="mt-4 flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-sm text-gray-400 hover:underline">
                  FAQ
                </a>
                <a href="#" className="text-sm text-gray-400 hover:underline">
                  Terms
                </a>
                <a href="#" className="text-sm text-gray-400 hover:underline">
                  Privacy
                </a>
                <a href="#" className="text-sm text-gray-400 hover:underline">
                  Policy
                </a>
              </div>
            </div>

            {/* Products Section */}
            <div className="text-center md:text-center md:w-1/2">
              <h3 className="text-xl font-bold text-white">Products</h3>
              <ul className="mt-2 space-y-2 text-gray-300">
                <li>Product 1</li>
                <li>Product 2</li>
                <li>Product 3</li>
                <li>Product 4</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
