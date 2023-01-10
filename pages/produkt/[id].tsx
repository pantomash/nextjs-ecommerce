import {getProductById, Product} from "../../api/products";
import {GetServerSideProps} from "next";
import Image from "next/image";
import styles from "../../styles/ProductDetail.module.scss"

export type ProductDetailProps = {
    product: Product
}

export const getServerSideProps: GetServerSideProps = async ({ params}) => {
    const product = await getProductById(params?.id as string)

    return {
        props: {
            product: product
        }
    }
}

const ProductDetail = ({product}: ProductDetailProps): JSX.Element => {
    return (
        <>
            <div className={styles.container}>
                <div>{product.title}</div>
                <div>
                    <Image width={200} height={200} src={product.images[0]} alt={product.title} />
                </div>
                <div>{`Price: ${product.price} $`}</div>
                <div>{product.description}</div>
            </div>

        </>
    )
}

export default ProductDetail