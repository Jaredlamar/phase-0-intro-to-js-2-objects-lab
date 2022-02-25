// Write your solution in this file!
const employee = {
    name: "John",
    streetAddress: "10 Maple Street",
}

function updateEmployeeWithKeyAndValue(employee,name,streetAddress){
    const newEmployee = {...employee};
    newEmployee[name] = "Sam"
    newEmployee[streetAddress] = "11 Broadway"
    return newEmployee;
}
