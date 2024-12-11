import styles from './social_media.module.scss';
import {TranslatedLink} from '@/components/translatedLink';
import Image from 'next/image';
import userc from '../icons/users.svg';
import telegram from '../icons/telegram.svg';
import x from '../icons/x.svg';
import facebook from '../icons/facebook.svg';
import youtube from '../icons/youtube.svg';

export const SocialMedia = () => {
	return <div className={styles.body}>
		<TranslatedLink  href={''}><Image src={userc} alt='icon' width={37} height={37}></Image></TranslatedLink >
		<TranslatedLink  href={''}><Image src={telegram} alt='icon' width={37} height={37}></Image></TranslatedLink >
		<TranslatedLink  href={''}><Image src={x} alt='icon' width={37} height={27}></Image></TranslatedLink >
		<TranslatedLink  href={''}><Image src={facebook} alt='icon' width={37} height={37}></Image></TranslatedLink >
		<TranslatedLink  href={''}><Image src={youtube} alt='icon' width={37} height={37}></Image></TranslatedLink >
	</div>;
}