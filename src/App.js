import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Layout from "./components/Layout/Layout";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<Layout />} path="/" exact />
      </Routes>
    </div>
  );
}

export default App;
