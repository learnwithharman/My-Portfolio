import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-neon-cyan text-space-black hover:bg-neon-cyan/80 shadow-neon",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-neon-purple bg-transparent text-neon-purple hover:bg-neon-purple hover:text-space-black shadow-purple",
        secondary:
          "bg-space-deep text-text-primary hover:bg-space-deep/80 border border-neon-cyan/30",
        ghost: "hover:bg-space-deep hover:text-neon-cyan",
        link: "text-neon-cyan underline-offset-4 hover:underline hover:text-neon-purple",
        cosmic: "bg-gradient-neon text-space-black hover:scale-105 shadow-neon hover:shadow-purple font-semibold",
        glass: "glass-card text-text-primary hover:bg-neon-cyan/10 hover:border-neon-cyan/50"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
