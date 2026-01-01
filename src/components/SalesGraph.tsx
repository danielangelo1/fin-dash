import { LineChart, XAxis, YAxis, Line, Tooltip, Legend } from "recharts";
import { IVenda, SaleDay } from "../types/Sales";

type SalesGraphProps = {
  data: IVenda[];
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
