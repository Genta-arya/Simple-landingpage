
import { createContext, useContext, useState } from "react";

const OrderDataContext = createContext();

export function useOrderData() {
  return useContext(OrderDataContext);
}

export function OrderDataProvider({ children }) {
  const [orderData, setOrderData] = useState(null);

  const setOrder = (data) => {
    setOrderData(data);
  };

  return (
    <OrderDataContext.Provider value={{ orderData, setOrder }}>
      {children}
    </OrderDataContext.Provider>
  );
}
