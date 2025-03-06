export const dynamic = "force-dynamic"; //
import { acceptOrder, updateOrder, confirmOrder } from "@/db/firebase";
import { getData, getOrderWithId } from "@/db/firebase";
import { OrderAction } from "@/lib/constants";
import { generateOTP } from "@/lib/utils";
type Context = {
  params: {
    orderId: string;
  };
};
export async function GET(req: Request, context: Context) {
  const res = await getOrderWithId(context.params.orderId);
  return Response.json(res);
}

export async function PATCH(req: Request, context: Context) {
  const body = await req.json();
  const orderId = context.params.orderId;
  const updateType = body.updateType as OrderAction;
  const otp = body.otp as string;
  const date = body.date as string;
  const userId = body.userId as string;
  try {
    if (updateType == OrderAction.ACCEPT_ORDER) {
      const otp = generateOTP(6);
      const res = await acceptOrder(orderId, otp, date, userId);
      return Response.json({ res }, { status: 201 });
    } else if(updateType === OrderAction.CONFIRM_ORDER) {
      const res = await confirmOrder(userId, orderId, otp);
      return Response.json({ res }, { status: 201 });
    }
  } catch (error) {
    return Response.json({ res: "" }, { status: 500 });
  }
}
