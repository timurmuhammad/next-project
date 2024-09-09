import dashboard from "@/ui/icons/dashboard.svg";
import wallets from "@/ui/icons/wallets.svg";
import investments from "@/ui/icons/investments.svg";
import statistics_aush from "@/ui/icons/statistics_aush.svg";
import affiliate from "@/ui/icons/affiliate.svg";
import help_center from "@/ui/icons/help_center.svg";
import arbitrage from "@/ui/icons/arbitrage.svg";
import replenishment from "@/ui/icons/replenishment.svg";
import withdrawal from "@/ui/icons/withdrawal.svg";
import trading from "@/ui/icons/trading.svg";
import copy_trading from "@/ui/icons/copy_trading.svg";
import cross_chain from "@/ui/icons/cross_chain.png";


export const tabs = [
	{key: 'item-0', path: 'dashboard', icon: dashboard.src, text: 'Dashboard'},
	{key: 'item-1', path: 'wallets', icon: wallets.src, text: 'Wallets', childs: [
		{key: 'item-10', path: '', icon: replenishment.src, text:  'Replenishment'},
		{key: 'item-9', path: '', icon: withdrawal.src, text:  'Withdrawal'},
		{key: 'item-8', path: '', icon: arbitrage.src, text:  'Exchange'},
	]},
	{key: 'item-2', path: 'investments', icon: investments.src, text:  'Investments', childs: [
		{key: 'item-11', path: '', icon: trading.src, text:  'Automatic Trading'},
		{key: 'item-12', path: '', icon: copy_trading.src, text:  'Copy Trading'},
		{key: 'item-13', path: '', icon: cross_chain.src, text:  'Cross-chain DEX Trading'},
	]},
	{key: 'item-3', path: 'statistics_aush', icon: statistics_aush.src, text:  'Statistics'},
	{key: 'item-4', path: 'affiliate', icon: affiliate.src, text:  'Affiliate Program'},
	{key: 'item-5', path: 'help', icon: help_center.src, text:  'Help Center'},
]