import * as React from "react"

import cn from "classnames"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[40px] w-full border-none rounded-[6px] bg-background px-3 py-2 text-[14px] ring-offset-background file:border-0 file:bg-transparent file:text-[14px] file:font-medium placeholder:text-[#9c9c9c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b2c8] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
