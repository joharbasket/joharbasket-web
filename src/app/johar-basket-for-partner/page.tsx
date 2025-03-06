import React from 'react'
import { Mail, Phone, MapPin } from "lucide-react";



const page = () => {
  return (
    <div className='font-Atkinson'>
      {/* Delivery Partner Section */}
      <section className="bg-black text-white py-16 px-6 w-full flex flex-col md:flex-row items-start justify-between mt-20">
        {/* Left Section - Heading */}
        <div className="md:w-1/2 pt-10 flex flex-col items-center">
          <h2 className=" text-3xl lg:text-4xl font-bold leading-tight text-center">
            Join Our Delivery Partner <br /> Program
          </h2>
          <button className='bg-orange-500 px-8 py-2 text-2xl hover:bg-white hover:text-orange-500 hover:border-solid hover:border-orange-500 transition mt-6'>
            Download the Delivery <br /> Partner App
          </button>
        </div>

        {/* Right Section - Description */}
        <div className="md:w-1/2 mt-6 md:mt-0 pt-10">
          <p className="text-gray-300 text-lg text-justify">
            Become a part of Johar Basket’s dynamic delivery team and enjoy the benefits of flexible work hours, competitive earning potential, and attractive incentives. Our partners are crucial in ensuring fast and reliable service to our customers.
          </p>

          {/* Benefits Section */}
          <div className="flex flex-col md:flex-row gap-8 mt-6">
            
            {/* Earning Potential */}
            <div>
              <h3 className="text-2xl font-bold text-center md:text-start">Earning Potential</h3>
              <p className="text-gray-400 text-center md:text-start">Maximize your income with competitive rates and bonuses.</p>
            </div>

            {/* Flexible Hours */}
            <div>
              <h3 className="text-2xl font-bold text-center md:text-start">Flexible Hours</h3>
              <p className="text-gray-400 text-center md:text-start">Work at your convenience with our adaptable schedules.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full flex flex-col items-center text-center py-16 px-2 lg:px-6 mt-20">
        <h4 className="text-black uppercase tracking-widest text-lg">GET IN TOUCH</h4>
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
          {/* <div className="flex flex-col items-center">
            <Phone className="text-teal-700 w-10 h-10" />
            <h3 className="font-bold text-lg mt-3">Call Us</h3>
            <p className="text-gray-800 mt-1">Need immediate assistance? Call us at</p>
            <p className="font-bold text-black">+91 98765 43210</p>
          </div> */}

          {/* Visit */}
          <div className="flex flex-col items-center">
            <MapPin className="text-teal-700 w-10 h-10" />
            <h3 className="font-bold text-lg mt-3">Visit Us</h3>
            <p className="text-gray-800 mt-1">You can find us at</p>
            <p className="font-bold text-black">Main Road, Ramgarh, 829122, India.</p>
          </div>

        </div>
      </section>
    </div>
  )
}

export default page
