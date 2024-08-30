import styles from './footer.module.scss';
import backgroudFooter from '@/ui/images/backgroud_footer.png';
import Image from 'next/image';
import { SocialMedia } from '@/ui/socialMedia';
import cn from 'classnames'
import { Logo } from '@/ui/logo';
import email from '@/ui/icons/email.svg';
import t_me from '@/ui/icons/t_me.svg';
import chat from '@/ui/icons/chat.svg'; 
import Link from 'next/link';
import { Languages } from '../languages';

export const Footer = () => {
	return <div className={styles.body}>
		{/* <Image src={backgroudFooter} alt='img' width={1440} height={587}></Image> */}
		<div className={cn(styles.body__container, '_container')}>
			
			<SocialMedia></SocialMedia>

			<Languages></Languages>

			<div className={styles.list__wrapper}>
				<ul className={styles.list}>
					<h5 className={styles.title}>Company</h5>
					<Link href={''}>About</Link>
					<Link href={''}>Copy Trading</Link>
					<Link href={''}>Automatic Trading</Link>
					<Link href={''}>Help hub</Link>
					<Link href={''}>Blog</Link>
					<Link href={''}>Contacts</Link>
					<Link href={''}>Security</Link>
				</ul>
	
				<ul className={styles.list}>
					<h5 className={styles.title}>Other links</h5>
					<Link href={''}>Login</Link>
					<Link href={''}>Sign Up</Link>
					<Link href={''}>Privacy Policy</Link>
					<Link href={''}>User Agreement</Link>
					<Link href={''}>PDF Presentation</Link>
					<Link href={''}>Dashboard</Link>
				</ul>
	
				<ul className={styles.contacts}>
					<Logo></Logo>
					<Link href={''}>
						<p>support@website.com</p>
						<Image src={email} alt='img' width={48} height={48}></Image>
					</Link>
					<Link href={''}>
						<p>https://t.me/website_support</p>
						<Image src={t_me} alt='img' width={48} height={48}></Image>
					</Link>
					<Link href={''}>
						<p>24/7 Online Chat Support</p>
						<Image src={chat} alt='img' width={48} height={48}></Image>
					</Link>
				</ul>
			</div>

			<p className={styles.bottom}>© 2024 Company Holdings. All rights reserved</p>
		</div>
	</div>
}
