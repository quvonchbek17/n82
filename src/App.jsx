import Header from "./components/Header";
import Main from "./pages/Main";
import Korzinka from "./pages/Korzinka/Korzinka";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import MoreInfo from "./pages/MoreInfo/MoreInfo";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/korzinka" element={<Korzinka />} />
        <Route path="/moreinfo/:id" element={<MoreInfo />} />
      </Routes>
    </>
  );
}

export default App;
