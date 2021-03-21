import { getByTitle } from "@testing-library/dom";

//js code
const date = new Date();
const fullyer = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
//create component

 function Cardfun(props){
   const {texttitle, textdes} = props;

   return <div className="card">
   <h2 className="card-heading">{texttitle}</h2>
   <h3 className="card-write">{textdes}</h3>
   <p className="time">{fullyer+"/" + month+"/"+day}</p>
 </div>
 }

export default Cardfun;