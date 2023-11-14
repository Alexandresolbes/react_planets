import {React, useState} from 'react';
import sirius from '../src/images/sirius.jpg';


const Planets = () => {
  const planet_List = [
    {name: "Mercury", size: 0.055, moons: 0, material: "rock"},
    {name: "Venus", size: 0.815, moons: 0, material: "rock"},
    {name: "Earth", size: 1, moons: 1, material: "rock"},
    {name: "Mars", size: 0.107, moons: 2, material: "rock"},
    {name: "Jupiter", size: 317.8, moons: 79, material: "gas"},
    {name: "Saturn", size: 95.2, moons: 82, material: "gas"},
    {name: "Sirius", size: 14.5, moons: 27,material: "rock"} ];


    const [filter, setFilter] = useState("");
    // const filteredPlanets = planet_List.filter(planet => filter === "" || planet.material === filter);

    return (
        <div>
            <h1>Planets</h1>
            <div>
                <img src={sirius} alt="Solar System" />
                <button onClick={() => setFilter("")}>All</button>
                <button onClick={() => setFilter("rock")}>Rock</button>
                <button onClick={() => setFilter("gas")}>Gas</button>
            </div>
        </div>
    );
}

export default Planets;
