import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css';

const animalList = ['cat','dog','bird','cow','gator','horse'];

const getrandomanimal = ()=>{
    return animalList[Math.floor(Math.random()*animalList.length)];
}

const App = ()=>{
    const [animal,setAnimal] = useState([]);
    const handleclick = ()=>{
        setAnimal([...animal,getrandomanimal()]);
    }
    const renderAnimal = animal.map((item,index)=><AnimalShow type = {item} key={index}/>);

    return(
        <div className="app">
            <button onClick={handleclick}>Add Animals</button>
            <div>now we have {animal.length} animals.</div>
            <div className="animal-list">{renderAnimal}</div>
        </div>
    )
}

export default App;