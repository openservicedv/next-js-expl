import Image from "next/image";
import styles from "./CharacterCard.module.css";
import Head from "next/head";

type PropsType = {
    title: string
    description?: string
}

export const HeadMeta = (props: PropsType) => {
    const {title, description} = props

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description || "Generated by create next app"}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    )
}
