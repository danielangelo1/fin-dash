import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import useFetch from "../hooks/useFetch";
import { getAnyDaysAgo } from "../utils/util";

type IDataContext = {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
  startDate: string;
  endDate: string;
  setStartDate: Dispatch<SetStateAction<string>>;
  setEndDate: Dispatch<SetStateAction<string>>;
};

export type IVenda = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  data: string;
  parcelas: number | null;
};

export const useData = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }

  return context;
};

const DataContext = createContext<IDataContext | null>(null);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [startDate, setStartDate] = useState(getAnyDaysAgo(30));
  const [endDate, setEndDate] = useState(getAnyDaysAgo(0));

  const { data, loading, error } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${startDate}&final=${endDate}`,
  );

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        startDate,
        endDate,
        setStartDate,
        setEndDate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
