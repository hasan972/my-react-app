import React from "react";
import Card from './components/card'
import Data from './data.json'

console.log(Data)

function App(){
return <div>
    <h1 className="heading">Todoo App</h1>
    <Card />
    <Card texttitle="tite 2" textdes="description 2"/>
    <Card texttitle="tite 2" textdes="description 2"/>
     
     {/* using this for loded the json data */}
     <h1 className="heading">Todoo App 2</h1>
     <Card texttitle={Data[0].title} textdes={Data[0].desc} />
     <Card texttitle={Data[1].title} textdes={Data[1].desc} />
     <Card texttitle={Data[2].title} textdes={Data[2].desc} />
     <Card texttitle={Data[3].title} textdes={Data[3].desc} />
</div>
}

export default App;