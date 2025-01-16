import styles from './footer.module.scss';
import backgroudFooter from '@/ui/images/backgroud_footer.svg';
import Image from 'next/image';
import { SocialMedia } from '@/ui/socialMedia';
import cn from 'classnames'
import { Logo } from '@/ui/logo';
import email from '@/ui/icons/email.svg';
import t_me from '@/ui/icons/t_me.svg';
import chat from '@/ui/icons/chat.svg'; 
import {TranslatedLink} from '@/components/translatedLink';
import { Languages } from '../languages';
import rectangle from "@/ui/images/rectangle.svg";
import { Suspense } from 'react';

export const Footer = () => {

	//https://translate.google.com/translate?hl=uk&sl=en&u=http%3A%2F%2Freact-project-zdxg.vercel.app%2F

	return <div className={styles.body}>
		<div className={styles.bg}><Image src={backgroudFooter} alt='img' width={0} height={0} sizes='100vw'></Image></div>
		<div className={cn(styles.body__container, '_container')}>
			
			<div>
				<SocialMedia></SocialMedia>
				<div className={styles.rectangle}><Image src={rectangle} alt='img' width={0} height={0} sizes='100vw'></Image></div>
			</div>
			

				<Languages></Languages>



			<div className={styles.list__wrapper}>
				<ul className={styles.list}>
					<h5 className={styles.title}>Company</h5>
					<TranslatedLink href="/about">Help Center</TranslatedLink>
					<TranslatedLink  href={'/copytrading'}>Copy Trading</TranslatedLink >
					<TranslatedLink  href={'/automatictrading'}>Automatic Trading</TranslatedLink >
					<TranslatedLink  href={'/helpcenter'}>Help hub</TranslatedLink >
					<TranslatedLink  href={'/blog'}>Blog</TranslatedLink >
					<TranslatedLink  href={'/'}>Contacts</TranslatedLink >
					<TranslatedLink  href={'/security'}>Security</TranslatedLink >
				</ul>
	
				<ul className={styles.list}>
					<h5 className={styles.title}>Other links</h5>
					<TranslatedLink  href={'/login'}>Login</TranslatedLink >
					<TranslatedLink  href={'/registration'}>Sign Up</TranslatedLink >
					<TranslatedLink  href={''}>Privacy Policy</TranslatedLink >
					<TranslatedLink  href={''}>User Agreement</TranslatedLink >
					<TranslatedLink  href={''}>PDF Presentation</TranslatedLink >
					<TranslatedLink  href={'/dashboard'}>Dashboard</TranslatedLink >
				</ul>
	
				<ul className={styles.contacts}>
					<Logo></Logo>
					{/* <TranslatedLink  href={''}>
						<p translate="no">support@website.com</p>
						<Image src={email} alt='img' width={48} height={48}></Image>
					</TranslatedLink >
					<TranslatedLink  href={''}>
						<p translate="no">https://t.me/website_support</p>
						<Image src={t_me} alt='img' width={48} height={48}></Image>
					</TranslatedLink >
					<TranslatedLink  href={''}>
						<p translate="no">24/7 Online Chat Support</p>
						<Image src={chat} alt='img' width={48} height={48}></Image>
					</TranslatedLink > */}
				</ul>
			</div>

			<p translate="no" className={styles.bottom}>© 2024 Company Holdings. All rights reserved</p>
		</div>
	</div>
}
