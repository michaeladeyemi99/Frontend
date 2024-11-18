import { useContext, useEffect, useState } from "react";
import { DarkTheme, LightTheme } from "./Icons";
import { ThemeContext } from "../../contexts/contexts";

function ControlTheme() {
  const  { isDarkTheme, setTheme, handleClick } = useContext(ThemeContext)

  return (
    <div className="bg-gray-200 -ml-3 mr-4 flex justify-center p-2">
      <div className="flex gap-3">
        <LightTheme />
        <form>
          <label
            htmlFor="theme"
            className={`w-8 h-4 relative bg-main_purple block rounded-full after:content-[''] after:w-3 after:h-3 after:rounded-full after:bg-white after:absolute after:top-0.5 ${
              isDarkTheme ? "after:right-0.5" : "after:left-0.5"
            }`}
          ></label>

          <input
            type="checkbox"
            name="theme"
            className="hidden"
            id="theme"
            onClick={handleClick}
          />
        </form>
        <DarkTheme />
      </div>
    </div>
  );
}

export default ControlTheme;
