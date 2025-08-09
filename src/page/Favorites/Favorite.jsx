import React, { useContext } from 'react'
import { CartContext } from '../../components/Cartcontext/CartContext';
import PageTransition from '../../components/PageTransition';
import Product from '../../components/slideProduct/Product';

function favorite() {

  const { favorite } = useContext(CartContext); 

  return (
    <PageTransition>
      <div className="Favorites">
        <div className="container">
            <div className="top_slide">
              <h2>Your favorites</h2>
              <p>Here you can find all your favorite products</p>
            </div>
            { favorite.length === 0 ? (
             <p>No favorites products yet.</p> 
             ) : (
              <div className="products">
                {favorite.map(item => (
                  <Product item={item} key={item.id} />
                ))}
              </div>
            )}
        </div>
      </div>

    </PageTransition>
  )
}

export default favorite