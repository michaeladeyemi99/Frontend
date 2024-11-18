import { useContext, useState } from "react";
import { UserContext } from "../../contexts/contexts";
import Input from "./Input";
import Button from "./Button";
import { createUser, loginUser } from "../../services/Auth";
import { useNavigate } from "react-router-dom";


function FormContents() {
  const user = useContext(UserContext);
  const navigate = useNavigate()

  const { userDetails, setUserDetails, handleChange } = user;

  // Handle States for Form Contents
  const [entry, setEntry] = useState(true);
  const [internalChange, setInternalChange] = useState({
    username: "",
    confirmpassword: "",
  });

  function handleClick() {
    return setEntry((prevValue) => !prevValue);
  }

  function handleInternalChange(event) {
    const { name, value } = event.target;

    setInternalChange((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const { password, email } = userDetails;
    const { confirmpassword, username } = internalChange;
    if (entry) {
      if (password === confirmpassword || password.length < 6) {
        const newUserId = await createUser(userDetails, username);
        navigate(`/boards/${newUserId}`)
      }
    } else {
      // console.log("about to enter login part")
      // console.log(userDetails.email)
      const oldUserId = await loginUser(userDetails);
      navigate(`/boards/${oldUserId}`)
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-10/12 md:w-8/12 mt-32">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1 className="text-center text-4xl">
            {entry ? "Sign In" : "Log In"}
          </h1>
          <Input
            name="email"
            placeholder="Email"
            type="email"
            required
            value={userDetails?.email || ""}
            onChange={handleChange}
          />

          {entry ? (
            <Input
              name="username"
              placeholder="Username"
              type="text"
              value={internalChange.username}
              onChange={handleInternalChange}
            />
          ) : (
            ""
          )}

          <Input
            name="password"
            placeholder="Password"
            type="password"
            value={userDetails?.password || ""}
            onChange={handleChange}
          />

          {entry ? (
            <Input
              name="confirmpassword"
              placeholder="Confirm Password"
              type="password"
              value={internalChange.confirmpassword}
              onChange={handleInternalChange}
            />
          ) : (
            ""
          )}
          <Button type="submit" name={entry ? "Sign In" : "Log In"} />

          {entry ? (
            <p>
              Have an Account?{" "}
              <span
                className="text-blue-700 cursor-pointer"
                onClick={handleClick}
              >
                Log In
              </span>
            </p>
          ) : (
            <p>
              Don't have an Account?{" "}
              <span
                className="text-blue-700 cursor-pointer"
                onClick={handleClick}
              >
                Sign Up
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default FormContents;
