import { Signal, signal } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';
import { useEffect, useId } from 'react';
import { getLocations } from '../mock-api/apis';
import Label from './Label';
import SelectInput from './SelectInput';

// signals for form state, export for external access
// `locations` is populated from the API when this component is mounted, cleared on unmount
export const locations: Signal<string[]> = signal([]);
// selected value from the dropdown
export const currentLocation: Signal<string> = signal('');

/**
 * Location dropdown component
 * @param {void}
 * @returns {JSX.Element}
 */
function Name() {
  // unique id for the label/input pairing
  const id = useId();

  useSignals();

  useEffect(() => {
    // query the locations api
    getLocations().then((value) => {
      // assign result data to the signal
      locations.value = value;
      // set the selected value to the first item in the result data
      currentLocation.value = value[0];
    });

    // clear items on cleanup/unmount
    return () => {
      locations.value = [];
    };
  }, []);

  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // update the selected value from the key event
    currentLocation.value = e.target.value;
  };

  return (
    <>
      <Label htmlFor={id}>Location</Label>
      <SelectInput
        id={id}
        onChange={changeHandler}
        selectedValue={currentLocation.value}
      />
    </>
  );
}

export default Name;
