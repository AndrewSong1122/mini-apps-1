import GridCell from './GridCell.jsx'
import GridRow from './GridRow.jsx'

class ConnectFour extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlayer: 1, // 0 = unoccupied space; 1 = yellow; 2 = red
      occupiedSpaces: 0,
      grid: [[0, 0, 0, 0, 0, 1], // start at grid[0][col.length-1] (each row in matrix is column of game grid)
             [0, 0, 0, 0, 2, 0], //          grid[1][col.length-1] ... until grid[6][col.length-1]
             [0, 0, 0, 1, 0, 0], //  then go grid[0][col.length-2] ... grid[6][col.length-2]
             [0, 0, 2, 0, 0, 0], // build rows from left->right top-> (rotate matrix counter-clockwise)
             [0, 1, 0, 0, 0, 0], // initialize with zeroes for empty spaces, when a piece is added then row[indexOf(0)] is changed
             [2, 0, 0, 0, 0, 0],
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
    grid = this.state.grid;
    occupiedSpaces = this.state.occupiedSpaces;
    if (grid[col].indexOf(0) === -1) {
      return;
    }
    grid[col][grid[col].indexOf(0)] = val;
    var player = (val === 1) ? 1 : 2;
    occupiedSpaces++;

    this.setState({
      currentPlayer: player,
      occupiedSpaces: occupiedSpaces,
      grid: grid
    });
  }

  render() {
    var grid = this.buildGrid();
    return (
      <div className="grid">
        Connect 4
        {
          grid.map(row => <GridRow handleClick={this.addPiece} row={row} />)
        }
      </div>
    );
  }
}

export default ConnectFour;