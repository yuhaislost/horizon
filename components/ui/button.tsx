import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-white border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 text-slate-500",
        primary: "bg-primary text-background hover:bg-primary/90 border-[#B9AE8B] border-b-4 active:border-b-0",
        primaryOutline: "bg-none text-primary hover:bg-[#292E4C]",
        secondary: "bg-secondary text-white border-accent border-2 border-b-4 active:border-b-0 hover:bg-secondary/90",
        sidebar: "text-white border-2 border-transparent hover:border-secondary bg-transparent",
        sidebarOutline: "bg-primary/15 text-primary border-primary border-2 hover:bg-primary/25",
        destructive: "bg-rose-500 text-white hover:bg-rose-500/90 border-rose-600 border-b-4 active:border-b-0",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 rounded-md gap-1.5 px-3",
        lg: "h-12 rounded-md px-8",
        icon: "w-11 h-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
