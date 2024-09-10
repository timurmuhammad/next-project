
'use client'

import { permanentRedirect } from 'next/navigation'

export default function Wallets() {
	permanentRedirect('/wallets/replenishment')

	return <div className=""></div>
}