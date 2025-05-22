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
  pooja: Product[];
  single: Product | null;
  sub: Product[];
} = {
  data: null,
  loading: false,
  all: [],
  grocery: [],
  cosmetics: [],
  stationary: [],
  pooja: [],
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

const fetchAllCollections = createAsyncThunk(
  "/api/products/all-collections",
  async (_, _thunkAPI) => {
    try {
      const collections = ["grocery", "cosmetics", "stationary", "pooja"];
      const promises = collections.map(collection => 
        axios.get(`/api/products/${collection}`)
      );
      const results = await Promise.all(promises);
      
      const data = {
        grocery: results[0].data,
        cosmetics: results[1].data,
        stationary: results[2].data,
        pooja: results[3].data
      };
      
      return data;
    } catch (error: any) {
      console.log("Error fetching all collections:", error);
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
    builder.addCase(fetchAllCollections.pending, (state: typeof initialState) => {
      state.loading = true;
    });
    builder.addCase(fetchAllCollections.fulfilled, (state: typeof initialState, action: { payload: { grocery: Product[], cosmetics: Product[], stationary: Product[], pooja: Product[] } }) => {
      state.loading = false;
      state.grocery = action.payload.grocery;
      state.cosmetics = action.payload.cosmetics;
      state.stationary = action.payload.stationary;
      state.pooja = action.payload.pooja;
    });
    builder.addCase(fetchAllCollections.rejected, (state: typeof initialState) => {
      state.loading = false;
    });
  },
});
export { getProduct, fetchAllProducts, fetchProductsFrom, fetchProductsInitial, fetchAllCollections };
export default productSlice.reducer;
