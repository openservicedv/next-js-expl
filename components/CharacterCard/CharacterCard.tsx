import {CharacterType} from "@/assets/hooks/useCharacters";
import Image from "next/image";
import styles from "./CharacterCard.module.css";

type PropsType = {
    character: CharacterType
}
export const CharacterCard = (props: PropsType) => {
    const {character} = props

    return (
        <div className={styles.card}>
            <div>
                {character.name}
            </div>
            <Image
                src={character.image}
                width={300}
                height={300}
                alt=''
                priority
            />
        </div>
    )
}
