import React from "react";
import { SignInWithGoogle } from "../firebase";

export default function Signin() {
  return <button onClick={SignInWithGoogle}>Signin</button>;
}
