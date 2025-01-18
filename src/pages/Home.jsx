import React from 'react'
import { ProductContext } from '../contexts/ProductContext'
import {useContext} from 'react'
import Product from '../component/Product'
import Hero from "../component/Hero"



export default function Home() {

  const products = useContext(ProductContext)

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  console.log(filteredProducts)


  return (
    <div>
      <Hero/>
      <section className="py-16">
        <div className="container mx-auto">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:gird-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
          {filteredProducts.map((product) =>{
            return (
              // <div className='w-full h-[300px] bg-pink-200 mb-4' key={product.id}>{product.title}</div>
              <Product product={product} key={product.id}/>
            )
          })}
          </div>

        </div>
      </section>
    </div>
  )
}
