import { useHistory } from 'react-router-dom';
import './App.css';

export default function App() {
  const history = useHistory();

  return (
    <div>
      <div>
        <h1 id="title">GetIt</h1>
      </div>
      <div className="buttonDiv">
        <button onClick={() => history.push("/test", { from: "Hello" })}>
          Login
        </button>
      </div>
    </div>
  );
}
