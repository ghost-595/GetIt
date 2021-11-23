import { ReactElement } from "react";
import { useHistory } from "react-router-dom";

function test(): ReactElement {
  const history = useHistory();

  return (
    <div>
      <h1>Test</h1>
      <button onClick={() => {history.goBack();}}> Go Back </button>
    </div>
  );
}

export default test;
