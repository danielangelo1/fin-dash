import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import useFetch from "./hooks/useFetch";
import Abstract from "./pages/Abstract";
import Sales from "./pages/Sales";
import "./Style.css";
import Sale from "./pages/Sale";

function App() {
  const { data, loading, error } = useFetch("/api/data");

  return (
    <div className="container">
      <Sidenav />
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Abstract />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/sales/:id" element={<Sale />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
