import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import PrivateRoute from './components/HOC/PrivateRoute';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
