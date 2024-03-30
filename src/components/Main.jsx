import React from "react";

function Main(props) {
  let classTotal = 0;

  for (let i =0; i < props.dogs.length; i++){
    classTotal+= parseInt(props.dogs[i].grade);

  } 
    classTotal= classTotal / props.dogs.length;
  return (
    <main>
      <h2>Class Average:{classTotal}</h2>
      <h3>Notable performances and grades:</h3>
      {/* <ul>{props.dogs.map(y => <li>{y.notes}</li>)}</ul> */}
      <ul>{props.dogs.map(dog => {return dog.present === true ? <li key= {dog.name}>{dog.name} {dog.notes && <span> - Notes: {dog.notes} </span>} {dog.grade && <span> - Grades: {parseInt(dog.grade)}</span>}
       </li> : null})}
       </ul>

  
    </main>
  );
  }

export default Main;
 
