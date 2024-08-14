import logoCardbot from "@/ui/images/logo_cardbot.png";
import currencyLogo from "@/ui/icons/currency_logo.svg";
import exchangeLogo from "@/ui/icons/exchange_logo.svg";

export const productsType = [
	{name: 'Automatic Trading', link: ''},
	{name: 'Copy Trading', link: ''},
	{name: 'Cross-chain DEX Trading', link: ''},
]


export interface goodsType {
	logo: string,
	name: string,
	descripption: string,
	profit: number,
	maxDrawdown: number,
	currencyLogo: string,
	currencyName: string,
	exchangeLogo: string,
	exchangeName: string,
	winningTrades: number, 
	losingTrades: number,
	wlRatio: string,
}

export const goods = [
	{
		logo: logoCardbot.src,
		name: 'OKX Low-Risk Index Copy Bot',
		descripption: 'The bot analyzes the market for cryptocurrencies that offer the lowest risks and medium good profits.',
		profit: 242.24,
		maxDrawdown: 7.21,
		currencyLogo: currencyLogo.src,
		currencyName: 'BNB',
		exchangeLogo: exchangeLogo.src,
		exchangeName: 'OKX',
		winningTrades: 92, 
		losingTrades: 8,
		wlRatio: '721/23',
	},
	{
		logo: logoCardbot.src,
		name: 'OKX Low-Risk Index Copy Bot',
		descripption: 'The bot analyzes the market for cryptocurrencies that offer the lowest risks and medium good profits.',
		profit: 242.24,
		maxDrawdown: 7.21,
		currencyLogo: currencyLogo.src,
		currencyName: 'BNB',
		exchangeLogo: exchangeLogo.src,
		exchangeName: 'OKX',
		winningTrades: 92, 
		losingTrades: 8,
		wlRatio: '721/23',
	},
	{
		logo: logoCardbot.src,
		name: 'OKX Low-Risk Index Copy Bot',
		descripption: 'The bot analyzes the market for cryptocurrencies that offer the lowest risks and medium good profits.',
		profit: 242.24,
		maxDrawdown: 7.21,
		currencyLogo: currencyLogo.src,
		currencyName: 'BNB',
		exchangeLogo: exchangeLogo.src,
		exchangeName: 'OKX',
		winningTrades: 92, 
		losingTrades: 8,
		wlRatio: '721/23',
	}
] as goodsType[]