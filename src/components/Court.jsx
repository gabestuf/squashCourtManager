import "./Court.css";
import { useState } from "react";

const Court = (props) => {
  const [data, setData] = useState([
    { p1: 5, p2: 11 },
    { p1: 0, p2: 0 },
    { p1: 0, p2: 0 },
  ]);

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
              <th>Player 1</th>
              <th>Player 2</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>
                  <input type="number" />
                </td>
                <td>
                  <input type="number" />
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
