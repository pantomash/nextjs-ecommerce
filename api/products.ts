import {api} from "./config";

export type Product = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

export const getProducts = async (): Promise<Product[]> => {
    const response = await api.get(`/products`)
    const { products } = response.data
    return products
}

export const getProductById = async (id: string): Promise<Product> => {
    const response = await api.get(`/products/${id}`)
    return response.data
}