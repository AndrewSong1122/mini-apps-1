var GridCell = (props) => {
  // <div class="box" data-col={props.values.column}>|{props.values.value}|{props.values.column}|</div>
  var handleClick = function () {
    props.handleClick(props.values.column);
  }

  if (props.values.value === 1) {
    return (<div className="space yellow" onClick={handleClick} data-col={props.values.column} data-val={props.values.value}>o</div>);
  } else if (props.values.value === 2) {
    return (<div className="space red" onClick={handleClick} data-col={props.values.column} data-val={props.values.value}>o</div>);
  } else {
    return (<div className="space" onClick={handleClick} data-col={props.values.column} data-val={props.values.value}>o</div>);
  }
};

export default GridCell;