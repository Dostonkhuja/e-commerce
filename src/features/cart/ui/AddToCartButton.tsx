import { useAppDispatch } from '@/app/providers/store/hooks'
import { addToCart } from '../model/cartSlice'
import type {Product} from "@/entitys/products";

type Props = {
    product: Product
}

export const AddToCartButton = ({ product }: Props) => {
    const dispatch = useAppDispatch()

    return (
        <button
            className="mt-auto w-full rounded-xl bg-blue-600 text-white py-2 text-sm font-medium hover:bg-blue-700 active:scale-95 transition"
            onClick={(e) => {
            e.stopPropagation()
            dispatch(addToCart(product))}
        }>
            Add to cart
        </button>
    )
}