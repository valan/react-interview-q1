import { ReactNode } from 'react';
import Loader from './Loader';

interface Props {
  className?: string; // class names to merge with defaults
  error?: ReactNode; // error message to display
  isLoading?: boolean; // show the loading spinner
  [key: string]: any; // remaining props passthrough
}

/**
 * Generic text input component
 * @param {Props} props
 * @returns {JSX.Element}
 */
function TextInput({ className, isLoading = false, error, ...rest }: Props) {
  return (
    <div>
      <Loader show={isLoading} />
      <input
        type="text"
        {...rest}
        className="w-full rounded-lg border-4 border-solid border-light-200 bg-light-100 px-4 py-2 text-lg font-bold text-dark selection:bg-accent-950 selection:text-light focus:border-dark-500 focus:outline-none"
      />
      {error && (
        <span className="text-md absolute mt-2 flex items-center gap-1 text-nowrap rounded-md bg-error px-2 py-1 font-bold text-white">
          {error}
        </span>
      )}
    </div>
  );
}

export default TextInput;
