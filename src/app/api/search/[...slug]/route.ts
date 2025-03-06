export async function GET(request : any, params:any) {
  
    // response.end(`Post: ${slug}`)
//   const res = await getAllProduct()



  return Response.json(params);
}