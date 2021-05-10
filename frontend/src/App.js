import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import UsersTable from './UsersTable';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Homepage from './homepage'
import Minesweeper from './minesweeper';

function App() {
  return (
    <Router>
          <Switch>
          <Route exact path= "/">
              <SignIn />
            </Route>

            <Route path= "/SignUp">
              <SignUp />
            </Route>

            <Route path= "/homepage">
              <Homepage />
            </Route>

            <Route path= "/Minesweeper">
              <Minesweeper />
            </Route>

          </Switch>
        </Router>
  );
}

export default App;
