import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './screens/Home';
import Main from './components/Main'

function App() {
  return (
    <div>
       <BrowserRouter>
     <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/main" component={Main}/>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
