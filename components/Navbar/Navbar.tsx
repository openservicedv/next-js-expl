import Link from "next/link";
import styles from './Navbar.module.scss'

export const Navbar = () => {

    return (
        <div className={styles.link}>
            <Link href={'/'}>Main</Link>
            <Link href={'/characters'}>Characters</Link>
        </div>
    )
}
