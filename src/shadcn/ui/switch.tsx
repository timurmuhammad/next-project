"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import  cn  from "classnames"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer items-center rounded-[3px] border-[1px] border-[#cbcbcb] border-solid transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#e4fafc] data-[state=unchecked]:bg-[#fff] ",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-[20px] w-[20px] rounded-[3px] bg-[background] shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:bg-[#e4fafc] data-[state=checked]:bg-[#00b2c8] border-solid border-[1px] border-[#00b2c8]"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
