import { useState, Fragment } from "react";
import Queue from "./components/Queue";
import CourtManager from "./components/CourtManager";
import Description from "./components/Description";
import AddPlayer from "./components/AddPlayer";

const Home = () => {
  const [queue, setQueue] = useState([]);

  return (
    <Fragment>
      <CourtManager queue={queue} setQueue={setQueue} />
      <AddPlayer />
      <Queue queue={queue} setQueue={setQueue} />
      <Description />
    </Fragment>
  );
};

export default Home;
