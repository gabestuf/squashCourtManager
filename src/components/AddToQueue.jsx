const AddToQueue = (props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(props.queue);
        let tempQueue = props.queue;
        props.setQueue([
          ...props.queue,
          {
            p1: e.target[0].value,
            p2: e.target[1].value,
          },
        ]);
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
