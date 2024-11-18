const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

async function BoardData(user_id) {
  try {
    const response = await fetch(`${BACKEND_URL}/api/users/${user_id}/boards`);
    if (!response.ok) {
      return "The response not okay";
    }
    const data = await response.json();
    // console.log("Fetched Board Data", data);
    return data;
  } catch (error) {
    console.error("There is an error", error);
    return null;
  }
}

// Custom Hooks that I have to export
function useGetBoardData() {
  const [boardData, setBoard] = useState(null);

  const params = useParams();
  const user_id = params.id;

  useEffect(() => {
    async function fetchBoards() {
      if (user_id) {
        const newboardData = await BoardData(user_id);
        console.log(newboardData);
        setBoard(newboardData);
      }
    }

    fetchBoards();
  }, [user_id]);

  return boardData;
}




export { useGetBoardData };
