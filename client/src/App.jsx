import { Fragment } from "react";
import HomePage from "./HomePage";
import MatchHistoryPage from "./MatchHistoryPage";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="content">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/matchhistory" element={<MatchHistoryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
