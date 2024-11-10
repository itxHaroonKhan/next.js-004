import React from 'react';
import styles from './ProductCard.module.css';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className={styles.card} id="products">
      <img 
        src={product.image} 
        alt={product.title} 
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.priceContainer}>
          <span className={styles.price}>${product.price}</span>
          <button className={styles.button}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
