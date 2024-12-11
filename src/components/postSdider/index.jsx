'use client'

import { Carousel, CarouselContent, CarouselItem } from '@/shadcn/ui/carousel'
import { media } from '@/types/blogType'
import styles from './post_sdider.module.scss'
import cn from 'classnames'
import { useEffect, useState } from 'react'
import {TranslatedLink} from '@/components/translatedLink'

export const PostSdider = () => {
  const pagination = Math.ceil(media.length / 3)
  const paginationLg = Math.ceil(media.length / 2)
  const paginationMd = Math.ceil(media.length / 1)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentSlidesshow, setCurrentSlidesshow] = useState(0)

  const [md, setMd] = useState(false)
  const [lg, setLg] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mdMatch = window.matchMedia("(max-width: 768px)")
      const lgMatch = window.matchMedia("(max-width: 1024px)")

      setMd(mdMatch.matches)
      setLg(lgMatch.matches)

      mdMatch.addEventListener('change', e => setMd(e.matches))
      lgMatch.addEventListener('change', e => setLg(e.matches))
    }
  }, [])

  return (
    <div className={styles.section}>
      <p className={styles.subtitle}>Media</p>

      <Carousel
        opts={{
          align: "center",
          slidesToScroll: md ? 1 : lg ? 2 : 3,
          watchDrag: false,
        }}
        pagination={currentSlide}
      >
        <CarouselContent>
          {media.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <TranslatedLink  href={`/blog/${encodeURIComponent(item.id)}`} className="flex flex-col gap-[16px] cursor-pointer">
                <div className={styles.image} />
                <div className="flex flex-col gap-[8px]">
                  <p className="text-[20px] text-black font-[400]">
                    {item.title}
                  </p>
                </div>
              </TranslatedLink >
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {media.length > 3 && (
        <div className="flex justify-center h-[17px] gap-[24px]">
          {Array.from({ length: md ? paginationMd : lg ? paginationLg : pagination }, (_, index) => (
            <button
              onClick={() => {
                setCurrentSlide(index)
                setCurrentSlidesshow(index)
              }}
              key={index}
              className={cn(styles.pagination, { [styles.active]: index === currentSlidesshow })}
            />
          ))}
        </div>
      )}
    </div>
  )
}
