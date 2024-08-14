import styles from './languages.module.scss';
import en from '../../ui/icons/en.svg';
import Image from 'next/image';

export const Languages = () => {
	return <div className={styles.body}>
		<Image src={en} alt='icon' width={25} height={18}></Image>
		<p>EN</p>
	</div>
}