export const dynamic = 'force-dynamic' //
import { getPastOrders } from "@/db/firebase";

export async function GET() {
    const res = await getPastOrders() 
    return Response.json(res)
}