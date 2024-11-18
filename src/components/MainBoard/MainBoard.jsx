import TopBar from "./TopBar";
import ViewBoard from "./ViewBoard";

function MainBoard() {
  return (
    <div className="w-10/12 h-screen flex flex-col">
      <TopBar />
      <ViewBoard />{" "}
    </div>
  );
}

export default MainBoard;
