import {Inter} from "next/font/google";
import styles from "@/styles/Home.module.css";
import {CharacterCard} from "@/components/CharacterCard/CharacterCard";
import {useCharacters} from "@/assets/hooks/useCharacters";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {Navbar} from "@/components/Navbar/Navbar";
import {getLayout} from "@/components/Layout/Layout";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

function Characters() {
    const characters = useCharacters()

    return (
        <>
            <HeadMeta title={'Characters'}/>
            {characters && characters.map(character => (
                <Link key={character.id} href={`/characters/${character.id}`}>
                    <CharacterCard
                        character={character}
                    />
                </Link>
            ))}
        </>
    );
}

Characters.getLayout = getLayout
export default Characters
