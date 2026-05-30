import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-display font-medium rounded-xl transition-all duration-200 outline-none focus:ring-2 focus:ring-brand-orange-500/50 cursor-pointer select-none';
  
  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 rounded-lg gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2',
    lg: 'text-base px-6 py-3 rounded-xl gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-brand-orange-500 text-white hover:bg-brand-orange-600 shadow-md shadow-brand-orange-500/10 border border-brand-orange-500/20 active:scale-95',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700/80 dark:text-gray-100 dark:border-gray-700 active:scale-95',
    glass: 'glass-panel text-gray-800 hover:text-brand-orange-600 dark:text-gray-200 dark:hover:text-brand-orange-400 hover:border-brand-orange-500/30 shadow-sm active:scale-95',
    ghost: 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white bg-transparent active:scale-95',
    glow: 'relative text-white overflow-hidden bg-gradient-to-r from-brand-orange-500 to-amber-500 hover:from-brand-orange-600 hover:to-amber-600 shadow-lg shadow-brand-orange-500/20 border border-brand-orange-500/30 after:absolute after:inset-0 after:bg-white/10 after:opacity-0 hover:after:opacity-100 after:transition-opacity',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      whileHover={{ y: -1.5, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      {...props as any}
    >
      {children}
    </motion.button>
  );
};
export default Button;
