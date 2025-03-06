import React from 'react'
import Image from 'next/image'
import deliveryImg from "../../../public/wp-delivery-map.jpg"
import Link from 'next/link'
import TeamSection from '@/components/teamMembers'


const page = () => {
  return (
    <div className="mx-auto lg:max-w-7xl px-6 lg:px-6 py-16 mt-16">
      {/* Section: Our Commitment to the Community */}
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row gap-10">

          <div className='lg:mr-20'>
            <h2 className="lg:text-[40px] font-bold text-[30px] text-black text-nowrap mt-1">
              Our Commitment to the 
            </h2>
            <span className="text-orange-400 text-[30px] lg:text-[40px] font-bold -mt-8"> Community</span>
          </div>

          <p className="mt-4 lg:mx-5 text-gray-700 leading-relaxed text-justify">
            At Johar Basket, our mission is to provide a seamless and speedy
            delivery experience for essential products, enhancing the lives of
            our customers in Ramgarh. We believe in customer-centricity,
            innovation, and community engagement. Our values drive us to ensure
            that every order is delivered within 15 minutes, making life easier
            for our users. We are dedicated to supporting the local community
            by providing access to groceries, cosmetics, stationery, and Pooja
            items, all at their fingertips. Join us in our journey to transform
            the shopping experience in Ramgarh!
          </p>

        </div>
      </div>

      {/* Image Section */}
      <div className="mt-10 w-full">
        <Image
          src={deliveryImg} // Ensure this path matches your public folder or update accordingly
          alt="Community Commitment"
          width={1500}
          height={600}
          className=""
        />
      </div>

      {/* Our Team section */}
      <TeamSection />

      {/* Join Us Section */}
      <div className='mt-20'>
        <h1 className='text-4xl font-bold text-black font-Montserrat'>
          Join Us
        </h1>

        <p className='mt-4 text-gray-700 leading-relaxed mb-6'>
        Connect with our team to learn more about our mission.
        </p>

        <Link href={'/Contact-us'} className='text-orange-500 font-light bg-white border border-orange-500 px-4 py-2 rounded-sm hover:bg-orange-500 hover:text-white transition-all ease-in-out duration-500 hover:shadow-sm'>
          Learn More
        </Link>
      </div>

    </div>
  )
}

export default page
