import React from 'react'
import { Mail, Phone, MapPin } from "lucide-react";


const page = () => {
  return (
    <section className="w-full flex flex-col items-center text-center py-16 px-2 lg:px-6 mt-20">
      <h4 className="text-black uppercase tracking-widest text-lg">
        GET IN TOUCH
      </h4>
      <h2 className="text-3xl font-bold mt-2">We're Here to Help</h2>
      <p className="text-gray-800 text-lg max-w-2xl mt-2">
        For any inquiries or feedback, reach out to us anytime. Your satisfaction is our priority!
      </p>

      {/* Contact Methods */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-24 gap-10 md:gap-16 lg:gap-36">
        
        {/* Email */}
        <div className="flex flex-col items-center">
          <Mail className="text-teal-700 w-10 h-10" />
          <h3 className="font-bold text-lg mt-3">Email Us</h3>
          <p className="text-gray-800 mt-1">Have questions? Send us an email at</p>
          <a href="mailto:support@joharbasket.com" className="text-orange-500 font-medium">
            support@joharbasket.com
          </a>
        </div>

        {/* Call */}
        <div className="flex flex-col items-center">
          <Phone className="text-teal-700 w-10 h-10" />
          <h3 className="font-bold text-lg mt-3">Call Us</h3>
          <p className="text-gray-800 mt-1">Need immediate assistance? Call us at</p>
          <p className="font-bold text-black">+91 9258917455</p>
        </div>

        {/* Visit */}
        <div className="flex flex-col items-center">
          <MapPin className="text-teal-700 w-10 h-10" />
          <h3 className="font-bold text-lg mt-3">Visit Us</h3>
          <p className="text-gray-800 mt-1">You can find us at</p>
          <p className="font-bold text-black">Main Road, Ramgarh, 829122, India.</p>
        </div>

      </div>
    </section>
  )
}

export default page
