import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./contexts/contexts";
import { useContext } from "react";
import { loginUser } from "./services/Auth";
import { getIdforEmail } from "./services/Data";


function App() {
  const { setUserDetails } = useContext(UserContext); // State to hold the user data
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        
        // Run something to get the ID that is associated with the email
        async function fetchUserId() {
          console.log("About to run the GetId function");
          const user_id = await getIdforEmail(currentUser.email);
          console.log("This is the id" + user_id);
          console.log(
            `This is the Email because there is an Email ${currentUser.email}`
          );

          setUserDetails({
            email: currentUser.email,
            user_id: user_id,
          });

          navigate(`/boards/${user_id}`);
        }

        fetchUserId();
        // ...
      } else {
        setUserDetails(null);
        console.log("There is no Email so null");
        navigate("/login_signup");
      }
    });
    return () => {
      unsubscribe();
    };
  }, [navigate, setUserDetails]);

  return null;
}

export default App;
