import GridCell from './GridCell.jsx'
import GridRow from './GridRow.jsx'

class ConnectFour extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlayer: 1, // 0 = unoccupied space; 1 = yellow; 2 = red
      occupiedSpaces: 0,
      grid: [[0, 0, 0, 0, 0, 0], // start at grid[0][col.length-1] (each row in matrix is column of game grid)
             [0, 0, 0, 0, 0, 0], //          grid[1][col.length-1] ... until grid[6][col.length-1]
             [0, 0, 0, 0, 0, 0], //  then go grid[0][col.length-2] ... grid[6][col.length-2]
             [0, 0, 0, 0, 0, 0], // build rows from left->right top-> (rotate matrix counter-clockwise)
             [0, 0, 0, 0, 0, 0], // initialize with zeroes for empty spaces, when a piece is added then row[indexOf(0)] is changed
             [0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0]]
    };
  }

  rowArray(c) {
    var out = [];
    for (var r = 0; r < 7; r++) {
      out.push({value: this.state.grid[r][c], column: r+''});
    }
    return out;
  }

  buildGrid() {
    var out = [];
    for (var c = 5; c >= 0; c--) {
      out.push(this.rowArray(c));
    }

    return out;
  }

  addPiece(col, val = this.state.currentPlayer) {
    console.log('a column was clicked');
    var grid = this.state.grid;
    var occupiedSpaces = this.state.occupiedSpaces;
    var row = grid[col].indexOf(0);
    if (row === -1) {
      return;
    }
    grid[col][row] = val;
    var player = (val === 1) ? 2 : 1;
    occupiedSpaces++;

    this.setState({
      currentPlayer: player,
      occupiedSpaces: occupiedSpaces,
      grid: grid
    });

    // check for a winner
    // checkWinner(row, col)
  }

  checkWinner(row, col) {
    var grid = this.state.grid;
  }

  render() {
    var grid = this.buildGrid();
    return (
      <div className="grid">
        <h1 onClick= {() => {console.log('header click')}}>Connect 4</h1>
        {
          grid.map(row => <GridRow handleClick={this.addPiece.bind(this)} row={row} />)
        }
      </div>
    );
  }
}

export default ConnectFour;