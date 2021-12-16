import { useHistory } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';

export default function App() {
  const history = useHistory();

  const { loginWithRedirect } = useAuth0();

  function login() {
    loginWithRedirect();
    history.push("/test", { from: "Hello" });
  };

  return (
    <div>
      <div>
        <h1 id="title">GetIt</h1>
      </div>
      <div className="buttonDiv">
        <button onClick={() => login()}>
          Login
        </button>
      </div>
    </div>
  );
}
