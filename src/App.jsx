import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import "./styles.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-series" element={<TvSeries />} />
        <Route path="/movie/:id" element={<h1>Movie Details</h1>} />
        <Route path="/tv-series/:id" element={<h1>TV Details</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
