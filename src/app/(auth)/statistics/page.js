
'use client'

import { permanentRedirect } from 'next/navigation'

export default function Statistics() {
	permanentRedirect('/statistics/all')

	return <div></div>
}