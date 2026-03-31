import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from '@/features/cart/model/cartSlice'
import { persistReducer, persistStore } from 'redux-persist'

const storage = {
    getItem: (key: string) => {
        return Promise.resolve(localStorage.getItem(key))
    },
    setItem: (key: string, value: string) => {
        return Promise.resolve(localStorage.setItem(key, value))
    },
    removeItem: (key: string) => {
        return Promise.resolve(localStorage.removeItem(key))
    }
}

const rootReducer = combineReducers({
    cart: cartReducer
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch