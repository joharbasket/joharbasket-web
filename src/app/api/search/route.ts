import { getAllProduct, searchProduct } from "@/db/firebase";
import { searchByName } from "@/db/firebase";
import { NextRequest } from "next/server";
// export const maxDuration = 10;

export async function GET(request: NextRequest) {
  const headers = request.headers;
  const name = headers.get("data") as string;
  const res = await getAllProduct();
  return Response.json({ message: "ok", res });
}
