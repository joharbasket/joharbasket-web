import { format } from "date-fns";
import type { Product } from "./types";
import jsPDF from "jspdf";
import axios from "axios";
import { Order } from "./features/orders/orderSlice";
export function getStringBetween(str: string | null): string[] {
  const result = str!.split(/[//]/);
  return result;
}
export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const searchRegEx = (word: string, arr: Product[]) => {
  const regex = new RegExp(word, "gi");
  const filteredArr = arr.filter((item) => regex.test(item.name));
  return filteredArr;
};
export const searchOrder = (word: string, arr: Order[]) => {
  const regex = new RegExp(word, "gi");

  const filteredArr = arr.filter((item) => {
    const orderId = item ? item.orderId : "";
    const name = item ? item.userName : "";
    return regex.test(orderId) || regex.test(name);
  });
  return filteredArr;
};
const createHeaders = (keys: any) => {
  var result = [];
  for (var i = 0; i < keys.length; i += 1) {
    result.push({
      id: keys[i],
      name: keys[i],
      prompt: keys[i],
      width: 65,
      align: "center",
      padding: 0,
    });
  }
  return result;
};

const generateData = (products: any[], total: string) => {
  let result = [];
  const rupee: string = "\u20B9";
  for (var i = 0; i < products.length; i += 1) {
    const x = products[i];

    let data = {
      "Sl No.": (i + 1).toString(),
      Particular: x.name,
      "Rate    ": x.discountedPrice.toString(),
      Quantity: x.nos.toString(),
      Amount: (x.discountedPrice * x.nos).toString(),
    };
    result.push(data);
  }
  let data = {
    "Sl No.": "",
    Particular: "",
    "Rate    ": "",
    Quantity: "Total",
    Amount: total,
  };
  result.push(data);
  return result;
};

export async function genrateReceipt(orderId: string) {
  const data = await (await axios.get(`/api/orders/${orderId}`)).data;
  const productArr: any[] = data?.products;
  const amount = data?.orderDetails.amount as string;
  generateReceiptPDF(productArr, amount, orderId);
  // console.log(data, productArr, amount)
}

export function generateReceiptPDF(
  products: any[],
  amount: string,
  orderId: string
) {
  const appName = "Johar Basket";
  const ShopAddress = "Near Chhat Talab Phulsarai";
  const shopAddress = "Ramgarh - 829101(Jharkhand)";
  const shopMob = "+91 9431728628";
  const doc = new jsPDF({ putOnlyUsedFonts: true });

  const headers: any[] = createHeaders([
    "Sl No.",
    "Particular",
    "Rate    ",
    "Quantity",
    "Amount",
  ]);
  doc.text(appName, 10, 10);
  const ds = doc.getFontSize();
  doc.setFontSize(10);
  doc.text(ShopAddress, 10, 20);
  doc.text(shopAddress, 10, 25);
  doc.text(shopMob, 10, 30);
  doc.table(10, 35, generateData(products, amount), headers, {
    autoSize: true,
  });
  doc.save(orderId);
}

export const getMonthName = (month: number) => {
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthName[month];
};
export const generateOTP = (length: number) => {
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};