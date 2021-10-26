import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


import Home from './pages';
import SignIIn from './pages/signin';

function App() {
  return (
    <Router>
      
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/signin' component={SignIIn} exact/>
      </Switch>
     </Router>
  );
}

export default App;
