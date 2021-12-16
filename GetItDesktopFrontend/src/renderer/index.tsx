import ReactDOM from 'react-dom';
import {
  MemoryRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App';
import Test from './testComponent';

ReactDOM.render(

  <Auth0Provider
    domain="dev-qqs-qwj8.us.auth0.com"
    clientId="EGvRtf8a1eeMaoyKtHHsoG2XKQCnirw0"
    redirectUri={window.location.origin}
  >
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </Router>
    </Auth0Provider>,
    document.getElementById('root')

);
