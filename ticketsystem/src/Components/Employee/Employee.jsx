import "./Employee.scss";
import { useState } from "react";

const Employee = (name, role) => {

    const [tickets, setTickets] = useState(0);

return (

    <div className="employee-card">
        <p className="employee-card__name">{name} </p>
        <p className="employee-card__role">{role} </p>
        <p className="employee-card__ticket-count">{tickets}</p>
        <button className="employee-card__button employee-card__increment">-</button>
        <button className="employee-card__button employee-card__decrement">+</button>
    </div>
)

}

export default Employee;