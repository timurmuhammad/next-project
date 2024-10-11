import styles from './helpheader.module.scss'
import logo_icon from "@/ui/icons/logo_icon.svg";
import Image from 'next/image';
import { Languages } from '../languages';

export const HelpHeader = () => {
	return <div className={styles.body}>
		<div className={styles.container + ' _container'}>
			<div className="flex justify-between items-center w-[166px] relative">
				<Image src={logo_icon} width={40} height={34} alt="icon"></Image>
				<p className="text-[28px] text-[#2e2e2e]">Help Hub</p>
			</div>

			<div className="flex gap-[8px] items-center">
				<div className="flex items-center gap-[8px] px-[2px]">
					<svg
						width={14}
						height={16}
						viewBox="0 0 14 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="flex-grow-0 flex-shrink-0"
						preserveAspectRatio="xMidYMid meet"
					>
						<path d="M1.07324e-07 8L13.5 0.205773L13.5 15.7942L1.07324e-07 8Z" fill="#D9D9D9" />
					</svg>
					<p className="text-[16px]  text-center text-black">
						Back to Company
					</p>
				</div>

				<Languages></Languages>
			</div>
		</div>
	</div>
}