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
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}`)
            .then(res => setCharacters(res.data.results))

    }, []);

    return characters
}
