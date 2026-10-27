import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'glass' | 'glow';
  size?: 'default' | 'sm' | 'md' | 'lg' | 'icon';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'default', 
    size = 'default', 
    fullWidth = false, 
    className = '', 
    children, 
    ...props 
  }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer';

    const sizeStyles: Record<string, string> = {
      default: 'h-10 px-4 py-2 text-sm rounded-lg gap-2',
      sm: 'h-8 px-3 text-xs rounded-md gap-1.5',
      md: 'h-10 px-4 py-2 text-sm rounded-lg gap-2',
      lg: 'h-11 px-6 text-sm font-medium rounded-lg gap-2.5',
      icon: 'h-9 w-9 rounded-lg',
    };

    const variantStyles: Record<string, string> = {
      default: 'bg-zinc-900 text-zinc-50 hover:bg-orange-600 hover:text-white dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-orange-600 dark:hover:text-white border border-transparent shadow-xs',
      primary: 'bg-zinc-900 text-zinc-50 hover:bg-orange-600 hover:text-white dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-orange-600 dark:hover:text-white border border-transparent shadow-xs',
      accent: 'bg-orange-600 text-white hover:bg-orange-500 border border-orange-600 dark:border-orange-500 shadow-xs',
      glow: 'bg-orange-600 text-white hover:bg-orange-500 border border-orange-600 dark:border-orange-500 shadow-xs',
      secondary: 'bg-zinc-100 text-zinc-900 hover:text-orange-600 hover:border-orange-500/30 dark:bg-zinc-800/80 dark:text-zinc-100 dark:hover:text-orange-400 border border-transparent',
      outline: 'border border-zinc-200 dark:border-zinc-800 bg-transparent hover:border-orange-500/40 hover:text-orange-600 dark:hover:text-orange-400',
      glass: 'border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 hover:border-orange-500/40 hover:text-orange-600 dark:hover:text-orange-400 text-zinc-900 dark:text-zinc-100 shadow-xs',
      ghost: 'hover:text-orange-600 dark:hover:text-orange-400 text-zinc-700 dark:text-zinc-300',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          sizeStyles[size] || sizeStyles.default,
          variantStyles[variant] || variantStyles.default,
          fullWidth ? 'w-full' : '',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
