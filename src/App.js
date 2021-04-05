import Login from "./pages/Login/Login"
import Dashboard from "./Dashboard/Dashboard"
import { Switch, Route } from "react-router-dom"
import Signup from "./pages/Signup/Signup"


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/signup" component={Signup}/>
      </Switch>
      
    </div>
  );
}

export default App;
