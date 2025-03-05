import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1D3557] text-white py-8">
      <div className="container max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Vertical Heights Ltd</h3>
            <p className="text-gray-300">
              Maruti Heights, Langata Link Road, Office 5A
            </p>
            <p className="text-gray-300">Nairobi, Kenya</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300">Phone: +254 727 070186</p>
            <p className="text-gray-300">Email: sales@verticaltechniques.co.ke</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <p className="text-gray-300">
              &copy; {new Date().getFullYear()} Vertical Heights Ltd
            </p>
            <p className="text-gray-300">All rights reserved.</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Vertical Techniques™ is a registered trademark of Vertical Heights Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;