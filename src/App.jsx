import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import "./styles.css";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import ContentPage from "./pages/ContentPage";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<ContentPage category={"movies"} />} />
        <Route
          path="/tv-series"
          element={<ContentPage category={"tv-series"} />}
        />
        <Route path="/movies/:id" element={<Details />} />
        <Route path="/tv-series/:id" element={<Details />} />

        {/* Search Routes */}

        <Route
          path="/movies/search/:keyword"
          element={<ContentPage category={"movies"} />}
        />
        <Route
          path="/tv-series/search/:keyword"
          element={<ContentPage category={"tv-series"} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
