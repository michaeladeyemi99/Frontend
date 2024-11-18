////======== This is for the Add New Board Section ===================

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

async function addNewBoard(boardName, user_id) {
  try {
    console.log("About to Send Board Data to database");
    const response = await fetch(`${BACKEND_URL}/api/users/boards`, {
      method: "POST",
      body: JSON.stringify({
        board_name: boardName,
        user_id: user_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to Add board");
    }
    console.log("Successfully sent Data to Data Base");
  } catch (error) {
    console.log("There is an Error", error);
  }
}

export { addNewBoard };
