import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaHandHoldingHeart } from "react-icons/fa";

const Policies: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 md:gap-12 text-center justify-between py-12 sm:py-16 px-4 text-gray-700">
      {/* Policy 1 */}
      <div className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out">
        <MdDeliveryDining size={40} className="text-orange-500 mb-2" />
        <p className="font-semibold text-base md:text-lg">Fast Delivery Service</p>
        <p className="text-gray-500 text-sm md:text-base">
          We ensure quick and reliable delivery
        </p>
      </div>

      {/* Policy 2 */}
      <div className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out">
        <FaHandHoldingHeart size={40} className="text-green-500 mb-2" />
        <p className="font-semibold text-base md:text-lg">Quality Products</p>
        <p className="text-gray-500 text-sm md:text-base">
          We offer premium quality products
        </p>
      </div>

      {/* Policy 3 */}
      <div className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out">
        <RiCustomerService2Line size={40} className="text-blue-500 mb-2" />
        <p className="font-semibold text-base md:text-lg">Best Customer Support</p>
        <p className="text-gray-500 text-sm md:text-base">
          We offer 24/7 customer support
        </p>
      </div>
    </div>
  );
};

export default Policies;
