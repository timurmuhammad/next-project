import localFont from 'next/font/local'
import { Inter, Nunito_Sans } from "next/font/google";

export const inter = Inter(
  { 
    subsets: ['latin'],
    weight: ['400', '500'],
    variable:'--font-inter'
  }
)

export const nunitoSans = Nunito_Sans(
  { 
    subsets: ['latin'],
    variable:'--font-nunito',
    weight: '400'
  }
)

export const sofiaPro = localFont({
  src: [
    {
      path: './sofia-pro/Sofia_Pro_UltraLight_Az.otf',
      weight: '250',
      style: 'normal',
    },
    {
      path: './sofia-pro/Sofia_Pro_Light_Az.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './sofia-pro/Sofia_Pro_Light_Italic_Az.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './sofia-pro/Sofia_Pro_Regular_Az.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './sofia-pro/Sofia_Pro_Medium_Az.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './sofia-pro/Sofia_Pro_Semi_Bold_Az.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './sofia-pro/Sofia_Pro_Bold_Az.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './sofia-pro/Sofia_Pro_Black_Az.otf',
      weight: '900',
      style: 'normal',
    },
  ],
})



