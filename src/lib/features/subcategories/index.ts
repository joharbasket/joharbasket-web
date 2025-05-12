//lib/features/subcategories/index.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
type ProductSub = {
  name: string;
  image: string;
};
type InitialStateType = {
    cosmetics: ProductSub[];
    grocery: ProductSub[];
    pooja: ProductSub[];
    stationary: ProductSub[];
    notifications: Notification[];
    loading: boolean;
    error: string | null;
}
const initialState : InitialStateType= {
  notifications: [],
  cosmetics: [],
  grocery: [],
  pooja: [],
  stationary: [],
  loading: false,
  error: null,
};

const getSubcategories = createAsyncThunk(
  "/api/subcategories",
  async (sub: string, thunkAPI: any) => {
    try {
      const data = (await axios.get(`/api/subcategory/${sub}`)).data;
      return data;
    } catch (error: any) {
      console.log("Errorsss");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const subcategoriesSlice = createSlice({
  name: "Subcategories",
  initialState,
  reducers: {},
  extraReducers : (builder : any) =>{
    builder.addCase(getSubcategories.pending, (state : any) =>{
        state.loading = true;
        state.error = null;
    });
    builder.addCase(getSubcategories.fulfilled, (state : any, action : any)=>{
        const subcat = action.meta.arg;
        const data = action.payload.subcategories;
        state[subcat] = data;
        state.loading = false;
    });
    builder.addCase(getSubcategories.rejected, (state : any, action : any)=>{
        state.loading = false;
        state.error = action.payload;
        console.log(action);
    });
  }
 
});
export { getSubcategories };
// export const {  } = subcategoriesSlice.actions;
export default subcategoriesSlice.reducer;
/**
 * 
 *  extraReducers: (builder: any) => {
    builder.addCase(getSubcategories.fulfilled, (state: InitialStateType, action: any) => {
        console.log("in fullfilled")
        // console.log(action);
    //   state.loading = false;
    //   if (action.payload) {
    //     console.log(action.payload);
    //     state.notifications = action.payload;
    //   }
    });
    builder.addCase(getSubcategories.pending, (state: any) => {
        console.log("failed")
      state.loading = true;
    });
    builder.addCase(getSubcategories.rejected, (state: any, action: any) => {
        console.log("rejected")
      state.loading = false;
      console.log(action.error.message);
    });
  },
 */