import Court from "./Court";
import { useState, useEffect } from "react";

const CourtManager = (props) => {
  const [c1Status, setC1Status] = useState({ busy: false, p1: "Empty", p2: "Empty", numGames: 0 });
  const [c2Status, setC2Status] = useState({ busy: false, p1: "Empty", p2: "Empty", numGames: 0 });
  const [c3Status, setC3Status] = useState({ busy: false, p1: "Empty", p2: "Empty", numGames: 0 });

  const popQueue = () => {
    if (!props.queue.length) {
      return false;
    }
    const q = [...props.queue];
    const next = q.pop();
    props.setQueue(q);
    return next;
  };

  function updateQueue() {
    if (!props.queue.length) {
      return;
    }
    if (!c1Status.busy) {
      const next = popQueue();

      if (next) {
        c1Status.busy = true;
        c1Status.p1 = next.p1;
        c1Status.p2 = next.p2;
        c1Status.numGames = next.numGames;
        setC1Status(c1Status);
      }
    } else if (!c2Status.busy) {
      const next = popQueue();
      if (next) {
        c2Status.busy = true;
        c2Status.p1 = next.p1;
        c2Status.p2 = next.p2;
        c2Status.numGames = next.numGames;
        setC2Status(c2Status);
      }
    } else if (!c3Status.busy) {
      const next = popQueue();
      if (next) {
        c3Status.busy = true;
        c3Status.p1 = next.p1;
        c3Status.p2 = next.p2;
        c3Status.numGames = next.numGames;
        setC3Status(c3Status);
      }
    }
  }

  useEffect(() => {
    updateQueue();
  }, [props.queue, c1Status, c2Status, c3Status]);

  return (
    <div className="courtContainer">
      <Court status={c1Status} setStatus={setC1Status} id={1} />
      <Court status={c2Status} setStatus={setC2Status} id={2} />
      <Court status={c3Status} setStatus={setC3Status} id={3} />
    </div>
  );
};

export default CourtManager;
