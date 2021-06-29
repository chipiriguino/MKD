import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "animate.css/animate.min.css";
import Home from './screens/Home';
import Main from './components/Main';
import Cookies from './components/Cookies'

function App() {
  return (
    <div>
       <BrowserRouter>
     <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/main" component={Main}/>
          <Route exact path="/cookies" component={Cookies}/>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
