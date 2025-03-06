"use server";
import { changeOrder, getBanner, getOrdersFromDb, sendPushMessage, getAllCoupons, addNewCoupon, deleteCoupon} from "@/db/firebase";
import { deleteBanner } from "@/db/firebase"
import { Position } from "@/lib/constants";
export const deleteBannerAction = async (index: number) => {
    try {

        await deleteBanner(index);
        return {
            success: true,
            message: "Banner Deleted!"
        };
    } catch (error) {
        return {
            message: "Somthing went wrong!",
            success: false
        };
    }

    // return "message";
}

export const getBannersAction = async () => {
    const data = await getBanner();
    return data;
}

export const changeOrderAction = async (index: number, position: Position) => {
    try {
        await changeOrder(index, position);
        return {
            success: true,
            message: "Position Changed!"
        }

    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Something went wrong!"
        }
    }

}

export const sendPushMessageAction =
    (userId: string, title: string, body: string) => {
        try {
            sendPushMessage(userId, title, body);
            console.log("Done")
        } catch (error) {
            console.log(error);
        }

    }
type OrderType = "newOrders" | "pastOrders";
export const getOrdersAction = async (orderType: OrderType) => {
    try {
        const res = await getOrdersFromDb(orderType);
        return res;
    } catch (error) {
        console.log(error)
    }
}

export const getCoupons = async () => {
    try {
        const res = await getAllCoupons();
        return res;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const addCouponAction = async (data: any) => {
    try {
        await addNewCoupon(data);
    } catch (error) {
        console.log(error);
    }
}

export const deleteCouponAction = async (id: string) => {
    try {
        // console.log("Coupon code" , id)
        await deleteCoupon(id);
    } catch (error) {
        console.log(error);
    }
}

