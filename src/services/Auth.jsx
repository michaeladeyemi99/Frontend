import auth from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { checkUserEmailForSignIn, checkUserforLogIn, postUser } from "./Data";

async function createUser(userDetails, username) {
  const { email, password } = userDetails;

  // This is to check if the Email Exist in the Database
  const exist = await checkUserEmailForSignIn(email);

  if (exist) {
    alert("Looks like you have an account already, please login");
    return null;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const user_UID = user.uid;
    console.log(user_UID);

    await postUser(username, email, user_UID);
    console.log("User has been posted");

    // Get Mew User ID
    const currentUser = await checkUserforLogIn(email);
    console.log("Check current User");
    const newUser_id = currentUser.user_id;

    console.log(newUser_id);

    return newUser_id;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`There is an error ${errorMessage}`);
  }
}

async function loginUser(userDetails) {
  const { email, password } = userDetails;

  const currentUser = await checkUserforLogIn(email);
  if (!currentUser) {
    alert("Looks like you do NOT have an account, please Sign Up");
    return null;
  }
  const newUser_id = currentUser.user_id;
  console.log(currentUser.user_name);
  console.log(currentUser.user_email);
  // console.log(currentUser.user_UID)

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed in
    console.log("Voila!!! You are logged In");
    const user = userCredential.user;
    console.log(newUser_id);
    return newUser_id;
  } catch (error) {
    alert("The is a problem login in, please check Password");
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  }
}



export { createUser, loginUser };
