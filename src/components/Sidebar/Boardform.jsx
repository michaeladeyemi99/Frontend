import { useState } from "react";
import { useParams } from "react-router-dom";
import { addNewBoard } from "./ customHooksFunctions";
import  { BoardIcon } from "./Icons";

function BoardForm() {
  const [boardName, setBoardName] = useState("");
  const param = useParams();
  console.log(param);
  const user_id = param.id;
  console.log(user_id);

  function handleChange(event) {
    const value = event.target.value;
    setBoardName(value);
    console.log(value);
  }

  return (
    <div>
      <form
        className="flex flex-col gap-4"
        onSubmit={async (event) => {
          event.preventDefault();
          await addNewBoard(boardName, user_id);
        }}
      >
        <input
          className="bg-gray-300 mr-7"
          type="text"
          name="boardName"
          value={boardName}
          onChange={handleChange}
        />
        <div className="flex gap-4 text-main_purple">
          <BoardIcon />
          
          <button type="submit" className="text-left">
            {" "}
             Add New Board
          </button>
        </div>
      </form>
    </div>
  );
}

export default BoardForm;
