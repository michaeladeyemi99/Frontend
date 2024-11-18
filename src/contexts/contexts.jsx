import { useState, createContext, useEffect } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  // console.log("You are about to see the user Details that contain email")
  // console.log(userDetails);
  // console.log ("Context is provided")

  function handleChange(event) {
    const { name, value } = event.target;
    event.preventDefault();
    setUserDetails((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }
  useEffect(() => {
    // console.log("No Error in Context");
  }, [userDetails]);

  const value = { userDetails, setUserDetails, handleChange };

  return <UserContext.Provider value={value}>{children} </UserContext.Provider>;
}


const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isDarkTheme, setTheme] = useState(false);

  function handleClick() {
    setTheme((prevValue) => !prevValue);
  }

  useEffect(() => {
    const html_tag = document.documentElement;
    isDarkTheme
      ? html_tag.classList.add("dark")
      : html_tag.classList.remove("dark");
  }, [isDarkTheme]);

  const value = { isDarkTheme, setTheme, handleClick };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { UserContext, UserProvider, ThemeContext, ThemeProvider };
