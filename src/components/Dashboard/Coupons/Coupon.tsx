import { getCoupons } from "@/app/actions"
import CouponAcc from "./CouponAcc";
import AddNewCoupon from "./AddNewCoupon";


export default async function Coupon() {
  const coupons = await getCoupons();

  return (
    <div className="bg-white rounded-md shadow-md shadow-slate-900 p-4">
      <h2 className="text-5xl font-bold">Coupons Section</h2>
      {/* <h3 className="text-3xl font-bold">Existing Coupons</h3> */}
      <div className="flex mt-10 ">

        <CouponAcc data={coupons} />
        <AddNewCoupon />
      </div>
    </div>
  )
}
