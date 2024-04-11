import { useSignals } from '@preact/signals-react/runtime';
import { ReactNode } from 'react';
import { cn } from '../utils';
import Loader from './Loader';
import { locations } from './Location';

interface Props {
  className?: string; // class names to merge with defaults
  error?: ReactNode; // error message to display
  isLoading?: boolean; // show the loading spinner
  selectedValue?: string; // current form value
  [key: string]: any; // remaining props passthrough
}

/**
 * Generic dropdown component
 * @param {Props} props
 * @returns {JSX.Element}
 */
function SelectInput({ className, error, isLoading = false, selectedValue, ...rest }: Props) {
  useSignals();

  const classNameMerged = cn(
    'bg-light-100 text-dark selection:bg-accent-950 selection:text-light border-light-200 focus:border-dark-500 w-full rounded-lg border-4 border-solid px-4 py-2 text-lg font-bold focus:outline-none',
    className,
  );

  return (
    <div className="">
      <Loader show={isLoading} />
      <select
        {...rest}
        className={classNameMerged}
        value={selectedValue}
      >
        {locations.value.map((location) => (
          <option
            key={location}
            value={location}
          >
            {location}
          </option>
        ))}
      </select>
      {error && <p className="absolute text-sm font-bold text-error">{error}</p>}
    </div>
  );
}

export default SelectInput;
