import styles from "./logo.module.scss";
import Image from "next/image";
import LogoImage from '../images/logo.png';

export const Logo = () => {
    return <div className={styles.body}>
        <Image className={styles.image} src={LogoImage} alt="logo" width={39} height={34}></Image>
        <p className={styles.text}>Projec</p>
    </div>
}
