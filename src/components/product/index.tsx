import styles from './product.module.scss'
import cn from 'classnames'
import { goodsType } from "@/types/products";
import Image from 'next/image';

type Props = {
	item: goodsType
}


export const Product: React.FC<Props> = ({ item }) => {
	return <div className="flex flex-col gap-[32px] p-[16px] rounded-[6px] border-solid border border-[#ebebeb]">
	<div className="flex items-center gap-[8px]">
		<div className="w-[43px] aspect-square">
			<div className="absolute left-[-1px] top-[-1px]" />
			<img
				src={item.logo}
				className="w-[76px] object-cover"
			/>
		</div>
		<p className="text-black text-wrap">
			OKX Low-Risk Index Copy Bot
		</p>
	</div>
	<p className="text-[14px] text-black">
		The bot analyzes the market for cryptocurrencies that offer the lowest risks and medium good
		profits.
	</p>
	<div className="flex justify-between items-center">
		<div className="flex flex-col justify-center items-start gap-[10px]">
			<p className="text-[14px] text-[#717171]">Profit</p>
			<div className="flex justify-start items-center gap-[10px]">
				<div className="flex relative justify-center gap-[10px] px-[8px] py-[4px] rounded-[3px] bg-[#e4fafc]">
					<p className="text-[14px] text-[#0d0c43]">242.24%</p>
					<span className={styles.span}>?</span>
					
				</div>
				
			</div>
		</div>
		<div className="flex flex-col justify-center gap-[10px]">
			<p className="text-[14px] text-[#717171]">Max Drawdown</p>
			<div className="flex items-center gap-[10px]">
				<div className="flex relative justify-center gap-[10px] px-[8px] py-[4px] rounded-[3px] bg-[#e4fafc]">
					<p className="text-[14px] text-[#0d0c43]">7.21%</p>

					<span className={styles.span}>?</span>
						
				</div>
			</div>
		</div>
	</div>

	<div className="flex justify-between items-center self-stretch flex-grow-0 ">
		<div className="flex flex-col justify-between items-start self-stretch flex-grow-0  relative">
			<p className="flex-grow-0  text-[14px] text-left text-[#717171]">Quote currency</p>
			<div className="flex justify-center items-center flex-grow-0  relative gap-3 px-2.5 py-2 rounded-md bg-neutral-50 border-[0.5px] border-[#d9d9d9]">
				<Image src={item.currencyLogo} width={25} height={25} alt='icon'></Image>
				<p className="flex-grow-0  text-[18px] font-light text-left text-[#303030]">
					{item.currencyName}
				</p>
			</div>
		</div>
		<div className="flex flex-col justify-center items-start self-stretch flex-grow-0  relative gap-2.5">
			<p className="flex-grow-0  text-[14px] text-left text-[#717171]">Exchange</p>
			<div className="flex justify-start items-center flex-grow-0  relative gap-2.5 px-2.5 py-2">
				<Image src={item.exchangeLogo} width={25} height={25} alt='icon'></Image>
				<p className="flex-grow-0  text-[16px] text-left text-[#303030]">{item.exchangeName}</p>
			</div>
		</div>
	</div>
	<div className="flex justify-between items-center self-stretch flex-grow-0 ">
		<div className="flex flex-col justify-center items-center flex-grow-0  relative gap-2.5">
			<p className="flex-grow-0  text-[12px] font-light text-left text-[#717171]">
				Winning trades
			</p>
			<p className="flex-grow-0  text-[14px] font-light text-left text-black">{item.winningTrades}</p>
		</div>
		<div className="flex flex-col justify-center items-center flex-grow-0  relative gap-2.5">
			<p className="flex-grow-0  text-[12px] font-light text-left text-[#717171]">
				Losing trades
			</p>
			<p className="flex-grow-0  text-[14px] font-light text-left text-black">{item.losingTrades}</p>
		</div>
		<div className="flex flex-col justify-center items-center flex-grow-0  relative gap-2.5">
			<p className="flex-grow-0  text-[12px] font-light text-left text-[#717171]">
				W/L Ratio
			</p>
			<p className="flex-grow-0  text-[14px] font-light text-left text-black">{item.wlRatio}</p>
		</div>
	</div>
</div>
}