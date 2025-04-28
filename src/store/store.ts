import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer, { CartState } from './cartSlice';
import themeReducer from './themeSlice';
import wishlistReducer, { WishlistState } from './wishlistSlice';

// Create separate persist configs for each reducer
const cartPersistConfig = {
  key: 'cart',
  storage,
};

const wishlistPersistConfig = {
  key: 'wishlist',
  storage,
};

// Persist each reducer separately with its own configuration
const persistedCartReducer = persistReducer<CartState>(cartPersistConfig, cartReducer);
const persistedWishlistReducer = persistReducer<WishlistState>(wishlistPersistConfig, wishlistReducer);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    theme: themeReducer,
    wishlist: persistedWishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;