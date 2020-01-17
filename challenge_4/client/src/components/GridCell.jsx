var GridCell = (props) => {
  // <div class="box" data-col={props.values.column}>|{props.values.value}|{props.values.column}|</div>
  if (props.values.value === 1) {
    return (<div class="yellow" data-col={props.values.column} data-val={props.values.value}>o</div>);
  } else if (props.values.value === 2) {
    return (<div class="red" data-col={props.values.column} data-val={props.values.value}>o</div>);
  } else {
    return (<div class="blank" data-col={props.values.column} data-val={props.values.value}>o</div>);
  }
};

export default GridCell;