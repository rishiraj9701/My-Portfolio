import React from 'react';
import { cn } from '../../lib/utils';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation = 'horizontal',
  className = '',
  ...props
}) => {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        'shrink-0 bg-zinc-200 dark:bg-zinc-800',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className
      )}
      {...props}
    />
  );
};
export default Separator;
