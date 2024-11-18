import Form from "../components/Form/Form";

import { useContext, useState } from "react";
import { UserContext } from "../contexts/contexts";
import { Link, Navigate } from "react-router-dom";

function Login_Signup() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default Login_Signup;
