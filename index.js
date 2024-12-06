// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  

let employee = {
    name:'Ann',
    streetAddress:'44 nrb street'
};



function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Directly modifies the original employee object
    return employee;       // Returns the modified object
  }
  
  // Example usage:
  let employees = {
    name: "Sam",
    streetAddress: "12 Broadway"
  };
    


//deleteFromEmployeeByKey(employee, key)
function deleteFromEmployeeByKey (employee, key)  {
    const newEmployee = { ...employee};
    delete newEmployee[key];
    return newEmployee;
}

let employeet = {
    name:"Sam",
    streetAddress:"12 Broadway"
};
    
 
//destructivelyDeleteFromEmployeeByKey(employee, key)
function destructivelyDeleteFromEmployeeByKey  (employee, key) {
    delete employee[key];
    return employee;
}
