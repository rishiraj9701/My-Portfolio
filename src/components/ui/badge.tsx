import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'accent' | 'muted';
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  className = '',
  children,
  ...props
}) => {
  const variantStyles = {
    default: 'border-transparent bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900',
    secondary: 'border-transparent bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200',
    outline: 'border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 bg-transparent',
    accent: 'border-orange-500/20 bg-orange-500/10 text-orange-700 dark:text-orange-400',
    muted: 'border-transparent bg-zinc-100/60 dark:bg-zinc-800/40 text-zinc-500 dark:text-zinc-400',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors select-none',
        variantStyles[variant] || variantStyles.default,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default Badge;
