import styles from "@/styles/Home.module.css";
import {Navbar} from "@/components/Navbar/Navbar";
import {CharacterCard} from "@/components/CharacterCard/CharacterCard";
import {NextPage} from "next";
import {PropsWithChildren, ReactElement} from "react";

export const Layout: NextPage<PropsWithChildren> = ({children}) => {
    return (
        <div>
            <main className={styles.main}>
                <Navbar/>
                {children}
            </main>

        </div>
    );
};

export const getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>
}

