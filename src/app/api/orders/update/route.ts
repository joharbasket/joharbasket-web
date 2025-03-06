export const dynamic = "force-dynamic"; //
import { updateOrder } from "@/db/firebase";

export async function PATCH(req: Request) {
  const body = await req.json();
  const id = body.orderId as string;
  const updateType = body.updateType as string;
  const additionalInfo = body.additionalInfo as string;
  // console.log(id, updateType, additionalInfo);


  // const res = await updateOrder(id, updateType, additionalInfo);
  return Response.json({ res:"" });
}
