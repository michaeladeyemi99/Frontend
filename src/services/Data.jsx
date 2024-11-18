const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// This is a function to check if the User have an accout with us using their EMAIL
async function checkUserEmailForSignIn(email) {
  const response = await fetch(`${BACKEND_URL}/api/users/getallusers`);

  if (!response.ok) {
    return "There is an issue with getting all the User's email";
  }

  const data = await response.json();
  const users = data["users"];
 

  const exist = users.find((user) => user.user_email === email);

  if (exist) {
    console.log("Username is in the database");
    return true;
  } else {
    console.log("Not Found");
    return false;
  }
}

async function checkUserforLogIn(email) {
  const response = await fetch(`${BACKEND_URL}/api/users/getallusers`);

  if (!response.ok) {
    return "There is an issue with getting all the User's email";
  }
  const data = await response.json();
  //   console.log(data);
  const users = data["users"];

  const currentUser = users.find((user) => user.user_email === email);

  if (currentUser) {
    return currentUser;
  } else {
    console.log("The Current User is not found");
    return;
  }
}

// Add User to the Database
async function postUser(user_name, email, user_UID) {
  const response = await fetch(`${BACKEND_URL}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_name: user_name,
      user_email: email,
      user_UID: user_UID,
    }),
  });


}

// This is to check if the ID associated with the email
async function  getIdforEmail(email) {
  const response = await fetch(`${BACKEND_URL}/api/users/getallusers`)

  const data = await response.json()
  // console.log(data)
  
  const users = data["users"]
  console.log(users)

  const user = users.find((user) => {
    return user.user_email === email
  })
 
  console.log(`This is the user ${user}`)
  const user_id = user ? user.user_id : undefined
  console.log(user_id)
  return (user_id)
}

export { checkUserEmailForSignIn, postUser, checkUserforLogIn, getIdforEmail };
