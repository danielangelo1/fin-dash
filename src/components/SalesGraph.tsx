import React from "react";
import { IVenda } from "../context/DataContext";
import { LineChart, XAxis, YAxis, Line, Tooltip, Legend } from "recharts";

type SalesGraphProps = {
  data: IVenda[];
};

const graphData = [
  { data: "2023-01-01", pago: 1500, processando: 2000, falha: 500 },
  { data: "2023-01-02", pago: 1800, processando: 1500, falha: 300 },
  { data: "2023-01-03", pago: 2000, processando: 1000, falha: 200 },
];

type SaleDay = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

const transformData = (data: IVenda[]): SaleDay[] => {
  const days = data.reduce((acc: { [key: string]: SaleDay }, item) => {
    const day = item.data.split(" ")[0];
    if (!acc[day]) {
      acc[day] = { data: day, pago: 0, processando: 0, falha: 0 };
    } else {
      acc[day][item.status] += item.preco;
    }

    return acc;
  }, {});

  return Object.values(days).map((day) => ({
    ...day,
    data: day.data.substring(5),
  }));
};

const SalesGraph = ({ data }: SalesGraphProps) => {
  const transformedData = transformData(data);

  return (
    <LineChart
      style={{
        width: "100%",
        aspectRatio: 1.618,
        maxWidth: 800,
        margin: "auto",
      }}
      responsive
      data={transformedData}
    >
      <Tooltip />
      <Legend />
      <XAxis dataKey="data" />
      <YAxis width="auto" />
      <Line type="monotone" dataKey="pago" stroke="#8884d8" strokeWidth={3} />
      <Line
        type="monotone"
        dataKey="processando"
        stroke="#82ca9d"
        strokeWidth={3}
      />
      <Line type="monotone" dataKey="falha" stroke="#ff7300" strokeWidth={3} />
    </LineChart>
  );
};

export default SalesGraph;
