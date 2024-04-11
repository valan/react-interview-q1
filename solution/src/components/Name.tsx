import { Signal, signal } from '@preact/signals-react';
import { useSignalEffect, useSignals } from '@preact/signals-react/runtime';
import { useId, useMemo, useState } from 'react';
import { isNameValid } from '../mock-api/apis';
import { debounce } from '../utils';
import Label from './Label';
import TextInput from './TextInput';

// signals for form state, export for external access
// current name value in the form, this should only update if name is valid, or reset to empty
export const currentName: Signal<string> = signal('');
// has user touched the input yet?
export const nameIsDirty: Signal<boolean> = signal(false);
// latest validation result
export const nameIsValid: Signal<boolean> = signal(false);
// is the name validation in progress?
export const nameIsLoading: Signal<boolean> = signal(false);

/**
 * Name text input component
 * @param {void}
 * @returns {JSX.Element}
 */
function Name() {
  // unique id for the label/input pairing
  const id = useId();

  useSignals();

  // local state for the input value
  const [inputValue, setInputValue] = useState('');

  // show an error if it fails the validation check, but not if the user hasn't entered anything yet
  const shouldShowError = nameIsDirty.value && !nameIsValid.value && !nameIsLoading.value;

  // check if the name is valid via api, expensive, so add a debounce
  const checkName = useMemo(
    () =>
      debounce(async (value: string) => {
        nameIsDirty.value = true;
        nameIsLoading.value = true;
        nameIsValid.value = await isNameValid(value);
        nameIsLoading.value = false;
        if (nameIsValid.value) {
          currentName.value = value;
        }
      }, 500),
    [],
  );

  // update the input value and run validation check
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    checkName(e.target.value);
  };

  // if signals are updated anywhere else (such as reset), update the input value
  useSignalEffect(() => {
    setInputValue(currentName.value);
  });

  return (
    <>
      <Label htmlFor={id}>Name</Label>
      <TextInput
        id={id}
        // show loading spinner if the name is being validated
        isLoading={nameIsLoading.value}
        onChange={handleChange}
        value={inputValue}
        error={shouldShowError && <>This name has already been taken</>}
      />
    </>
  );
}

export default Name;
