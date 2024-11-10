import React from 'react';
import Link from 'next/link';
import styles from '../components/Navbar.module.css';  

const Navbar = () => {
  return (
    <nav className={styles.navbar}>  
      <div className="flex justify-between items-center">
        <div className={styles.brand}>  
          <Link href="/">My Shop</Link>
        </div>
        <div className={styles.navLinks}>  
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-orange-500">Home</Link>
            </li>
            <li>
              <Link href="#products" className="hover:text-orange-500">Products</Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-orange-500">Cart</Link>
            </li>
            <li>
              <Link href="/checkout" className="hover:text-orange-500">Checkout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
