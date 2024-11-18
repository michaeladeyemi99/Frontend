import { useContext, useState } from "react";
import { useGetBoardData } from "../../services/BoardData";
import lightLogo from "../../assets/logo-dark.svg";
import DarkLogo from "../../assets/logo-light.svg";
import { BoardIcon } from "./Icons";
import { ThemeContext } from "../../contexts/contexts";

function Boardname() {
  const { isDarkTheme, setTheme, handleClick } = useContext(ThemeContext);
  const boardData = useGetBoardData();
  const [activeBoardId, setActiveBoard] = useState();

  function handleBoardClick(board_id) {
    setActiveBoard(board_id);
  }

  return (
    <div className="flex flex-col gap-14">
      {isDarkTheme ? (
        <img src={DarkLogo} alt="logo" className="w-28" />
      ) : (
        <img src={lightLogo} alt="logo" className="w-28" />
      )}
      <div>
        <p className="text-gray-400 text-sm">ALL BOARDS </p>

        {boardData
          ? boardData.map((board) => {
              return (
                <div
                  key={board.board_id}
                  className={`flex gap-4 -ml-7 p-2 pl-7 ${
                    activeBoardId === board.board_id
                      ? "text-white bg-main_purple rounded-r-full"
                      : "text-gray-500"
                  }`}
                  onClick={() => {
                    handleBoardClick(board.board_id);
                  }}
                >
                  <BoardIcon />
                  <p className="">{board.board_name}</p>
                </div>
              );
            })
          : "Loading..."}
      </div>
    </div>
  );
}

export default Boardname;
