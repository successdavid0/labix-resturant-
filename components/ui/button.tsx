import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        primary:
          "bg-gold-primary text-white hover:bg-gold-accent dark:bg-dark-gold-primary dark:text-dark-bg-primary dark:hover:bg-gold-primary",
        secondary:
          "bg-transparent border-2 border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-white dark:border-dark-gold-primary dark:text-dark-gold-primary",
        ghost:
          "bg-transparent text-gold-primary hover:bg-gold-primary/10 dark:text-dark-gold-primary dark:hover:bg-dark-gold-primary/10",
        outline:
          "border border-white/20 bg-white/10 text-foreground hover:bg-white/20 dark:border-dark-bg-elevated dark:bg-dark-bg-elevated/50",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, children, ...props }, ref) => {
    const buttonClasses = cn(buttonVariants({ variant, size, className }));
    
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        className: cn(buttonClasses, (children.props as any)?.className),
        ...(props as any),
      });
    }
    
    return (
      <button
        className={buttonClasses}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
