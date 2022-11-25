import { useState } from "react";
import AddToQueue from "./AddToQueue";
import QueueList from "./QueueList";

const Queue = () => {
  const [queue, setQueue] = useState([]);
  return (
    <div>
      <AddToQueue queue={queue} setQueue={setQueue} />
      <QueueList queue={queue} />
    </div>
  );
};

export default Queue;
