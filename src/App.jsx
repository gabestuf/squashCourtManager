import { useState, Fragment, useEffect, useRef } from "react";
import Court from "./components/Court";
import Queue from "./components/Queue";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CourtManager from "./components/CourtManager";
import Description from "./components/Description";
import QueueList from "./components/QueueList";

function App() {
  const [queue, setQueue] = useState([]);

  // useEffect(() => {
  //   console.log(queue);
  // }, [queue]);

  return (
    <Fragment>
      <Header />
      <main>
        <div className="court-container">
          <CourtManager queue={queue} setQueue={setQueue} />
        </div>
        <Queue queue={queue} setQueue={setQueue} />
      </main>
      <Description />
      <Footer />
    </Fragment>
  );
}

export default App;
