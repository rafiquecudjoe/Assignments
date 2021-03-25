import Login from "./pages/Login/Login"
import Dashboard from "./Dashboard/Dashboard"
import {Switch, Route} from "react-router-dom"


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard}/>
      </Switch>
      
    </div>
  );
}

export default App;
