import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { Product } from "@/lib/types";
const initialState: {
  data: Product | null;
  loading: boolean;
  all: Product[];
  grocery: Product[];
  cosmetics: Product[];
  stationary: Product[];
  single: Product | null;
  sub: Product[];
} = {
  data: null,
  loading: false,
  all: [],
  grocery: [],
  cosmetics: [],
  stationary: [],
  single: null,
  sub: [],
};

const getProduct = createAsyncThunk(
  "/api/products",
  async (arg: { id: string; collection: string }, _thunkAPI: any) => {
    try {
      const data = (
        await axios.get(`/api/products/${arg.collection}/${arg.id}`)
      ).data;
      return data;
    } catch (error: any) {
      console.log("Errorsss");
      _thunkAPI.rejectWithValue(error);
    }
  }
);

const fetchAllProducts = createAsyncThunk(
  "/api/products/all",
  async (_, _thunkAPI: any) => {
    try {
      const data = (await axios.get("/api/products")).data;
      return data;
    } catch (error: any) {
      console.log("Errorsss");
      _thunkAPI.rejectWithValue(error);
    }
  }
);

const fetchProductsFrom = createAsyncThunk(
  "/api/products/sub",
  async (sub : string, _thunkAPI) => {
    
    try {
      const data = (await axios.get(`/api/products/${sub}`)).data;
      return data;
    } catch (error: any) {
      console.log("Errorsss");
      _thunkAPI.rejectWithValue(error);
    }
  }
);
const fetchProductsInitial = createAsyncThunk(
  "/api/products/init",
  async (sub : string, _thunkAPI) => {
    
    try {
      const data = (await axios.get(`/api/products/${sub}`,{
        params : {
          limit : 10
        }
      })).data;
      return data;
    } catch (error: any) {
      console.log("Errorsss");
      _thunkAPI.rejectWithValue(error);
    }
  }
);


export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(getProduct.fulfilled, (state: any, action: any) => {
      state.loading = false;
      if (action.payload) {
        state.data = action.payload;
        state.single = action.payload;
      }
    });
    builder.addCase(getProduct.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(getProduct.rejected, (state: any, action: any) => {
      state.loading = false;
      console.log(action.error.message);
    });
    builder.addCase(fetchAllProducts.fulfilled, (state: any, action: any) => {
      state.loading = false;
      if (action.payload) {
        state.all = action.payload;
      }
    });
    builder.addCase(fetchAllProducts.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProducts.rejected, (state: any, action: any) => {
      state.loading = false;
      console.log(action.error.message);
    });
    builder.addCase(fetchProductsInitial.fulfilled, (state: any, action: any) => {
      state.loading = false;
      if (action.payload) {
        state.sub = action.payload;
      }
    });
    builder.addCase(fetchProductsInitial.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(fetchProductsInitial.rejected, (state: any, action: any) => {
      state.loading = false;
      console.log(action.error.message);
    });
    builder.addCase(fetchProductsFrom.fulfilled, (state: any, action: any) => {
      state.loading = false;
      if (action.payload) {
        state.sub = action.payload;
      }
    });
    builder.addCase(fetchProductsFrom.rejected, (state: any, action: any) => {
      console.log(action.error.message);
    });
  },
});
export { getProduct, fetchProductsFrom, fetchProductsInitial };
export default productSlice.reducer;
