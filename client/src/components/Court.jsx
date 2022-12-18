import "./../css/Court.css";
import { Fragment } from "react";

const evaluateGames = (gameList) => {
  let returnedList = [...gameList];
  let msg = "";
  const emptyArr = [];
  for (let gameNum = 0; gameNum < gameList.length; gameNum++) {
    if (gameList[gameNum].p1 < 11 && gameList[gameNum].p2 < 11) {
      // Make sure at least one player has a winning score
      msg += `No player won game ${gameNum + 1} this game will be erased\n`;
      returnedList.splice(gameNum, 1);
    } else if (gameList[gameNum].p1 >= 10 && gameList[gameNum].p2 >= 10 && Math.abs(gameList[gameNum].p1 - gameList[gameNum].p2) > 2) {
      // Invalid game, greater than 2 points difference
      msg = `Game ${gameNum + 1} has an impossible score and will be erased\n`;
      returnedList.splice(gameNum, 1);
    } else if (gameList[gameNum].p1 > gameList[gameNum].p2) {
      // Player 1 wins
      msg += `Player 1 won game ${gameNum + 1} ${gameList[gameNum].p1}-${gameList[gameNum].p2}\n`;
    } else if (gameList[gameNum].p2 > gameList[gameNum].p1) {
      // Player 2 wins
      msg += `Player 2 won game ${gameNum + 1} ${gameList[gameNum].p2}-${gameList[gameNum].p1}\n`;
    } else if (gameList[gameNum].p1 == gameList[gameNum].p2) {
      // Tie game above 11
      msg += `Game ${gameNum + 1} was a tie?? ${gameList[gameNum].p2}-${gameList[gameNum].p1}\n`;
    } else {
      // something else
      alert("ERROR!! Well, you've hit an edge case. Please record your score and anything you've done and contact Gabe pls and ty :). There has been some error and this game has not been recorded.");
      msg = undefined;
      return { msg, returnedList };
    }
  }
  msg += "\n Please confirm";
  return { msg, returnedList };
};

// COMPONENT
const Court = (props) => {
  const onSubmitCourtForm = async (e) => {
    e.preventDefault();
    const scores = [];
    for (let gameNum = 0; gameNum < props.status.numGames; gameNum++) {
      const pNum = gameNum * 2;
      //set scores
      scores[gameNum] = {
        p1: parseInt(e.target[pNum].value),
        p2: parseInt(e.target[pNum + 1].value),
      };

      // reset scores
      e.target[pNum].value = null;
      e.target[pNum + 1].value = null;
    }

    // Make sure scores are valid
    const { msg, returnedList } = evaluateGames(scores);

    if (confirm(msg)) {
      if (msg == undefined || returnedList.length < 1) return;
      // Push games to MONGO
      const response = await fetch("http://localhost:3000/match/addMatch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ games: JSON.stringify(returnedList), player1: props.status.p1, player2: props.status.p2 }),
      });
      const responseJSON = await response.json();
      //console.log(responseJSON);

      //reset court status
      props.setStatus({ busy: false, p1: "Empty", p2: "Empty", numGames: 0 });
    }
  };

  // Remove from court & queue without saving
  const exitWithoutSaving = () => {
    if (confirm("Are you sure?")) {
      props.setStatus({ busy: false, p1: "Empty", p2: "Empty", numGames: 0 });
    }
  };

  return (
    <div className="cardContainer">
      <h1 style={{ marginTop: "1rem", textAlign: "center" }}>Court {props.id}</h1>
      <div className="court" style={{ backgroundColor: props.status.busy ? "var(--main-primary-color)" : "green" }}>
        {!props.status.busy ? (
          <div>
            <h3>Empty</h3>
            <p>Add names to queue to wait for a court</p>
          </div>
        ) : (
          <Fragment>
            <h4>Gamelength: {props.status.gameLength}</h4>

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
                    for (let index = 0; index < props.status.numGames; index++) {
                      rows.push(
                        <tr key={index}>
                          <td>{`Game ${index + 1}`}</td>
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
              <button className="doneBtn" type="submit">
                Save
              </button>
              <button
                className="doneBtn"
                type="button"
                onClick={() => {
                  exitWithoutSaving();
                }}
              >
                Exit without Saving
              </button>
            </form>
          </Fragment>
        )}
      </div>
    </div>
  );
};
export default Court;
