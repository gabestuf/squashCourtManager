import { useState, Fragment, useEffect } from "react";
import Court from "./components/Court";
import Queue from "./components/Queue";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CourtManager from "./components/CourtManager";
import QueueList from "./components/QueueList";

function App() {
  const [queue, setQueue] = useState([]);

  return (
    <Fragment>
      <Header />
      <main>
        <div className="court-container">
          <CourtManager queue={queue} setQueue={setQueue} />
        </div>
        <Queue queue={queue} setQueue={setQueue} />
      </main>
    </Fragment>
  );
}

export default App;
