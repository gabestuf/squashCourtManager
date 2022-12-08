import { useState } from "react";
import AddToQueue from "./AddToQueue";
import QueueList from "./QueueList";

const Queue = (props) => {
  return (
    <div>
      <AddToQueue queue={props.queue} setQueue={props.setQueue} />
      <QueueList queue={props.queue} />
    </div>
  );
};

export default Queue;
