import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cartPersistReducer, cartUiReducer } from "@/3-features/cart";
import { persistReducer, persistStore } from "redux-persist";
import { productsReducer } from "@/3-features/products";
import { categoriesReducer } from "@/4-entities/categories";

const storage = {
    getItem: (key: string) => {
        return Promise.resolve(localStorage.getItem(key));
    },
    setItem: (key: string, value: string) => {
        return Promise.resolve(localStorage.setItem(key, value));
    },
    removeItem: (key: string) => {
        return Promise.resolve(localStorage.removeItem(key));
    },
};

const rootReducer = combineReducers({
    cartPersist: cartPersistReducer,
    cartUi: cartUiReducer,
    categories: categoriesReducer,
    products: productsReducer,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
