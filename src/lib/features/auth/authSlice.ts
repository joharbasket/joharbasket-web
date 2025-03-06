import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { googleAuth, signout } from "@/db/firebaseAuth";
import axios from "axios";
const api = process.env.NEXT_PUBLIC_FIREBASE_funapi;
type InitialState = {
  user: {
    email: string;
    emailVerified: boolean;
    displayName: string;
    phoneNumber: string;
    photoURL: string;
    uid: string;
    token? : string;
    isAdmin?: boolean;
  } | null;
  loading: boolean;
};
const initialState: InitialState = {
  user: null,
  loading: false,
};

const gLogin = createAsyncThunk("/user/login", async (_, thunkAPI) => {
  try {
    const user = await googleAuth();
    
    const userToken = (await axios.get(`${api}/auth`, {
      params:{
        email : user.email,
      }
    })).data;
    const isAdmin = userToken.isAdmin;
    const token = userToken.token;
    const data = {...user, isAdmin, token};
    return data;
  } catch (error: any) {
    ("Errorsss");

    thunkAPI.rejectWithValue(error);
  }
});




const gLogout = createAsyncThunk("/user/logout", async (_, thunkAPI) => {
  try {
     await signout();
  } catch (error: any) {
    console.log("Errorsss");
    thunkAPI.rejectWithValue(error);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(gLogin.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(gLogin.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(gLogin.rejected, (state: any, action: any) => {
      state.loading = false;
      console.log(action.error.message);
    });
    builder.addCase(gLogout.fulfilled, (state: any, action: any) => {
      state.user = null;
    });
  },
});

export { gLogin, gLogout };
// export const { logout } = authSlice.actions
export default authSlice.reducer;
