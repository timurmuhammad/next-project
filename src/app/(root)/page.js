'use client'

import Image from "next/image";
import styles from './page.module.scss';
import './page.module.scss';
import { UnderlineButton } from "@/components/underlineButton";
import { Typography } from "@/components/typography";
import { Button } from "@/components/button";
import backgroundGeometric from '@/ui/images/background_geometric.png'
import diagram from '@/ui/images/diagram.png';
import daily from '@/ui/icons/daily.svg';
import portfolio from '@/ui/icons/portfolio.svg';
import statistics from '@/ui/icons/statistics.svg';
import persons from '@/ui/images/persons.png';
import video from '@/ui/images/video.png';
import appstore from '@/ui/images/appstore.png';
import googlePlay from '@/ui/images/google_play.png';
import mobile from '@/ui/images/mobile.png';
import lines from '@/ui/icons/lines.svg';
import gradient from '@/ui/images/gradient.png';
import mediaScreenMobile from '@/ui/images/media_screen_mobile.png';
import automaticTrading from '@/ui/images/automaticTrading.png';
import commission from '@/ui/icons/commission.svg';
import getStarted from '@/ui/icons/get_started.svg';
import invite from '@/ui/icons/invite.svg';
import cn from 'classnames'
import { Section } from "@/components/section";


const list = ['quickly', 'easily', 'steadily', 'safely']


import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/shadcn/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn/ui/carousel"
import { useRef } from "react";

// export const metadata = {
//   title: 'Home',
//   description: ''
// }

export default function Home() {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  return <div className={styles.main}>
    <div className='_container'>
      <Section imageSRC={diagram} width={358} height={262} previewTop={true}>
        <Button
          text="Welcome to Company"
        ></Button>
  
        <div className={styles.info}>
          <h1>Increase your crypto</h1>
          <Carousel
            opts={{
              align: "start",
            }}
            plugins={[plugin.current]}
            className={styles.carousel}
            orientation="vertical"
            watchDrag={false}
          >
            <CarouselContent className={styles.carousel_content}>
              {list.map((item, index) => (
                <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex items-center justify-center">
                        <span className="text-[#00b2c8]">{item}</span>
                      </CardContent>
                    </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
  
        <UnderlineButton text='Let’s get started'></UnderlineButton>
      </Section>
    </div>

    

    <div className={styles.functions}>
      <Image src={backgroundGeometric} alt="img" width={1440} height={155}></Image>
      <div className={cn(styles.functions__container, '_container')}>

        <div className={styles.functions__item}>
          <Image src={daily} alt="image" width={42} height={42}></Image>
          <Typography
            size="h5"
            title="Earn Crypto"
            text="Daily"
          ></Typography>
        </div>

        <div className={styles.functions__item}>
          <Image src={portfolio} alt="image" width={42} height={42}></Image>
          <Typography
            size="h5"
            title="Manage"
            text="Portfolio"
          ></Typography>
        </div>

        <div className={styles.functions__item}>
          <Image src={statistics} alt="image" width={42} height={42}></Image>
          <Typography
            size="h5"
            title="Watch"
            text="Statistics"
          ></Typography>
        </div>
      </div>
    </div>



    <div className="_container">
      <Section imageSRC={video} width={439} height={208}>
        <Typography
          size="h3"
          title="About Us"
          text="At Company, we are dedicated to providing secure, innovative, and user-friendly investment solutions to help you achieve your financial goals. Our high-yield strategies, flexible solutions, and experienced team ensure that your investments are well-protected and optimized for growth."
        ></Typography>
  
        <UnderlineButton text='Learn more'></UnderlineButton>
      </Section>
    </div>

    {/* <div className={cn(styles.section_wrapper, '_container')}>
        <div className={'section_inner'}>
          <Typography
            size="h3"
            title="About Us"
            text="At Company, we are dedicated to providing secure, innovative, and user-friendly investment solutions to help you achieve your financial goals. Our high-yield strategies, flexible solutions, and experienced team ensure that your investments are well-protected and optimized for growth."
          ></Typography>

          <UnderlineButton text='Learn more'></UnderlineButton>
        </div>
        <div className={styles.image}><Image src={video} className={styles.video} alt="img" width={439} height={208}></Image></div>
      </div> */}



      <div className={styles.our_products}>
        <div className={styles.our_products__inner}>
          <div className={cn(styles.our_products__container, '_container')}>
            <Typography
              size="h2"
              title="Our Products"
              text="We offer automated and profitable investment proposals to achieve your financial goals"
            ></Typography>
          </div>
        </div>

        <div className="_container">
          <Section imageSRC={persons} width={355} height={295} rowReverse={true}>
            <Typography
              size="h3"
              title="Copy Trading"
              text="Copy trades from the best bots on the market. Use ready-made solutions from more than 36 bots that bring stable and high profits."
            ></Typography>
  
            <UnderlineButton text='How it works?'></UnderlineButton>
          </Section>
        </div>

        <div className="_container">
          <Section imageSRC={automaticTrading} width={356} height={286}>
            <Typography
              size="h3"
              title="Automatic Trading"
              text="Earn passive income with Company automatic trading software. Leverage time-tested, ready-made high-yield strategies for optimal returns."
            ></Typography>
    
            <UnderlineButton text='How it works?'></UnderlineButton>
          </Section>
        </div>
      </div>




      <div className={cn(styles.section_wrapper, styles._dApp, '_container')}>
        <Image src={gradient} alt="image" width={1200} height={327}></Image>
        <Image src={lines} alt="image" width={1200} height={449}></Image>

        <picture className={styles.image}>
            <source srcSet={mediaScreenMobile.src} media="(max-width: 670px)" />
            <source srcSet={mobile.src} media="(min-width: 671px)" />
            <Image src={mobile} className={styles.mobile} alt="img" width={327} height={410}></Image>
        </picture>

        <div className={cn('section_inner', styles.section_inner)}>
          <Typography
            size="h2"
            title="Use Web dApp For All Purposes"
            text="Our decentralized web application is optimized for any device, making use of your personal account simple and enjoyable"
          ></Typography>

          <div className={styles.buttons}>
            <div className={styles.applications}>
              <button className={styles.appstore}><Image src={appstore} alt="img" width={174} height={75}></Image></button>
              <button className={styles.google_play}><Image src={googlePlay} alt="img" width={166} height={67}></Image></button>
            </div>
            <button className={styles.register}>Register Account</button>
          </div>
        </div>
      </div>



      <div className={cn(styles.affiliate_program, '_container')}>
        <Typography
          size="h2"
          title="Join Our Affiliate program"
          text="Our decentralized web application is optimized for any device, making use of your personal account simple and enjoyable"
        ></Typography>

        <div className={styles.affiliate_program__body}>
          <div className={styles.card}>
            <Image src={commission} alt="img" width={180} height={180}></Image>
            <Typography
              size="h4"
              title="Copy your referral link"
              text="Have you registered? Copy the referral link in your affiliate panel."
            ></Typography>
          </div>

          <div className={styles.card}>
            <Image src={getStarted} alt="img" width={180} height={180}></Image>
            <Typography
              size="h4"
              title="Share it with your audience"
              text="Invite your audience, friends and family and ask them to register using your link."
            ></Typography>
          </div>

          <div className={styles.card}>
            <Image src={invite} alt="img" width={180} height={180}></Image>
            <Typography
              size="h4"
              title="Earn lifetime rewards"
              text="Earn lifetime commissions on every activated product from Company"
            ></Typography>
          </div>
        </div>
      </div>



      <div className={cn(styles.posts, '_container')}>
        <Typography
          size="h2"
          title="Latest blog posts"
          text="Learn more about how Company works and stay up to date with the latest cryptocurrency news."
        ></Typography>

        <div className={styles.posts__body}>
          <div className={styles.card}>
            <div className={styles.post__image}></div>
            <p className={styles.posts__text}>Lorem Ipsum Lorem ipsum dolor sit amet consectetur. </p>
          </div>

          <div className={styles.card}>
            <div className={styles.post__image}></div>
            <p className={styles.posts__text}>Lorem Ipsum Lorem ipsum dolor sit amet consectetur. </p>
          </div>

          <div className={styles.card}>
            <div className={styles.post__image}></div>
            <p className={styles.posts__text}>Lorem Ipsum Lorem ipsum dolor sit amet consectetur. </p>
          </div>

          <div className={styles.card}>
            <div className={styles.post__image}></div>
            <p className={styles.posts__text}>Lorem Ipsum Lorem ipsum dolor sit amet consectetur. </p>
          </div>
        </div>

        <UnderlineButton text='Read other articles'></UnderlineButton>
      </div>

  </div>
}


