import { useState, Fragment, useEffect } from "react";
import Court from "./components/Court";
import Queue from "./components/Queue";
import "./App.css";

function App() {
  const [data, setData] = useState({
    x1: 5,
    x2: 6,
    y1: 4,
    y2: 3,
  });

  return (
    <Fragment>
      <main>
        <div className="court-container">
          <Court data={data} setData={setData} />
          <Queue />
        </div>
      </main>
    </Fragment>
  );
}

export default App;
