import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "icon";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = "", variant = "default", size = "default", ...props },
    ref
  ) => {
    return (
      <button
        className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background
          ${
            variant === "outline"
              ? "border border-input hover:bg-accent hover:text-accent-foreground"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }
          ${
            size === "sm"
              ? "h-9 px-3"
              : size === "icon"
              ? "h-10 w-10"
              : "h-10 px-4 py-2"
          }
          ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
