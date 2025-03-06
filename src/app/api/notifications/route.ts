import { getNotification } from "@/db/firebase";
import { NextRequest } from "next/server";

export async function GET(req : NextRequest) {
    const res = await getNotification();
    return Response.json(res);
}