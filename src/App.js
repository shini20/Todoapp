import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Signup from "./Routes/Signup";
import TodoForm from "./Routes/TodoForm";
import Todo from "./Routes/Todo";
import TodoApp from "./Routes/TodoApp";


const App = () => {
  
  return (
    <Router>
      
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/todo-app" component={TodoApp}/>
        <Route path="/todo-form" component={TodoForm}/>
        
        <Route path="/todo" component={Todo}/>


        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}
export default App;
