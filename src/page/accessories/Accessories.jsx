import React, { useEffect, useState } from 'react';
import PageTransition from '../../components/PageTransition';
import SlideProducts from '../../components/slideProduct/SlidProduct';
import SlideProductLoading from '../../components/slideProduct/SlideProductLoading';

import './accessories.css';

function Accessories() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products/category/smartphones');
        const data = await res.json();
        if (mounted) setProducts(data.products || []);
      } catch (err) {
        console.error('Failed to load accessories', err);
        if (mounted) setProducts([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchProducts();
    return () => { mounted = false; };
  }, []);

  return (
    <PageTransition>
      <div className="container">

        {loading ? (
          <>
            <SlideProductLoading />
            <SlideProductLoading />
          </>
        ) : (
          <SlideProducts data={products} title={'Accessories'} />
        )}
      </div>
    </PageTransition>
  );
}

export default Accessories;