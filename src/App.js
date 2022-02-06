import { useRef, useState } from "react";
import { signUp, logIn, useAuth, logOut } from "./firebase";

export default function App() {

  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignUp() {
    setLoading(true);
    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch (err) {
      alert(`u got an error bruv: ${err}`);
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await logIn(emailRef.current.value, passwordRef.current.value);
    } catch (err) {
      alert(`u got an error bruv: ${err}`);
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logOut();
    } catch (err) {
      alert(`Logout error m8: ${err}`);
    }
    setLoading(false);
  }

  return (
    <div className="App">

      <div>Currently logged in as: {currentUser?.email}</div>

      <div className="field">
        <input ref={emailRef} type="email" placeholder="email"/>
        <input ref={passwordRef} type="password" placeholder="password"/>
      </div>

      <button disabled={ loading || currentUser } onClick={handleSignUp}>Sign Up</button>

      <button disabled={ loading || currentUser } onClick={handleLogin}>Login</button>

      <button disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>
    </div>
  );
}
