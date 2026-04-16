import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    
    const variants = {
      primary: "bg-accent-primary text-white hover:bg-accent-glow hover:shadow-[0_0_30px_rgba(255,59,31,0.3)] transition-all duration-300",
      secondary: "bg-white text-black hover:bg-white/90",
      outline: "border border-border-subtle bg-transparent text-text-primary hover:border-accent-primary hover:shadow-[0_0_20px_rgba(255,59,31,0.15)] hover:text-white transition-all duration-300",
      ghost: "bg-transparent hover:bg-white/5 text-text-primary",
    };

    const sizes = {
      default: "h-12 px-6 py-3 font-medium",
      sm: "h-9 px-4 text-sm",
      lg: "h-14 px-8 text-lg font-semibold",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
