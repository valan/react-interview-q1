import { ReactNode } from 'react';
import { cn } from '../utils';

interface Props {
  children?: ReactNode; // content passthrough
  className?: string; // class names to merge with defaults
  [key: string]: any; // remaining props passthrough
}

/**
 * Simple button component
 * @param {Props} props
 * @returns {JSX.Element}
 */
function Button({ children, className, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={cn(
        'text-md relative rounded-md border-4 border-solid border-dark-800 bg-dark-600 px-2 py-1 font-bold text-light hover:enabled:border-dark-500 disabled:border-neutral-900 disabled:bg-neutral-600 disabled:text-neutral-400',
        className,
      )}
    >
      {children}
    </button>
  );
}

export default Button;
