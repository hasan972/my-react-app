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
</div>
}

export default App;