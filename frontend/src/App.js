import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import UsersTable from './UsersTable';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Homepage from './Homepage'
import Minesweeper from '../src/GameComponents/Minesweeper';

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

            {/* <Route path= "/homepage">
              <Homepage />
            </Route> */}
            <Route
                    path="/Homepage"
                    component={Homepage}
                  />

            <Route
                    path="/Minesweeper/:difficulty"
                    component={Minesweeper}
                  />           
          </Switch>
        </Router>
  );
}

export default App;
