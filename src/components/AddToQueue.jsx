import "./../css/Queue.css";

const AddToQueue = (props) => {
  return (
    <form
      className="addToQueueForm"
      onSubmit={(e) => {
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
            },
          ]);
        }
      }}
    >
      <h3>Add to Queue</h3>
      <label htmlFor="p1">Player 1</label>
      <input type="text" name="p1" id="p1" />
      <br />
      <label htmlFor="p2">Player 2</label>
      <input type="text" name="p2" id="p2" />
      <br />
      <button>Add Match to Queue</button>
    </form>
  );
};

export default AddToQueue;
