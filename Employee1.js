function displayEmployee(emp) {
    console.log("Employee Details")
    console.log("Name: " + emp.name)
    console.log("ID: " + emp.id)
    console.log("Designation: " + emp.desgn)
}

const emp = {
    name: "qwerty",
    id: 879,
    desgn: "cvbn"
}
displayEmployee(emp)