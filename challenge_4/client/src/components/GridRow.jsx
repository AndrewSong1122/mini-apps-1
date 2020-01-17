import GridCell from "./GridCell.jsx"

var GridRow = (props) => (
  <div>
  {props.row.map(space => <GridCell handleClick={props.handleClick} values={space}/>)}
   {/* {props.row.map(space => <div class="box">|{space}|</div>)} */}
  </div>
);

export default GridRow;