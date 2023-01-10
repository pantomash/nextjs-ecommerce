import {getProducts} from "../api/products";
import Link from "next/link";
import {useQuery} from "react-query";

export const ProductList = (): JSX.Element => {
    const {data: productsList, isLoading: productsLoading} = useQuery("products", getProducts)

    return (
        <>
            <h2>Product list:</h2>
            {
                productsLoading ? (
                    <div>Loading...</div>
                ) : (
                    <ul>
                        {productsList?.map((product) => {
                            return (
                                <li key={product.id}>
                                    <Link href={`/produkt/${product.id}`}>{product.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                )
            }
        </>
    )
}