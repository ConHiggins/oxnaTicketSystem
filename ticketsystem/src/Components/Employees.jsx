import { useState } from "react";
import Employee from "./Employee/Employee";
import "./Employees.scss";
import {team} from "../data/team.js";

const Employees = () => {
  
 
const employeeCards =  team.map(employee =>  (<Employee name={employee.name} role={employee.role} />));

  return (


  <div className="employees">
   {employeeCards};

  </div>
)}

export default Employees