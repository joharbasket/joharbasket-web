import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import productReducer from "./features/products/productSlice";
import orderReducers from "./features/orders/orderSlice"
import notificationReducers from "./features/notifications/notificationSlice"
import subcategoriesReducers from "./features/subcategories/index"
import { useDispatch } from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import session from "redux-persist/lib/storage/session";

export const persistConfigAuth = {
  key: 'auth', 
  storage,
};

const persistedReducer = persistReducer(
  persistConfigAuth,
  authReducer
);
const persistedOrder = persistReducer(
  {
    key : 'order',
    storage,
  },
  orderReducers
)
export const store = configureStore({
  reducer: {
 
    authReducer :persistedReducer,
    productReducer,
    orderReducers : persistedOrder,
    notificationReducers,
    subcategoriesReducers,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 
