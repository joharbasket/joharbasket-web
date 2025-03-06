import { NextRequest } from "next/server";

export async function GET(request : NextRequest) {
    
  const data = {
    age: 61,
  };
  return Response.json(data);
}
