import './App.css';
//import UsersTable from './UsersTable';
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignIn from './SignIn';
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path= "/">
        <SignUp/>
        </Route>

        <Route path= "/SignIn">
          <SignIn />
        </Route>
        
      </Switch>
    </Router> 
  );
}


export default App;
