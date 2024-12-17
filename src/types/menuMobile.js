// export const menuMobileType = [
// 	'Home', 'About Us', 'Products', 'Help Center', 'Security', 'Login', 'Registration'
// ]


import home from "@/ui/icons/home.svg";
import products from "@/ui/icons/products.svg";
import about from "@/ui/icons/about.svg";
import security from "@/ui/icons/security.svg";
import help from "@/ui/icons/help.svg";
import registration from "@/ui/icons/registration.svg";
import login from "@/ui/icons/login.svg";
import trading from "@/ui/icons/trading.svg";
import copy_trading from "@/ui/icons/copy_trading.svg";
import cross_chain from "@/ui/icons/cross_chain.png";



export const menuMobileType = [
	{key: 'item-0', path: '/', icon: home.src, text: 'Home'},
	{key: 'item-3', path: '/about', icon: about.src, text:  'About Us'},
	{key: 'item-1', path: '/automatictrading', icon: products.src, text: 'Products', childs: [
		{key: 'item-10', path: '/automatictrading', icon: trading.src, text:  'Automatic Trading'},
		{key: 'item-9', path: '/copytrading', icon: copy_trading.src, text:  'Copy Trading'},
		{key: 'item-8', path: '/crosschain-dex', icon: cross_chain.src, text:  'Cross-chain DEX Trading'},
	]},
	{key: 'item-4', path: '/helpcenter', icon: help.src, text:  'Help Center'},
	{key: 'item-5', path: '/security', icon: security.src, text:  'Security'},
	{key: 'item-6', path: '/login', icon: login.src, text:  'Login'},
	{key: 'item-7', path: '/registration', icon: registration.src, text:  'Registration'},
]