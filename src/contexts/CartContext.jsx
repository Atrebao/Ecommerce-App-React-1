import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  // Cart state
  const [cart, setCart] = useState([]);

  const [itemAmount, setItemAmount] = useState(0);

  //Total price state
  const [total, setTotal] = useState(0);

  //Update total price
  useEffect(() => {
    if (cart) {
      const total = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.amount;
      }, 0);

      setTotal(total);
    }
  });

  //update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);

      const total = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price;
      }, 0);

      setTotal(total);
      setItemAmount(amount);
    }
  }, [cart]);

  //Add to cart
  const addToCart = (product, id) => {
    // Vérifie si le produit existe déjà dans le panier
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      // Si l'article existe déjà, met à jour la quantité
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );

      // Met à jour le panier avec les nouvelles quantités
      setCart(newCart);
    } else {
      // Si l'article n'existe pas dans le panier, ajoutez-le avec la quantité initiale de 1
      const newItem = { ...product, amount: 1 };
      setCart((prevCart) => [...prevCart, newItem]); // Utilise la fonction de mise à jour de `setCart` pour éviter les problèmes de synchronisation
    }

    console.log(cart);
  };

  //Remove from

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);

    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);

    addToCart(item, id);
  };

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      if (cartItem.amount > 1) {
        const newCart = cart.map((item) =>
          item.id === id ? { ...item, amount: cartItem.amount - 1 } : item
        );

        setCart(newCart);
      } else {
        removeFromCart(id);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
