import "./../css/Court.css";
import { useState } from "react";
import { Fragment } from "react";

const Court = (props) => {
  const [data, setData] = useState({ games: 3 });

  const onSubmitCourtForm = (e) => {
    e.preventDefault();
    const scores = [];
    for (let j = 0; j < data.games; j++) {
      const i = j * 2;
      //set scores
      scores[j] = {
        p1: parseInt(e.target[i].value),
        p2: parseInt(e.target[i + 1].value),
      };

      // reset scores
      e.target[i].value = null;
      e.target[i + 1].value = null;
    }
    console.log("Game: " + props.status.p1 + " vs " + props.status.p2);
    console.log("scores:");
    console.log(scores);
    //reset court status
    props.setStatus({ busy: false, p1: "Empty", p2: "Empty" });
  };

  return (
    <div className="courtContainer">
      <div className="courtCard">
        <h1 style={{ marginTop: "1rem", textAlign: "center" }}>Court {props.id}</h1>
        <div className="court" style={{ backgroundColor: props.status.busy ? "green" : "var(--main-primary-color)" }}>
          {!props.status.busy ? (
            <div>
              <h3>Empty</h3>
              <p>Add names to queue to wait for a court</p>
            </div>
          ) : (
            <Fragment>
              <form onSubmit={(e) => onSubmitCourtForm(e)}>
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>{props.status.p1}</th>
                      <th>{props.status.p2}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(() => {
                      const rows = [];
                      for (let index = 0; index < data.games; index++) {
                        rows.push(
                          <tr key={index}>
                            <td>{index}</td>
                            <td className="td">
                              <input type="number" defaultValue={undefined} min={0} required />
                            </td>
                            <td className="td">
                              <input type="number" defaultValue={undefined} min={0} required />
                            </td>
                          </tr>
                        );
                      }
                      return rows;
                    })().map((row) => row)}
                  </tbody>
                </table>
                <button className="doneBtn">Done</button>
              </form>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};
export default Court;
