const server = require('../server.js');
const port = 3000;

server.listen(port, () => console.log(`Server listening on port ${port}!`));
console.log(__dirname);