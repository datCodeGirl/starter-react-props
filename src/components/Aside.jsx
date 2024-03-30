

function Aside(props) {
  return (
    <aside>
      <h3>Roster:</h3>
      {/* <ol>{props.dogs.map(x => <li>{x.name}</li>)}</ol> */}
      <ul>{props.dogs.map(x => { return x.present === true ? <li>{x.name}</li> : null })}</ul> 
    </aside>
  );
}

export default Aside;
