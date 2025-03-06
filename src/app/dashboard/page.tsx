//dashboard/page.tsx


import Banners from "@/components/Dashboard/Banners";
//import Categories from "@/components/Dashboard/Categories";
import Coupon from "@/components/Dashboard/Coupons/Coupon";
import Greetings from "@/components/Dashboard/Greetings";
//import OrderStats from "@/components/Dashboard/OrderStats";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center gap-5 my-5 mx-10 ">
      <Greetings />
      {/* <OrderStats /> */}
      {/* <Categories /> */}
      <Banners />
      <Coupon/>
    </div>
  )
}
