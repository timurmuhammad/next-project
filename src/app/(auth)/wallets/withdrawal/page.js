'use client'

import { ButtonBlue } from '@/components/buttonBlue'
import styles from './withdrawal.module.scss'
import cn from 'classnames'

export default function Withdrawal() {
	return 	<div className={styles.body}>
	<div className="flex flex-col gap-[24px] w-full">
				<p className={styles.title}>
					BTC withdrawal
				</p>

				<div className={styles.list}>
					<div className="flex items-center gap-[16px] px-[16px] py-[8px]">
						<div className={cn(styles.circle, styles.blue)}>
							1
						</div>
						<p className="min-w-[55px]  text-[14px] text-start ">Place an Order</p>
					</div>
					<div className= {cn(styles.line, 'bg-[#00b2c8]')} />

					<div className="flex items-center gap-[16px] px-[16px] py-[8px]">
						<div className={styles.circle}>
							2
						</div>
						<p className="  text-[14px] text-center ">Confirmation</p>
					</div>
					<div className={cn(styles.line, "bg-[#a1aebe]")} />

					<div className="flex items-center gap-[16px] px-[16px] py-[8px]">
						<div className={styles.circle}>
							3
						</div>
						<p className="  text-[14px] text-center ">Processing</p>
					</div>
				</div>

			</div>




		<div className="flex   self-stretch   gap-[24px]">
			<div className="flex flex-col   flex-grow gap-[22px]">
				<div className={styles.ammount}>
					<div className="flex flex-col max-w-[319px] flex-grow flex-shrink gap-[16px]">
						<p className="self-stretch    text-[14px]   ">
							Withdrawal amount USD
						</p>
						<div className="flex   self-stretch  ">
							<div className="flex justify-between items-center self-stretch flex-grow   px-[16px] py-[8px] rounded-tl-md rounded-bl-md bg-neutral-50 border-t-[1px] border-solid border-r-0 border-b-[1px] border-l-[1px] border-[#cecece]">
								<p className="  text-[14px]   ">
									0
								</p>
								<p className="  text-[14px]  ">MAX</p>
							</div>
							<div className="flex flex-col  items-center self-stretch     gap-[8px] px-[16px] py-[8px] rounded-tr-md rounded-br-md bg-[#00b2c8]">
								<p className="  text-base  uppercase text-white">$</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col max-w-[319px] flex-grow flex-shrink  gap-[16px]">
						<p className="self-stretch    text-[14px]   ">
							Withdrawal amount BTC
						</p>
						<div className="flex   self-stretch  ">
							<div className="flex flex-col justify-center  flex-grow   gap-[8px] px-[16px] py-[8px] rounded-tl-md rounded-bl-md bg-neutral-50 border-t-[1px] border-r-0 border-b-[1px] border-l-[1px] border-solid border-[#cecece]">
								<p className="  text-[14px]   ">
									0
								</p>
							</div>
							<div className="flex justify-center items-center self-stretch gap-[8px] px-[16px] py-[8px] rounded-tr-md rounded-br-md bg-[#00b2c8]">
								<svg
									width={10}
									height={14}
									viewBox="0 0 10 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className=" "
									preserveAspectRatio="xMidYMid meet"
								>
									<path
										d="M6.76454 2.41413C6.61033 2.4022 6.43776 2.39027 6.25097 2.37971C6.2491 2.37965 6.24726 2.37923 6.24556 2.37846C6.24386 2.37769 6.24232 2.37659 6.24104 2.37522C6.23976 2.37386 6.23877 2.37226 6.23811 2.37051C6.23745 2.36876 6.23714 2.36689 6.2372 2.36503C6.2372 2.19521 6.25923 0.425504 6.26198 0.201995C6.26187 0.195536 6.25929 0.189366 6.25476 0.184756C6.25024 0.180146 6.24412 0.177446 6.23766 0.177212H4.90349C4.90028 0.177088 4.89708 0.177614 4.89408 0.178758C4.89108 0.179902 4.88834 0.18164 4.88602 0.183869C4.88371 0.186097 4.88187 0.18877 4.88061 0.191727C4.87935 0.194684 4.87871 0.197865 4.87871 0.201077L4.85393 2.22688C4.85393 2.23016 4.85327 2.2334 4.85199 2.23641C4.85071 2.23942 4.84884 2.24214 4.84648 2.24442C4.84412 2.24669 4.84133 2.24846 4.83827 2.24963C4.83522 2.25079 4.83195 2.25133 4.82868 2.25121C4.44546 2.23377 4.39314 2.27645 3.99018 2.2613C3.98381 2.26106 3.97779 2.25833 3.97341 2.2537C3.96903 2.24906 3.96665 2.24289 3.96678 2.23652L3.99248 0.132693C3.99248 0.126199 3.98993 0.119964 3.98538 0.11533C3.98083 0.110695 3.97465 0.10803 3.96815 0.10791H2.68722C2.68073 0.107909 2.67449 0.110457 2.66986 0.115006C2.66522 0.119555 2.66256 0.125742 2.66244 0.132235L2.6372 2.20852C2.63696 2.21514 2.63413 2.22139 2.62932 2.22594C2.62452 2.23049 2.61811 2.23297 2.6115 2.23285C1.3939 2.19292 0.460856 2.1663 0.295175 2.16217C0.288801 2.16205 0.282633 2.16443 0.277998 2.16881C0.273363 2.17318 0.270631 2.17921 0.270392 2.18558L0.20109 3.48349C0.200904 3.48668 0.201351 3.48988 0.202405 3.49291C0.203458 3.49593 0.205098 3.49871 0.207229 3.5011C0.209361 3.50349 0.211943 3.50543 0.214828 3.50682C0.217712 3.50821 0.220842 3.50901 0.224038 3.50919L1.7092 3.58675C1.71557 3.58699 1.72159 3.58972 1.72597 3.59436C1.73035 3.59899 1.73273 3.60516 1.73261 3.61153L1.66285 7.51261L1.63485 9.09415L1.61557 10.1805C1.61545 10.187 1.61279 10.1932 1.60816 10.1977C1.60352 10.2023 1.59729 10.2048 1.59079 10.2048H0.101039C0.0947441 10.2048 0.0886923 10.2072 0.0841561 10.2116C0.0796199 10.216 0.0769526 10.2219 0.0767151 10.2282L7.04968e-05 11.6184C-0.000178957 11.6216 0.000235175 11.6249 0.00128797 11.628C0.00234077 11.6311 0.0040104 11.634 0.00619674 11.6364C0.00838308 11.6389 0.0110408 11.6409 0.0140104 11.6423C0.0169799 11.6436 0.0202002 11.6444 0.023477 11.6445L2.48345 11.7386H2.57524C2.58181 11.7386 2.58812 11.7412 2.59276 11.7459C2.59741 11.7505 2.60002 11.7568 2.60002 11.7634L2.5757 13.836C2.5757 13.8425 2.57824 13.8488 2.58279 13.8534C2.58734 13.858 2.59353 13.8607 2.60002 13.8608L3.90344 13.8677C3.90667 13.8678 3.90989 13.8672 3.91289 13.866C3.91589 13.8648 3.91863 13.863 3.92094 13.8607C3.92325 13.8585 3.92508 13.8558 3.92633 13.8528C3.92758 13.8498 3.92822 13.8466 3.92822 13.8434L3.95347 11.746C3.95347 11.7428 3.9541 11.7397 3.95533 11.7367C3.95655 11.7338 3.95835 11.7311 3.96062 11.7289C3.96288 11.7267 3.96557 11.725 3.96852 11.7238C3.97147 11.7226 3.97462 11.722 3.97779 11.7221L4.69742 11.7079C4.7007 11.7078 4.70395 11.7084 4.70698 11.7096C4.71002 11.7109 4.71277 11.7127 4.71509 11.715C4.7174 11.7173 4.71922 11.7201 4.72045 11.7231C4.72167 11.7261 4.72227 11.7294 4.72221 11.7327L4.70706 13.8672C4.707 13.8705 4.70759 13.8737 4.70878 13.8767C4.70998 13.8797 4.71176 13.8824 4.71402 13.8847C4.71629 13.887 4.71899 13.8889 4.72197 13.8901C4.72495 13.8914 4.72815 13.892 4.73139 13.892H6.05683C6.06008 13.8921 6.06332 13.8916 6.06636 13.8904C6.06939 13.8893 6.07215 13.8875 6.07447 13.8852C6.07679 13.8829 6.07863 13.8802 6.07985 13.8772C6.08108 13.8742 6.08168 13.8709 6.08162 13.8677L6.12384 11.7294C6.12407 11.7231 6.1267 11.717 6.13122 11.7125C6.13573 11.708 6.14179 11.7053 6.14817 11.7051C6.52129 11.6978 7.97295 11.829 8.92986 11.1383C10.7987 9.79038 9.89825 7.07064 8.66597 6.57911C8.66421 6.5783 8.66272 6.57701 8.66167 6.57538C8.66063 6.57375 8.66007 6.57186 8.66007 6.56993C8.66007 6.56799 8.66063 6.5661 8.66167 6.56447C8.66272 6.56285 8.66421 6.56155 8.66597 6.56075C9.7601 6.1018 9.75184 5.30506 9.77112 5.00032C9.80324 2.75513 8.291 2.61378 6.76591 2.41276L6.76454 2.41413ZM6.19039 7.57503C7.20283 7.71868 7.73705 9.22174 6.96556 9.94413C6.51854 10.3723 5.63781 10.2994 4.99758 10.3485C4.50742 10.3788 4.10354 10.3719 4.00303 10.3696C3.99666 10.3693 3.99064 10.3666 3.98626 10.362C3.98188 10.3573 3.9795 10.3512 3.97963 10.3448L4.00808 7.50848C4.00808 7.50203 4.01064 7.49584 4.01521 7.49128C4.01977 7.48672 4.02595 7.48416 4.03241 7.48416C4.38442 7.47957 4.72404 7.49058 5.03246 7.50894C5.03246 7.50894 5.74613 7.51215 6.19039 7.57503ZM6.61446 5.9453C6.14633 6.15917 5.69335 6.1197 5.05403 6.15963C4.52532 6.18992 4.11731 6.17752 4.01726 6.17385C4.01413 6.17373 4.01104 6.173 4.00819 6.17169C4.00534 6.17038 4.00278 6.16852 4.00065 6.16622C3.99852 6.16392 3.99686 6.16122 3.99577 6.15828C3.99469 6.15533 3.99419 6.1522 3.99431 6.14907L4.00716 3.65972C4.00728 3.65323 4.00995 3.64705 4.01458 3.6425C4.01922 3.63795 4.02545 3.6354 4.03195 3.6354H5.07835C5.46617 3.62622 6.07473 3.6354 6.42032 3.80705C7.54154 4.36697 7.18264 5.68553 6.61446 5.9453Z"
										fill="white"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col   self-stretch   gap-[16px]">
					<div className="flex justify-between items-center self-stretch   ">
						<p className="  text-[14px]   ">
							Wallet Address
						</p>
						<p className="  text-[14px]  text-[#00b2c8]">
							Specify your wallet
						</p>
					</div>
					<div className="flex flex-col justify-center min-h-[40px] items-center self-stretch  gap-[8px] px-[16px] py-[8px] rounded-[6px] bg-neutral-50 border-[1px] border-solid border-[#cecece]">
						<p className="  text-[14px]   text-[#8a8181]">
							Enter wallet address for withdrawal (Only BTC)
						</p>
					</div>
				</div>
			</div>
		</div>


		<div className={styles.buttons}>
				<ButtonBlue
					text='Next'
				></ButtonBlue>
			</div>

	</div>
}