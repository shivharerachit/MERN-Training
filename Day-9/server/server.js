const http = require('http');
const port = 2000;

const server = http.createServer((req, res) => {
    res.write('Hello World');
    res.end('\nServer is running');
});
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});