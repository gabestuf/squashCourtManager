import "./../css/Queue.css";

const QueueList = (props) => {
  return (
    <table className="queueListTable">
      <thead>
        <tr>
          <th>#</th>
          <th>Players</th>
        </tr>
      </thead>
      <tbody>
        {props.queue.map((game, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{game.p1}</td>
            <td>vs</td>
            <td>{game.p2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QueueList;
