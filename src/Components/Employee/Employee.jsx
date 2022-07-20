import './Employee.scss';
import { useState } from 'react';

const Employee = ({ name, role }) => {
  const [tickets, setTickets] = useState(0);

  const handleTicketInc = () => {
    setTickets(tickets + 1);
  };

  const handleTicketDec = () => {
    return tickets == 0 ? setTickets(0) : setTickets(tickets - 1);
  };

  return (
    <div className="employee-card">
      <fieldset className="employee-card__display">
        <legend className="employee-card__name">{name} </legend>
        <p className="employee-card__role">{role} </p>
      </fieldset>
      <p className="employee-card__ticket-count" tickets={tickets}>
        {tickets}
      </p>
      <button className="employee-card__button employee-card__decrement" onClick={handleTicketDec}>
        -
      </button>
      <button className="employee-card__button employee-card__increment" onClick={handleTicketInc}>
        +
      </button>
    </div>
  );
};

export default Employee;
