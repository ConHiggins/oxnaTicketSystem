import logo from './logo.svg';
import './App.css';
import {team} from './data/team.js';
import Employee from './Components/Employee/Employee';
import Employees from './Components/Employees';



function App() {

  return (
    <div className="App">

      <Employees  />
      
    </div>
  );
}

export default App;
