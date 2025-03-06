import {
  createAsyncThunk,
  createSlice,
  configureStore,
} from "@reduxjs/toolkit";
import axios from "axios";
import type { Product, OrderDetails } from "@/lib/types";
import { getOrdersAction } from "@/app/actions";

type Order = OrderDetails | null;
const api = process.env.NEXT_PUBLIC_FIREBASE_funapi;
interface InitialState {
  data: Order[];
  single: {
    products: Product[];
    orderDetails: Order;
  };
  loading: boolean;
  pastOrders: Order[];
}

const initialState: InitialState = {
  data: [],
  single: {
    products: [],
    orderDetails: null,
  },
  loading: false,
  pastOrders: [],
};

const getOrders = createAsyncThunk(
  "/api/orders",
  async (payload: any, { rejectWithValue }) => {
    try {
      const token = payload;
      const response = await axios.get(`${api}/orders/newOrders`, {
        headers: {
          Authorization: token,
        },
        params: {
          limit: 20, // Pagination example
          sort: "orderTime:desc", // Request backend-sorted data
        },
      });
      return response.data;
    } catch (error: any) {
      console.error("Error fetching orders:", error);
      return rejectWithValue(error.response?.data?.message || "Unknown error");
    }
  }
);

const getPastOrders = createAsyncThunk(
  "/api/orders/past",
  async (payload:any, _thunkAPI: any) => {

    try {
      // const data = (await axios.get(`/api/orders/past`)).data;
      const data = (await axios.get(`${api}/orders/pastOrders`, {
        headers: {
          Authorization: payload,
        },
      })).data;
      // const data = await getOrdersAction("pastOrders");
      return data;
    } catch (error: any) {
      console.log("Errorsss", error);
      _thunkAPI.rejectWithValue(error);
    }
  }
);

const getOrder = createAsyncThunk(
  "/api/orders/id",
  async (orderId: string, _thunkAPI: any) => {
    try {
      const data = (await axios.get(`/api/orders/${orderId}`)).data;
      return data;
    } catch (error: any) {
      console.log("Errorsss");
      _thunkAPI.rejectWithValue(error);
    }
  }
);

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    acceptOrder: (state, action) => {
      const orderId = action.payload;
      const arr = state.data;
      arr.forEach((a) => {
        if (a?.orderId === orderId) {
          a!.isAccepted = true;
        }
      });
      state.data = arr;
    },
    confirmOrder: (state, action) => {
      const orderId = action.payload;
      const arr = state.data;
      const res = arr.filter((o) => {
        o?.orderId != orderId;
      });
      state.data = res;
    },
    cancelOrder : (state, action) =>{
      const orderId = action.payload;
      const arr = state.data;
      const res = arr.filter((o)=>{
        o?.orderId != orderId;
      });
      state.data = res;

      const res2 = arr.filter((o)=>{
        o?.orderId == orderId;
      });
      state.pastOrders = res2;
      
    }
  },
  extraReducers: (builder: any) => {
    builder.addCase(getOrders.fulfilled, (state: any, action: any) => {
      state.loading = false;
      if (action.payload) {
        const order = action.payload;
        state.data = order;
        order.sort((a: OrderDetails, b: OrderDetails) => {
          const cond =
            new Date(b.orderTime).getTime() - new Date(a.orderTime).getTime();
          return cond;
        });
        state.data = order;
      }
    });
    builder.addCase(getOrders.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(getOrders.rejected, (state: any, action: any) => {
      state.loading = false;
      console.log("messge", action.error.message);
    });
    builder.addCase(getOrder.fulfilled, (state: any, action: any) => {
      state.loading = false;
      if (action.payload) state.single = action.payload;
    });
    builder.addCase(getOrder.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(getOrder.rejected, (state: any, action: any) => {
      state.loading = false;
      console.log("messge", action.error.message);
    });
    builder.addCase(getPastOrders.fulfilled, (state: any, action: any) => {
      state.loading = false;
      if (action.payload) state.pastOrders = action.payload;
      if (action.payload) {
        const order = action.payload;
        order.sort((a: OrderDetails, b: OrderDetails) => {
          const cond =
            new Date(b.orderTime).getTime() - new Date(a.orderTime).getTime();
          return cond;
        });
        state.pastOrders = order;
      }
    });
    builder.addCase(getPastOrders.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(getPastOrders.rejected, (state: any, action: any) => {
      state.loading = false;
      console.log("messge", action.error.message);
    });
  },
});
export { getOrders, getOrder, getPastOrders };
export const { acceptOrder, confirmOrder, cancelOrder } = orderSlice.actions;
export type { Order };
export default orderSlice.reducer;
