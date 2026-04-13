export type CartProduct = {
    id: number
    title: string
    price: number
    quantity: number
    total: number
    discountPercentage: number
    discountedTotal?: number
    thumbnail: string
}

export type CartState = {
    id: number|null
    products: CartProduct[]
    total: number
    discountedTotal: number
    totalProducts: number
    totalQuantity: number
    userCart:CartProduct|null
    syncStatus: string
}