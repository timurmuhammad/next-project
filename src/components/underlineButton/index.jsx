import styles from './underline-button.module.scss';
import Image from 'next/image';
import Arrow from '@/ui/icons/arrow.svg';

export const UnderlineButton = ({ text }) => {
	return <button className={styles.body}>
		<div className={styles.circle}>
			<Image src={Arrow} alt='icon' className={styles.image}></Image>
		</div>
		<p className={styles.text}>{text}</p>
	</button>;
}