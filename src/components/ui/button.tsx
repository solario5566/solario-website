import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(255,122,0,0.15)] hover:shadow-[0_0_28px_rgba(255,122,0,0.25)] hover:brightness-105 hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent hover:bg-secondary hover:text-secondary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Solario premium button variants with subtle glow
        hero: "bg-gradient-orange text-primary-foreground shadow-[0_0_24px_rgba(255,122,0,0.18)] hover:shadow-[0_0_32px_rgba(255,122,0,0.28)] hover:brightness-105 hover:-translate-y-0.5",
        heroOutline: "border-2 border-foreground/40 text-foreground bg-transparent hover:bg-foreground/10 hover:border-foreground/60",
        nav: "bg-primary text-primary-foreground shadow-[0_0_16px_rgba(255,122,0,0.12)] hover:shadow-[0_0_24px_rgba(255,122,0,0.22)] hover:brightness-105",
        cta: "bg-navy-dark text-foreground hover:bg-navy shadow-lg hover:-translate-y-0.5",
      },
      size: {
        default: "h-11 px-6 rounded-md",
        sm: "h-9 px-4 text-sm rounded-md",
        lg: "h-12 px-8 rounded-md",
        xl: "h-14 px-10 text-base rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };