import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1D3557] text-white pt-12 pb-6">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Vertical Techniques Ltd</h3>
            <p className="flex items-start gap-2 text-gray-300">
              <MapPin size={18} /> Maruti Heights, Langata Link Road, Office 5A, Nairobi
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="flex items-center gap-2 text-gray-300">
              <Phone size={18} /> +254 727 070186
            </p>
            <p className="flex items-center gap-2 text-gray-300">
              <Mail size={18} /> sales@verticaltechniques.co.ke
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <p className="text-gray-300">&copy; {new Date().getFullYear()} Vertical Techniques Ltd</p>
            <p className="text-gray-300">All rights reserved.</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          Vertical Techniques™ is a registered trademark of Vertical Techniques Ltd.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
