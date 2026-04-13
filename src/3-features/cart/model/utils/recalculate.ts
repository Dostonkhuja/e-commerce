import type { CartState } from "@/4-entities/cart";

export const recalculate = (state: CartState) => {
    let total = 0
    let discountedTotal = 0
    let totalQuantity = 0

    for (const p of state.products) {
        total += p.price * p.quantity
        discountedTotal += p.discountedTotal || 0
        totalQuantity += p.quantity
    }

    state.total = total
    state.discountedTotal = discountedTotal
    state.totalQuantity = totalQuantity
    state.totalProducts = state.products.length
}
