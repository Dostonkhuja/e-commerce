
import {type RootState } from '@/app/store/store'

export const selectCart = (state: RootState) => state.cartPersist

export const selectCartProducts = (state: RootState) =>
    state.cartPersist.products

export const selectCartTotal = (state: RootState) =>
    state.cartPersist.total

export const selectCartQuantity = (state: RootState) =>
    state.cartPersist.totalQuantity

export const selectCartStatus = (state: RootState) =>
    state.cartPersist.syncStatus