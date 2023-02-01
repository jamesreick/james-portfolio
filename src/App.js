import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
          <Switch>
            <Route path='/'></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
