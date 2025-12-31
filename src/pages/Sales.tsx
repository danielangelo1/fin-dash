import React from "react";
import { useData } from "../context/DataContext";
import SaleItem from "../components/SaleItem";

const Sales = () => {
  const { data } = useData();
  if (!data) return null;
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <SaleItem sale={item} />
        </li>
      ))}
    </ul>
  );
};

export default Sales;
