import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {ProductList} from "../components/ProductList";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ProductList />
    </div>
  )
}

export default Home
