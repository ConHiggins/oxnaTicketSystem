import logo from './logo.svg';
import './App.css';
import {team} from './data/team.js';
import { useState } from 'react';
import Employee from './Components/Employee/Employee';
import Employees from './Components/Employees';
import Searchbar from './Components/Searchbar/Searchbar';



function App() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleInput = (event) => {
    const cleanInput =
      event.target.value.substring(0, 1).toUpperCase() +
      event.target.value.slice(1);
    setSearchTerm(cleanInput);
  };

  const filteredEmployees = team.filter(employee => {

    return employee.name.includes(searchTerm);
  })

  return (
    <div className="App">

      <Searchbar searchTerm={searchTerm} handleInput={handleInput} />
      <Employees arr={filteredEmployees} />
      
    </div>
  );
}

export default App;
