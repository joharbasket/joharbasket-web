import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { Notification } from "@/lib/types"
const initialState: {
  notifications: Notification[];
} = {
  notifications: [],
};

const getNotifications = createAsyncThunk(
  "/api/notifications",
  async (_, _thunkAPI: any) => {
    try {
      const data = (await axios.get(`/api/notifications`)).data;
      console.log(data);
      return data;
    } catch (error: any) {
      console.log("Errorsss");
      _thunkAPI.rejectWithValue(error);
    }
  }
);

export const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    pushLatestNotification: (state, action) => {
      const notification = action.payload;
      console.log(notification);
      state.notifications.unshift(notification);
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(getNotifications.fulfilled, (state: any, action: any) => {
      state.loading = false;
      if (action.payload) {
        console.log(action.payload);
        state.notifications = action.payload;
      }
    });
    builder.addCase(getNotifications.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(getNotifications.rejected, (state: any, action: any) => {
      state.loading = false;
      console.log(action.error.message);
    });
  },
});
export { getNotifications };
export const { pushLatestNotification  } = notificationSlice.actions;
export default notificationSlice.reducer;
