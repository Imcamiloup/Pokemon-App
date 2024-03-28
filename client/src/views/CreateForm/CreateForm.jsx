import useTypes from "../../hooks/useTypes";
import { useEffect, useState } from "react";
import axios from "axios";


const Create = () => {

    const { types } = useTypes();

    const [input, setInput] = useState({
        name: "",
        image: "",
        health: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
    });
    
    const [errors, setErrors] = useState({
        name: "---",
        image: "---",
        health: "---",
        attack: "---",
        defense: "---",
        speed: "---",
        height: "---",
        weight: "---",
        types: "---",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    
  
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,

        });
    };

    const validations = () => {
        let validationErrors = {
            name: "",
            image: "",
            health: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            types: "",
        }
        console.log('input:',input);
        console.log('errors:',errors);
        if (input.name === "") { 
            validationErrors.name = 'Name is required';
        } else if (input.name.length < 3) {
            validationErrors.name = 'Name is too short';
            } else if (input.name.length > 18) {
                validationErrors.name = 'Name is too long';
                } else {
                    validationErrors
        }
        if (input.image === "") {
            validationErrors.image = 'Image is required';
        } else if (input.health < 1 || input.health > 255) {
            validationErrors.health = 'health must be between 1 and 255';
        } else {
            validationErrors.health = '';
        }
        if(input.health === "") {
            validationErrors.health = 'health is required';
        } else if (input.health < 1 || input.health > 255) {
            validationErrors.health = 'health must be between 1 and 255';
        } else {
            validationErrors.health = '';
        }
        if (input.attack === "") {
            validationErrors.attack = 'Attack is required';
        } else if (input.attack < 1 || input.attack > 255) {
            validationErrors.attack = 'Attack must be between 1 and 255';
        } else {
            validationErrors.attack = '';
        } 
        if (!input.defense){
            validationErrors.defense = 'Defense is required';
        } else if (input.defense < 1 || input.defense > 255) {
            validationErrors.defense = 'Defense must be between 1 and 255';
        } else {
            validationErrors.defense = '';
        }
        if (!input.speed){
            validationErrors.speed = 'Speed is required';
        } else if (input.speed < 1 || input.speed > 255) {
            validationErrors.speed = 'Speed must be between 1 and 255';
        } else {
            validationErrors.speed = '';
        }
        if (!input.height){
            validationErrors.height = 'Height is required';
        } else if (input.height < 1 || input.height > 255) {
            validationErrors.height = 'Height must be between 1 and 255';
        } else {
            validationErrors.height = '';
        }
        if (!input.weight){
            validationErrors.weight = 'Weight is required';
        } else if (input.weight < 1 || input.weight > 255) {
            validationErrors.weight = 'Weight must be between 1 and 255';
        } else {
            validationErrors.weight = '';
        }

        if (input.types.length === 0) {
            validationErrors.types = 'At least one type is required';
        } else {
            validationErrors.types = '';
        }

        setErrors(validationErrors);

        
        if ( errors.name === "" &&
            errors.image === "" &&
            errors.health === "" &&
            errors.attack === "" &&
            errors.defense === "" &&
            errors.speed === "" &&
            errors.height === "" &&
            errors.weight === "" &&
            errors.types === "" ) {
                setIsSubmitted(true);
            }

    };

    useEffect(() => {
        validations();
    }, [input]);
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            validations();

            if (isSubmitted) {

                const response = await fetch('http://localhost:3001/pokemons', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(
                    {
                        name: input.name,
                        image: input.image,
                        health: input.health,
                        attack: input.attack,
                        defense: input.defense,
                        speed: input.speed,
                        height: input.height,
                        weight: input.weight,
                        types: input.types,
                    }
                    ),
                });
                console.log('response:',input);
                const data = await response.json();
                if (response.ok) {
                    console.log('Pokemon data successfully submitted!');
                    alert('Pokemon created')
                    setInput({
                        name: "",
                        image: "",
                        health: "",
                        attack: "",
                        defense: "",
                        speed: "",
                        height: "",
                        weight: "",
                        types: [],
                    });
                    setErrors({
                        name: "",
                        image: "",
                        health: "",
                        attack: "",
                        defense: "",
                        speed: "",
                        height: "",
                        weight: "",
                        types: "",
                    });
    
                } else {
                    console.error('Failed to submit pokemon data');
                }
                

            };

        }catch (error){
                console.log(error)
            }
        
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
            <div>
            <label>Image:</label>
            <input
                type="text"
                name="image"
                value={input.image}
                onChange={handleChange}
            />
            {errors.image && <p>{errors.image}</p>}
            </div>
            <div >
            <label>health:</label>
            <input
                type="number"
                name="health"
                value={input.health}
                onChange={handleChange}
            />
            {errors.health && <p>{errors.health}</p>}
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
                <option key={type.id} value={type.id}>
                    {type.name}
                </option>
                ))}
            </select>
            {errors.types && <p>{errors.types}</p>}
            <ul>
                {input.types.map((type) => (
                <li key={type}>
                    {types.find((t) => t.id === type).name}
                    <button type="button" value={type} onClick={handleDelete}>
                    X
                    </button>
                </li>
                ))}
            </ul>
            </div>
            <button type="submit" disabled={isSubmitted === false}>Create</button>
        </form>
        </div>
    );
}

export default Create;