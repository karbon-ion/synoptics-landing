'use client';

import React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Define button variants using class-variance-authority
const buttonVariants = cva(
  // Base styles that apply to all variants
  "inline-flex items-center justify-center font-medium transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
  {
    variants: {
      variant: {
        primary: "text-white bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700",
        secondary: "text-blue-600 bg-white border border-blue-200 hover:bg-blue-50",
        outline: "text-blue-600 bg-transparent border border-blue-500 hover:bg-blue-50",
        ghost: "text-blue-600 bg-transparent hover:bg-blue-50",
        link: "text-blue-600 bg-transparent underline-offset-4 hover:underline p-0 shadow-none hover:shadow-none",
      },
      size: {
        sm: "px-4 py-2 text-sm rounded-full",
        md: "px-6 py-2.5 text-base rounded-full",
        lg: "px-8 py-3 text-lg rounded-full",
        xl: "px-10 py-4 text-xl rounded-full",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  external?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, href, external, children, ...props }, ref) => {
    // If href is provided, render as Link
    if (href) {
      const linkProps = external 
        ? { target: "_blank", rel: "noopener noreferrer" } 
        : {};
        
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, fullWidth, className }))}
          {...linkProps}
        >
          {children}
        </Link>
      );
    }

    // Otherwise render as button
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
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
