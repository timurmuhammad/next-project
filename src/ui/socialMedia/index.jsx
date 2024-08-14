import styles from './social_media.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import userc from '../icons/users.svg';
import telegram from '../icons/telegram.svg';
import x from '../icons/x.svg';
import facebook from '../icons/facebook.svg';
import youtube from '../icons/youtube.svg';

export const SocialMedia = () => {
	return <div className={styles.body}>
		<Link href={''}><Image src={userc} alt='icon' width={37} height={37}></Image></Link>
		<Link href={''}><Image src={telegram} alt='icon' width={37} height={37}></Image></Link>
		<Link href={''}><Image src={x} alt='icon' width={37} height={27}></Image></Link>
		<Link href={''}><Image src={facebook} alt='icon' width={37} height={37}></Image></Link>
		<Link href={''}><Image src={youtube} alt='icon' width={37} height={37}></Image></Link>
	</div>;
}