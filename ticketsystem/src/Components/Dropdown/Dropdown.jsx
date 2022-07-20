import './_Dropdown.scss';
import { useState } from 'react';
import { team } from '../../data/team';

const Dropdown = props => {
  
    const { handleSelection, filterTerm } = props;
    const roles = [];
    const finalRoles = [];
    ///Get unique roles as literal value
    team.forEach((employee) => {

            if(!roles.includes(employee.role)) 
            { roles.push(employee.role); }
    })
    ///Map unique roles as <options>
    roles.forEach(role => {

        finalRoles.push(<option>{role}</option>);
    })
    

  return ( <div className="dropdown-box">
                <fieldset>
                     <legend className="dropdown__title">Filter by role:</legend>
                    <select value={filterTerm} onChange={handleSelection} className="dropdown" > 
                        <option></option>
                        {finalRoles}
                    </select>
                </fieldset>
            </div> )
};

export default Dropdown;