import { configureStore } from '@reduxjs/toolkit';
import { cartItemsSlice } from './cartItemsSlice/cartItemsSlice';
import { productModalSlice } from './productModalSlice';

export const store = configureStore({
    reducer: {
        productModal: productModalSlice.reducer,
        cartItems: cartItemsSlice.reducer,
    },
});
