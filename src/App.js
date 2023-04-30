
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AddTodo from './Todo/AddTodo';
import EditTodo from './Todo/EditTodo';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/addtodo" element={<AddTodo/>}/>
         <Route exact path="/editTodo/:id" element={<EditTodo/>}/>
      </Routes>
   
      </Router>
   
    </div>
  );
}

export default App;
