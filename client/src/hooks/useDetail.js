import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPokemonDetail } from "../Redux/pokemonsSlice";

const useDetail = () => {
    const dispatch = useDispatch();

    const { id } = useParams();

    const pokemonDetail = useSelector((state) => state.pokemon.pokemonDetail);
    const [detailLoading, setDetailLoading] = useState(true);
    const [detailError, setDetailError] = useState(null);
    
    
    useEffect(() => {
        setDetailLoading(true);
        fetch(`http://localhost:3001/pokemons/${id}`)
        .then((response) => response.json())
        .then((data) => {
            dispatch(getPokemonDetail(data));
        })
        .catch((error) => {
            setDetailError(error);
        })
        .finally(() => {
            setDetailLoading(false);
        });
    }, [id]);
    
    return { pokemonDetail, detailLoading, detailError};
    }

    

export default useDetail;