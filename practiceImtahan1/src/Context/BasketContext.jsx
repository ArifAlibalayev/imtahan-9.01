import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const BasketContext = createContext();

function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage([]);

  function addToBasket(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    if (x !== -1) {
      setBasket([...basket, { ...item, count: 1 }]);
    } else {
      const updatedBasket = [...basket];
      updatedBasket[index].count++;
      setBasket(updatedBasket);
    }
  }

  function deleteFromBasket(item) {
    const index = basket.filter((x) => x.id !== item.id);
  }

  const basketValue = { basket , setBasket, addToBasket, deleteFromBasket };

  return (
    <BasketContext.Provider value={basketValue}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketProvider;
