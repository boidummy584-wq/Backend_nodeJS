const fs = require('fs')
const data = fs.readFileSync('students.csv', 'utf8');
console.log('Data read from students.csv:');
console.log(data);