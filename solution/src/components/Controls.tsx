import { useSignals } from '@preact/signals-react/runtime';
import Button from './Button';
import { listData } from './List';
import Loader from './Loader';
import { currentLocation, locations } from './Location';
import { currentName, nameIsDirty, nameIsLoading, nameIsValid } from './Name';

/**
 * Form controls/buttons
 * @param {void}
 * @returns {JSX.Element}
 */
function Controls() {
  useSignals();

  // We'll use this check to disable form controls for adding
  const shouldAllowSubmit = !!currentName.value && !!currentLocation.value && nameIsValid.value && !nameIsLoading.value;

  const reset = () => {
    // reset form controls
    currentName.value = '';
    currentLocation.value = locations.value[0];
    // reset form state
    nameIsDirty.value = false;
  };

  const handleClear = () => {
    // remove all items from the list
    listData.value = [];
    // and reset the form
    reset();
  };

  const handleAdd = () => {
    // add item to the list signal (replace with new array to trigger update)
    listData.value = [...listData.value, { name: currentName.value, location: currentLocation.value }];
    reset(); // once added, clear the form inputs
  };

  return (
    <div className="flex justify-end gap-2">
      <Button onClick={handleClear}>Clear</Button>
      <Button
        disabled={!shouldAllowSubmit}
        onClick={handleAdd}
      >
        <Loader
          show={nameIsLoading.value}
          className="text-dark-900 left-[2px] top-[2px] m-0 h-2 w-2"
        />
        Add
      </Button>
    </div>
  );
}

export default Controls;
