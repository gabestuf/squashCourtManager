import "./../css/Queue.css";

const AddToQueue = (props) => {
  // Handle Adding Players to Queue
  const onSubmitForm = (e) => {
    e.preventDefault();
    const p1Name = e.target[0].value; // Player 1 Name
    const p2Name = e.target[1].value; // Player 2 Name
    e.target[0].value = "";
    e.target[1].value = "";

    if (!(p1Name && p2Name)) {
      // check if names are empty
      alert("NAMES CANNOT BE EMPTY");
    } else {
      // Add names to the queue
      props.setQueue([
        ...props.queue,
        {
          p1: p1Name,
          p2: p2Name,
          numGames: parseInt(e.target[2].value) || 1,
        },
      ]);
    }
  };

  return (
    <form
      className="addToQueueForm"
      onSubmit={(e) => {
        onSubmitForm(e);
      }}
    >
      <h3>Add to Queue</h3>
      <label htmlFor="p1">Player 1</label>
      <input type="text" name="p1" id="p1" />
      <br />
      <label htmlFor="p2">Player 2</label>
      <input type="text" name="p2" id="p2" />
      <br />
      <label htmlFor="numGames">Number of Games</label>
      <select id="numGames" name="numGames" defaultValue={1}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
      </select>

      <button>Add Match to Queue</button>
    </form>
  );
};

export default AddToQueue;
