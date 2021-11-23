import { render } from 'react-dom';
import {
  MemoryRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import App from './App';
import Test from './testComponent';

render(<Router>
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/test" component={Test} />
  </Switch>
</Router>, document.getElementById('root'));
