
import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const useOrderContext = () => {
  return useContext(OrderContext);
};

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState(null);

  const setGlobalOrder = (orderData) => {
    setOrder(orderData);
  };

  return (
    <OrderContext.Provider value={{ order, setGlobalOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
