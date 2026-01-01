import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { IVenda } from "../context/DataContext";
import Loading from "../components/Loading";
import { API_URL } from "../api/api";

type SaleWithoutDate = Omit<IVenda, "data">;

const Sale = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<SaleWithoutDate>(
    `${API_URL}/vendas/${id}`,
  );

  if (loading) return <Loading />;
  if (!data) return null;

  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço:{" "}
        {data.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
    </div>
  );
};

export default Sale;
