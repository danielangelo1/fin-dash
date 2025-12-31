import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import useFetch from "./hooks/useFetch";
import Abstract from "./pages/Abstract";
import "./Style.css";

function App() {
  const { data, loading, error } = useFetch("/api/data");

  return (
    <div className="container">
      <Sidenav />
      <main>
        <Header />
      </main>
      <Abstract />
    </div>
  );
}

export default App;
