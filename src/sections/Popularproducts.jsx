import React from 'react';
import { products } from '../constants';
import PopularProductCard from '../components/PopularProductCard';

const Popularproducts = () => {
  return (
    <section id="products" className="max-container">
    <div  className="flex flex-col justofy-start gap-5">
      <h2 className="text-4xl font-palanquin">Our Most <span className="text-coral-red">Popular</span> products</h2>
      <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Discover the essence of athleticism with Nike's top-tier products. Elevate your experience through cutting-edge design and unmatched quality. Each item is a testament to the perfect blend of art and performance. Step into excellence with Nike.</p>
    </div>

    <div className="mt-16 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
    {products.map((product) =>  (
      <PopularProductCard key={product.name} {...product} />
    ))}


    </div>
    </section> 
  )
}

export default Popularproducts;