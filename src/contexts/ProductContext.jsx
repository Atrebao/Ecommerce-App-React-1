import React, { createContext, useState, useEffect } from "react";

/**Le contexte permet à un composant parent de mettre des données à disposition de tout l’arbre en dessous de lui. */

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);


  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext };
export default ProductProvider;
