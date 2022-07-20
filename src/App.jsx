import logo from './logo.svg';
import './App.css';
import { team } from './data/team.js';
import { useState } from 'react';
import Employee from './Components/Employee/Employee';
import Employees from './Components/Employees';
import Searchbar from './Components/Searchbar/Searchbar';
import Dropdown from './Components/Dropdown/Dropdown';

function App() {
  ////////////////////////////////////////////////////
  const [searchTerm, setSearchTerm] = useState('');

  const handleInput = (event) => {
    const cleanInput =
      event.target.value.substring(0, 1).toUpperCase() + event.target.value.slice(1);
    setSearchTerm(cleanInput);
  };

  /////////////////////////////////////////////////

  const [filterTerm, setFilterTerm] = useState('');

  const handleSelection = (event) => {
    const selection = event.target.value;
    console.log(selection);
    setFilterTerm(selection);
  };

  ///////////////////////////////////////////////
  const filteredEmployees = team.filter((employee) => {
    return employee.name.includes(searchTerm) && employee.role.includes(filterTerm);
  });

  return (
    <div className="App">
      <Searchbar className="app-search" searchTerm={searchTerm} handleInput={handleInput} />
      <Dropdown className="app-search" filterTerm={filterTerm} handleSelection={handleSelection} />
      <Employees arr={filteredEmployees} />
    </div>
  );
}

export default App;
