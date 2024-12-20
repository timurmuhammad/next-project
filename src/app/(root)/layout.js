'use client'

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HelpHeader } from "@/components/helpHeader";
import { usePathname } from "next/navigation";
import { useState, useEffect } from 'react'
import cn from 'classnames'
// import { Suspense } from "react";

export default function MainLayout({ children }) {
	const pathname = usePathname()
	const isRegistrationPage = pathname === "/registration";
  const isHelpCenterPage = pathname === "/helpcenter";
  const [lg, setLg] = useState(false)
  const [md, setMd] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lgMatch = window.matchMedia("(max-width: 1200px)")
      const mdMatch = window.matchMedia("(max-width: 829px)")
      setLg(lgMatch.matches)
      lgMatch.addEventListener('change', e => setLg(e.matches))
      setMd(mdMatch.matches)
      mdMatch.addEventListener('change', e => setMd(e.matches))
    }
  }, [])

  return (
		<div className='wrapper'>
			{isHelpCenterPage && !md ? <HelpHeader></HelpHeader> : <Header></Header>}
      <Suspense fallback={<div>Loading...</div>}>
        <main>{children}</main>
        {isRegistrationPage && !lg ? null : <Footer /> }
      </Suspense>
		</div>
  );
}
