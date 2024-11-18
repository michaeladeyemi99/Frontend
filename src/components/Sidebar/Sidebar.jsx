import BoardForm from "./Boardform";
import Boardname from "./Boardname";
import ControlTheme from "./ControlTheme";

function Sidebar() {
  return (
    <div className="pl-7 flex flex-col gap-10 pt-7 w-2/12 bg-white dark:bg-black h-screen border-r-2">
      <Boardname />
      <div  className="flex flex-col gap-96">
        <BoardForm />
        <ControlTheme />
      </div>
    </div>
  );
}

export default Sidebar;
