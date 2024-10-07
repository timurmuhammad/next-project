'use client'

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { usePathname } from "next/navigation";
import { useState, useEffect } from 'react'


export default function MainLayout({ children }) {
	const pathname = usePathname()
	const isRegistrationPage = pathname === "/registration";
  const [lg, setLg] = useState(false)

	console.log(lg)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lgMatch = window.matchMedia("(max-width: 1200px)")
      setLg(lgMatch.matches)
      lgMatch.addEventListener('change', e => setLg(e.matches))
    }
  }, [])

  return (
		<div className='wrapper'>
			<Header></Header>
			<main>{children}</main>
			{isRegistrationPage && !lg ? null : <Footer /> }
		</div>
  );
}
