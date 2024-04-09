import {Inter} from "next/font/google";
import styles from "@/styles/Home.module.css";
import {CharacterCard} from "@/components/CharacterCard/CharacterCard";
import {useCharacter} from "@/assets/hooks/useCharacter";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {Navbar} from "@/components/Navbar/Navbar";
import {getLayout} from "@/components/Layout/Layout";

function Character() {
    const character = useCharacter()

    return (
        <>
            <HeadMeta title={'Characters'}/>
            {character &&
                <CharacterCard
                    character={character}
                />
            }
        </>
    );
}

Character.getLayout = getLayout
export default Character
