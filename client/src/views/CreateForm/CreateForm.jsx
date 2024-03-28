import useTypes from "../../hooks/useTypes";
import { useState } from "react";
import axios from "axios";


const Create = () => {

    const { types } = useTypes();

    const [input, setInput] = useState({
        name: "",
        image: "https://i.pinimg.com/564x/27/1a/a1/271aa189ed49f37b2e2d00daed9f19b5.jpg",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
    });
    
    const [errors, setErrors] = useState({
        name: "",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: "",
    });
    
  
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,

        });
    };

   

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {}
        if (!input.name){ 
            validationErrors.name = 'Name is required';
        } else if (input.name.length < 3) {
            validationErrors.name = 'Name is too short';
            } else if (input.name.length > 18) {
            validationErrors.name = 'Name is too long';     
                }
        if (!input.hp){
            validationErrors.hp = 'Hp is required';
        } else if (input.hp < 1 || input.hp > 255) {
            validationErrors.hp = 'Hp must be between 1 and 255';
        }
        if (!input.attack){
            validationErrors.attack = 'Attack is required';
        } else if (input.attack < 1 || input.attack > 255) {
            validationErrors.attack = 'Attack must be between 1 and 255';
        }
        if (!input.defense){
            validationErrors.defense = 'Defense is required';
        } else if (input.defense < 1 || input.defense > 255) {
            validationErrors.defense = 'Defense must be between 1 and 255';
        }
        if (!input.speed){
            validationErrors.speed = 'Speed is required';
        } else if (input.speed < 1 || input.speed > 255) {
            validationErrors.speed = 'Speed must be between 1 and 255';
        }
        if (!input.height){
            validationErrors.height = 'Height is required';
        } else if (input.height < 1 || input.height > 255) {
            validationErrors.height = 'Height must be between 1 and 255';
        }
        if (!input.weight){
            validationErrors.weight = 'Weight is required';
        } else if (input.weight < 1 || input.weight > 255) {
            validationErrors.weight = 'Weight must be between 1 and 255';
        }
        
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            axios.post("http://localhost:3001/pokemons", input)
            alert('Pokemon created')
            setInput({
                name: "",
                image: "",
                hp: "",
                attack: "",
                defense: "",
                speed: "",
                height: "",
                weight: "",
                types: [],
            });

        };

    };

    const handleSelect = (e) => {
        setInput({
            ...input,
            types: [...input.types, e.target.value],
        });
    };

    const handleDelete = (e) => {
        setInput({
            ...input,
            types: input.types.filter((type) => type !== e.target.value),
        });
    };


    
    return (
        <div >
        <h1>Create Pokemon</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
            </div>
            <div >
            <label>Hp:</label>
            <input
                type="number"
                name="hp"
                value={input.hp}
                onChange={handleChange}
            />
            {errors.hp && <p>{errors.hp}</p>}
            </div>
            <div >
            <label>Attack:</label>
            <input
                type="number"
                name="attack"
                value={input.attack}
                onChange={handleChange}
            />
            {errors.attack && <p>{errors.attack}</p>}
            </div>
            <div >
            <label>Defense:</label>
            <input
                type="number"
                name="defense"
                value={input.defense}
                onChange={handleChange}
            />
            {errors.defense && <p>{errors.defense}</p>}
            </div>
            <div >
            <label>Speed:</label>
            <input
                type="number"
                name="speed"
                value={input.speed}
                onChange={handleChange}
            />
            {errors.speed && <p>{errors.speed}</p>}
            </div>
            <div >
            <label>Height:</label>
            <input
                type="number"
                name="height"
                value={input.height}
                onChange={handleChange}
            />
            {errors.height && <p>{errors.height}</p>}
            </div>
            <div >
            <label>Weight:</label>
            <input
                type="number"
                name="weight"
                value={input.weight}
                onChange={handleChange}
            />
            {errors.weight && <p>{errors.weight}</p>}
            </div>
            <div >
            <label>Types:</label>
            <select onChange={handleSelect}>
                <option>Select type</option>
                {types.map((type) => (
                <option key={type.id} value={type.name}>
                    {type.name}
                </option>
                ))}
            </select>
            <ul>
                {input.types.map((type) => (
                <li key={type}>
                    {type}
                    <button type="button" value={type} onClick={handleDelete}>
                    X
                    </button>
                </li>
                ))}
            </ul>
            </div>
            <button type="submit">Create</button>
        </form>
        </div>
    );
}

export default Create;