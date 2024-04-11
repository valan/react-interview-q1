import { ReactNode } from 'react';
import { cn } from '../utils';

interface Props {
  children?: ReactNode; // content passthrough
  className?: string; // class names to merge with defaults
  [key: string]: any; // remaining props passthrough
}

/**
 * Simple label component
 * @param {Props} props
 * @returns {JSX.Element}
 */
function Label({ children, className, ...rest }: Props) {
  return (
    <label
      {...rest}
      className={cn('text-right text-lg font-bold text-light', className)}
    >
      {children}
    </label>
  );
}

export default Label;
