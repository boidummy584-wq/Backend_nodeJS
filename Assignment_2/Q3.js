const http = require('http');
const PORT = 3000
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('Hello Students')
    res.end()
})
console.log(`Server is running at http://localhost--:${PORT}`)