import React from "react";
import Card from './components/card'
import Data from './data.json'
import Card2 from './components/card2'
import State from './state'

let items = [];
for(let x=0; x<Data.length; x++){
    items.push(<Card texttitle={Data[x].title} textdes={Data[x].desc} />)
}

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

        {/* for forloop */}
        <h1 className="heading">Todoo App 3</h1>
        {items}
        
        {/* for maping data using this code */}
        <h1 className="heading">Todoo App 4</h1>
        {Data.map((item, index) =><Card key={index} texttitle={item.title} textdes={item.desc} />)}

        {/* using class for call component */}
        <h1 className="heading">Using class for call component</h1>
        <Card2 text="Father & Mother" des="an i am description" />

        {/* now we start thge state and call the component and change when we search any value or keyword */}
        <h1 className="heading">Hare is the work about the state</h1>
        <State />
</div>
}

export default App;