const fs = require('fs');
const csvdata = `Name,Marks
Alice,85
Bob,92
Charlie,78
Diana,90`;

fs.writeFileSync('students.csv', csvdata, 'utf8');
console.log('created successfully.');