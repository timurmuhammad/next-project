import styles from './numericalIndicators.module.scss'
import cn from 'classnames'


export const NumericalIndicators = () => {
	return <div className={styles.numbers}>
		<div className="flex flex-col items-center gap-[8px]">
			<p>
				Exchanges
			</p>
			<h6>9</h6>
		</div>
		<div className="flex flex-col items-center gap-[8px]">
			<p>Bots</p>
			<h6>36</h6>
		</div>
		<div className="flex flex-col items-center gap-[8px]">
			<p>
				trades
			</p>
			<h6>
				40124
			</h6>
		</div>
		<div className="flex flex-col items-center gap-[8px]">
			<p>
				Total Profit
			</p>
			<h6>
				987% APY
			</h6>
		</div>
	</div> 
}