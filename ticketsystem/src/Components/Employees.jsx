import { useState } from "react";
import Employee from "./Employee/Employee";
import "./Employees.scss";
import team from "../data/team.js"

const Employees = () => {
  
    const [tickets, setTickets] = useState(0);

    const handleTicketInc = () => {

      setTickets(tickets+1);
    }

    const handleTicketDec = () => {

      setTickets(tickets-1);
    }

  return (
    
  <div className="employees">
    {team.map(employee => {
      return (
        
        
        <div className="employee-card">
        <fieldset>
          <legend className="employee-card__name">{employee.name} </legend>
          <p className="employee-card__role">{employee.role} </p>
        </fieldset>
        <p className="employee-card__ticket-count" tickets={tickets}>{tickets}</p>
        
        <button className="employee-card__button employee-card__decrement" onClick={handleTicketDec}>-</button>
        <button className="employee-card__button employee-card__increment" onClick={handleTicketInc}>+</button>
    </div>
      )
      })
    

}
</div>
)}

export default Employees