import {useEffect, useState} from "react";
import axios from "axios";
import {Nullable} from "@/assets/types";

export type CharacterType = {
    id: number
    name: string
    image: string
}
export const useCharacters = (): Nullable<CharacterType[]> => {

    const [characters, setCharacters] = useState<Nullable<CharacterType[]>>([])

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(res => setCharacters(res.data.results))

    }, []);

    return characters
}
