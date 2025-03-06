export type Product = {
  productId: string;
  size: string;
  imageUrl: string;
  name: string;
  gst: number;
  isFeatured: boolean;
  discountedPrice: number;
  price: number;
  description: string;
  inStock: number;
  nos?:number;
  subCategory?:string;
  category?:string;
   details: Product | OrderDetails;
  };

export type OrderDetails = {
  address: string;
  pincode: string;
  isAccepted: boolean;
  isDelivered: boolean;
  amount: string;
  mobileNumber: string;
  userName: string;
  payment: boolean;
  orderId: string;
  gst: string;
  time: string;
  userId : string;
  orderTime : Date;
  products?: Product[];
  orderAcceptTime? : Date;
  deliverTime? : Date;
};

export type Notification = {
  author: {
    email: string;
    name: string;
  };
  date: string;
  message: {
    body: string;
    title: string;
  };
};