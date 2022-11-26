import "./Court.css";
import { useState, useEffect } from "react";

const Court = (props) => {
  const [data, setData] = useState([
    { p1: 5, p2: 11 },
    { p1: 0, p2: 0 },
    { p1: 0, p2: 0 },
  ]);

  useEffect(() => {
    console.log(props.status);
  }, [props.status]);

  return (
    <div className="court">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newData = [];
          for (let j = 0; j < data.length; j++) {
            const i = j * 2;
            newData[j] = {
              p1: parseInt(e.target[i].value),
              p2: parseInt(e.target[i + 1].value),
            };
          }
        }}
      >
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>{props.status.p1}</th>
              <th>{props.status.p2}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td className="td">
                  <input type="number" defaultValue={row.p1} />
                </td>
                <td className="td">
                  <input type="number" defaultValue={row.p2} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button>Done</button>
      </form>
    </div>
  );
};
export default Court;
