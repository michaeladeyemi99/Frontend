import MainBoard from "../components/MainBoard/MainBoard";
import Sidebar from "../components/Sidebar/Sidebar";

function Board() {
  return (
    <div className="flex">
      <Sidebar />
      <MainBoard />
    </div>
  );
}

export default Board;
