"use client"


import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import  cn  from "classnames"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center cursor-pointer h-[20px]",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-[6px] w-full grow overflow-hidden rounded-[6px] bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-[#01b091] to-[#00b2c8]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block relative h-[17px] w-[17px] rounded-full bg-[#00B2C8] ring-offset-background transition-colors after:block after:absolute after:z-[100] after:top-[50%] after:left-[50%] after:w-2/4 after:rounded-[50%] after:bg-[#e4fafc] after:aspect-square after:translate-y-[-50%] after:translate-x-[-50%]" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
