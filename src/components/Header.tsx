import { useEffect, useState } from "react";
import DateRange from "./DateRange";
import Months from "./Months";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = useState("Resumo");

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      setTitle("Resumo");
      document.title = "Resumo - Fintech";
    } else if (pathname === "/sales") {
      setTitle("Vendas");
      document.title = "Vendas - Fintech";
    }
  }, [pathname]);

  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Months />
    </header>
  );
};

export default Header;
