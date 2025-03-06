export const dynamic = 'force-dynamic' //
import { getData } from "@/db/firebase";

export async function GET() {
    const res = await getData() 
    return Response.json(res)
}