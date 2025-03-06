//app/api/products/[[...slug]]/route.ts

import {
  addProduct,
  getAllDocsFrom,
  getDocWithIdFromCollection,
  getProductCollection,
  updateDoc,
  deleteProduct,
} from "@/db/firebase";

import { NextRequest, NextResponse } from "next/server";
type Context = {
  params: {
    slug: string[];
  };
};
export async function GET(req: NextRequest, { params }: Context) {
  const { slug } = params;
  if (slug?.length === 1) {
    try {
      const limit = parseInt(req.nextUrl.searchParams.get("limit")!);
      const res = await getAllDocsFrom(slug[0], limit);
      return NextResponse.json(res, { status: 200 });
    } catch (error) {
      console.log(error)
      return Response.json({ message: "somthing went worng" }, { status: 500 });
    }
  } else if (slug?.length === 2) {
    const res = await getDocWithIdFromCollection(slug[1], slug[0]);
    return NextResponse.json(res, { status: 200 });
  } else {
    return Response.json({ message: "Not allowed" }, { status: 405 });
  }
}

export async function POST(req: NextRequest, { params }: Context) {
  try {
    const data = await req.formData();
    
    // Validate required fields
    const requiredFields = ["name", "price", "inStock", "collection", "category", "subCategory"];
    for (const field of requiredFields) {
      if (!data.get(field)) {
        return NextResponse.json(
          { message: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const res = await addProduct(data);
    
    if (!res) {
      throw new Error("Failed to add product");
    }

    return NextResponse.json({ data: res }, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/products:", error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Failed to add product" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest, { params }: Context) {
  const { slug } = params;
  if (slug?.length === 2) {
    try {
      const collection = slug[0];
      const productId = slug[1];
      const data = await request.formData();
      await updateDoc(collection, productId, data);
      return Response.json({ message: "Product updated/moved successfully" });
    } catch (error) {
      console.log(error);
      return Response.json({ message: "Failed to update/move product" }, { status: 500 });
    }
  }
  return Response.json({ message: "Invalid request" }, { status: 400 });
}


export async function DELETE(request: NextRequest, { params }: Context) {
  const slug = params.slug;
  if (slug?.length === 2) {
    const collection = slug[0];
    const productId = slug[1];
    try {
      const res = await deleteProduct(collection, productId);
      return Response.json({ message: "ok", res });
    } catch (error) {}
  }
  return Response.json({ message: "ok" });
}

// import { NextRequest, NextResponse } from "next/server";
// import { getStringBetween } from "@/lib/utils";
// import { addProduct, getAllProduct } from "@/db/firebase";

// export async function GET(request: NextRequest, response: NextResponse) {
//   const res = await getAllProduct()

//   return Response.json({ res });
// }
// export async function POST(request: NextRequest, params  :any) {
//   try {

//     const data = await request.formData();

//     const res = await addProduct(data);
//     return Response.json({ message: "ok", res });
//   } catch (error) {
//     // console.log(error);
//     return Response.json(params);
//   }

//__=====================================================================================

/*
  export const dynamic = 'force-dynamic';
import { deleteProduct, getDocWithId } from "@/db/firebase";
import { NextRequest, NextResponse } from "next/server";
import { getStringBetween } from "@/lib/utils";
type Context = {
  params: {
    productId: string;
  };
};

interface FormInput {
  name: string;
  description: string;
  file?: FileList;
  inStock: number;
  price: number;
  discountedPrice: number;
  isFeatured: boolean;
}
export type { FormInput };
import { updateDoc } from "@/db/firebase";
export async function GET(request: NextRequest, context: Context) {
  const res = await getDocWithId(context.params.productId);
  return Response.json(res[0]);
}

*/
