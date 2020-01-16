const server = require('../server.js');
const port = 1234;

server.listen(port, () => console.log(`Server listening on port ${port} (http://localhost:${port}/)`));

class App extends React.Component {

}