import Court from "./Court";
import { Fragment, useState, useEffect } from "react";

const CourtManager = (props) => {
  const [c1Status, setC1Status] = useState({ busy: false, p1: "Player 1", p2: "Player 2" });
  const [c2Status, setC2Status] = useState({ busy: false, p1: "Player 1", p2: "Player 2" });
  const [c3Status, setC3Status] = useState({ busy: false, p1: "Player 1", p2: "Player 2" });

  const popQueue = () => {
    if (!props.queue.length) {
      return false;
    }
    const q = props.queue;
    const next = q.pop();
    props.setQueue(q);
    return next;
  };

  useEffect(() => {
    if (!c1Status.busy) {
      const next = popQueue();

      if (next) {
        c1Status.busy = true;
        c1Status.p1 = next.p1;
        c1Status.p2 = next.p2;
        setC1Status(c1Status);
      }
    } else if (!c2Status.busy) {
      const next = popQueue();
      if (next) {
        c2Status.busy = true;
        c2Status.p1 = next.p1;
        c2Status.p2 = next.p2;
        setC2Status(c2Status);
      }
    } else if (!c3Status.busy) {
      const next = popQueue();
      if (next) {
        c3Status.busy = true;
        c3Status.p1 = next.p1;
        c3Status.p2 = next.p2;
        setC3Status(c3Status);
      }
    }
  }, [props.queue, c1Status, c2Status, c3Status]);

  return (
    <Fragment>
      <Court status={c1Status} />
      <Court status={c2Status} />
      <Court status={c3Status} />
    </Fragment>
  );
};

export default CourtManager;
