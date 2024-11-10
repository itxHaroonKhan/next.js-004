import styles from "./ProductsPage.module.css";


const products = [
    {
      id: 1,
      title: 'Product',
      description: 'This is a description for product 1.',
      image: 'https://i.pinimg.com/564x/2a/96/dd/2a96dd231dda0c9c326b8d035bc5f9e8.jpg',
      price: 29.99,
    },
    {
      id: 2,
      title: 'Product ',
      description: 'This is a description for product 2.',
      image: 'https://i.pinimg.com/564x/1c/52/87/1c5287e79e16619f51967509846dedd2.jpg',
      price: 49.99,
    },
    {
      id: 3,
      title: 'Product ',
      description: 'This is a description for product 3.',
      image: 'https://i.pinimg.com/564x/e5/23/22/e523224df26ef008dde2674d856fd43f.jpg',
      price: 19.99,
    },
    {
      id: 4,
      title: 'Product ',
      description: 'This is a description for product 4.',
      image: 'https://i.pinimg.com/564x/16/aa/aa/16aaaa63e0f30c9899c8b2100b4a9d4d.jpg',
      price: 99.99,
    },
    {
      id: 5,
      title: 'Product ',
      description: 'This is a description for product 5.',
      image: 'https://i.pinimg.com/564x/c9/96/2b/c9962b2b384ebb9e5842521873a2d946.jpg',
      price: 79.99,
    },
    {
      id: 6,
      title: 'Product',
      description: 'This is a description for product 6.',
      image: 'https://i.pinimg.com/564x/28/13/38/2813384146c3eb31399603e731da9915.jpg',
      price: 79.99,
    },
    {
      id: 7,
      title: 'Product',
      description: 'This is a description for product 7.',
      image: 'https://i.pinimg.com/564x/f3/d3/ea/f3d3eaf21344aadbecdd80188134ab27.jpg',
      price: 69.99,
    },
    {
      id: 8,
      title: 'Product',
      description: 'This is a description for product 8.',
      image: 'https://i.pinimg.com/564x/20/a6/48/20a648a7cdc2f6ad835215d582ea80bb.jpg',
      price: 59.99,
    },
    {
      id: 9,
      title: 'Product',
      description: 'This is a description for product 9.',
      image: 'https://i.pinimg.com/564x/d8/21/19/d82119df53996ee6ecfab8410277af90.jpg',
      price: 59.99,
    },
    {
      id: 10,
      title: 'Product',
      description: 'This is a description for product 9.',
      image: 'https://i.pinimg.com/564x/dc/e1/40/dce140dd84d8924b12145819838d784c.jpg',
      price: 79.99,
    },
    {
      id: 11,
      title: 'Product',
      description: 'This is a description for product 9.',
      image: 'https://i.pinimg.com/564x/66/14/c4/6614c497448e8868f9eeb52ac0229bf9.jpg',
      price: 67.99,
    },

    {
      id: 12,
      title: 'Product',
      description: 'This is a description for product 9.',
      image: 'https://i.pinimg.com/564x/0d/4b/c9/0d4bc9fd013cdc9f68fc90fc5954f1a6.jpg',
      price: 64.99,
    },

    {
      id: 13,
      title: 'Product',
      description: 'This is a description for product 9.',
      image: 'https://i.pinimg.com/564x/dc/f1/2e/dcf12e0e671e9892772538a2c48dd6b5.jpg',
      price: 69.99,
    },

    {
      id: 14,
      title: 'Product',
      description: 'This is a description for product 9.',
      image: 'https://i.pinimg.com/564x/0b/ba/a6/0bbaa66313071058ca0506dec12023c7.jpg',
      price: 49.99,
    },

    {
      id: 15,
      title: 'Product',
      description: 'This is a description for product 9.',
      image: 'https://i.pinimg.com/564x/bf/07/5b/bf075bb23b4469b6eb1f98502204184f.jpg',
      price: 69.99,
    },
  ];
  import ProductCard from "./ProductCard";

  const ProductsPage = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Our Products</h1>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductsPage;