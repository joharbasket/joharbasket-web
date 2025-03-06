"use client";
import Image from "next/image";
import { Check, Users, User, Download, Search, ShoppingCart, Truck, Mail, Phone, MapPin } from "lucide-react";
import HeroImg from "../../public/ut_design.png";
import PersonPlaceholder from "../../public/person-placeholder.png"

const Home: React.FC = () => {
  return (
    <div className="mt-10 lg:mt-0">
      {/* Hero Section */}
      <div className="flex h-screen flex-col lg:flex-row">
        {/* Left Section - Image */}
        <div className="w-full lg:w-2/3 relative h-[500px] lg:h-auto">
          <Image
            src={HeroImg}
            alt="Johar Basket App"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 bg-gradient-to-r from-pink-400 to-red-500 text-white">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 lg:mr-16">
            Experience <br /> <span className="underline font-extrabold">Lightning-Fast</span> Delivery
            <br />
            with Johar Basket
          </h1>
          <p className="text-base md:text-lg mb-6">
            Discover the convenience of ordering groceries, cosmetics, stationery, and Pooja items with Johar Basket. Enjoy a seamless shopping experience with delivery in just 15 minutes, right to your doorstep in Ramgarh, Jharkhand.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-black w-full sm:w-64 focus:outline-none"
            />
            <button className="bg-orange-500 px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
              Sign up
            </button>
          </div>

          <p className="text-sm mt-2 opacity-80 text-center sm:text-left">
            By signing up, you agree to our{" "}
            <a href="/Terms-and-conditions" className="underline text-black">Terms and Conditions</a> and{" "}
            <a href="/Privacy-policy" className="underline text-black">Privacy Policy</a>.
          </p>
        </div>
      </div>

      {/* About Johar Basket Section */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-5xl font-bold mb-4 font-Inconsolata">About Johar Basket</h2>
        <p className=" text-gray-600 mb-10 text-xl">Discover our mission to deliver essentials swiftly and conveniently to your doorstep.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <Check size={32} className="text-green-500 mb-2" />
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="text-gray-600">
            At Johar Basket, we strive to provide a seamless and speedy delivery experience for essential products, enhancing the lives of our customers in Ramgarh. Your convenience is our priority.            </p>
          </div>
          <div className="flex flex-col items-center">
            <Users size={32} className="text-green-500 mb-2" />
            <h3 className="text-xl font-semibold">Our Values</h3>
            <p className="text-gray-600">
            We are committed to customer-centricity, innovation, community engagement, and speed. These values guide our operations and ensure we meet your needs effectively.            </p>
          </div>
          <div className="flex flex-col items-center">
            <User size={32} className="text-green-500 mb-2" />
            <h3 className="text-xl font-semibold">Meet Our Team</h3>
            <p className="text-gray-600">
            Our dedicated team is here to serve you. Siddharth Nayak, our Founder and Aman Kumar, our Founder & CEO leads with a vision for innovation. Anushka Pathak, our CMO, drives our marketing efforts, while Arun Sahu, our Operations Manager, ensures timely deliveries.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <Download size={32} className="text-green-500 mb-2" />
            <h3 className="text-xl font-semibold">Download the App</h3>
            <p className="text-gray-600">Start by downloading the Johar Basket app. It’s quick and easy!</p>
          </div>
          <div className="flex flex-col items-center">
            <Search size={32} className="text-green-500 mb-2" />
            <h3 className="text-xl font-semibold">Browse Products</h3>
            <p className="text-gray-600">Explore groceries, cosmetics, stationery, and more.</p>
          </div>
          <div className="flex flex-col items-center">
            <ShoppingCart size={32} className="text-green-500 mb-2" />
            <h3 className="text-xl font-semibold">Place Your Order</h3>
            <p className="text-gray-600">Add items to your cart and proceed to checkout.</p>
          </div>
          <div className="flex flex-col items-center">
            <Truck size={32} className="text-green-500 mb-2" />
            <h3 className="text-xl font-semibold">Fast Delivery</h3>
            <p className="text-gray-600">Get delivery within 15 minutes in Ramgarh, Jharkhand.</p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Customer Testimonials</h2>
        <p className="text-lg text-gray-600 mb-10">
          Hear from our satisfied customers about their experiences with Johar Basket.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-Akaya italic">Happy Customer</h3>
            <p className="text-gray-600 mt-2">
              “I love how quickly I can get my groceries delivered! The app is so easy to use, and I always receive my items fresh and on time.”
            </p>
            <Image src={PersonPlaceholder} alt="Customer 1" width={80} height={80} className="rounded-full mt-10" />
            <p className="font-semibold mt-2">Rahul Sharma</p>
            <p className="text-sm text-gray-500">Customer, Johar Basket</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl  italic font-Leckerli">Satisfied User</h3>
            <p className="text-gray-600 mt-2">
              “Johar Basket has changed the way I shop for essentials. I can order everything I need in just a few taps!”
            </p>
            <Image src={PersonPlaceholder} alt="Customer 2" width={80} height={80} className="rounded-full mt-10" />
            <p className="font-semibold mt-2">Priya Verma</p>
            <p className="text-sm text-gray-500">Customer, Johar Basket</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl italic font-Akaya">Loyal Shopper</h3>
            <p className="text-gray-600 mt-2">
              “The delivery is always prompt, and the variety of products is impressive. Highly recommend!”
            </p>
            <Image src={PersonPlaceholder} alt="Customer 3" width={80} height={80} className="rounded-full mt-10" />
            <p className="font-semibold mt-2">Sunil Kumar</p>
            <p className="text-sm text-gray-500">Customer, Johar Basket</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">We&apos;re Here to Help</h2>
        <p className="text-lg text-gray-600 mb-6">
          For any inquiries or feedback, reach out to us anytime!
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <Mail className="text-green-500" size={20} />
            <span>support@joharbasket.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-green-500" size={20} />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-green-500" size={20} />
            <span>India, Ramgarh, Main Road, Ramgarh, 829122</span>
          </div>
        </div>

        {/* Embedded Google Maps */}
        <div className="w-full max-w-6xl mx-auto">
          <iframe
            className="w-full h-[450px] rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.712091356149!2d85.5148773752286!3d23.636678678739654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e3cdb08e4a4d%3A0x24e78f1b6bba98f8!2sRanchi%20-%20Ramgarh%20Rd%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1707849301234!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    </div>
  );
};

export default Home;
