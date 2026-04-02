export interface Product {
    id: number
    title: string
    description: string

    category: string
    brand: string

    price: number
    discountPercentage: number
    rating: number
    stock: number

    sku: string
    weight: number

    minimumOrderQuantity: number

    availabilityStatus: string
    returnPolicy: string
    shippingInformation: string
    warrantyInformation: string

    images: string[]
    thumbnail: string

    tags: string[]

    dimensions: {
        width: number
        height: number
        depth: number
    }

    meta: {
        createdAt: string
        updatedAt: string
        barcode: string
        qrCode: string
    }

    reviews: Review[];
    quantity: number
    total: number
    discountedTotal: number
}

export type Review = {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
};
