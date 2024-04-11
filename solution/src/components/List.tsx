import { Signal, signal } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';
import { cn } from '../utils';

// signals for list data, export for external access
export type ListItem = { name: string; location: string };
export const listData: Signal<ListItem[]> = signal([
  // start with some demo data on page load
  { name: 'Alice', location: 'Canada' },
  { name: 'Bob', location: 'China' },
  { name: 'Charlie', location: 'USA' },
  { name: 'David', location: 'Brazil' },
]);

/**
 * List table of all the data items
 * @param {void}
 * @returns {JSX.Element}
 */
function List() {
  useSignals();

  return (
    <div className="border-light-200 mt-20 grid grid-cols-[1fr_1fr] rounded-md border-4 border-solid">
      <div className="bg-dark-600 px-2 py-1 font-bold">Name</div>
      <div className="bg-dark-600 px-2 py-1 font-bold">Location</div>
      {listData.value.map((item, index) => (
        <div
          // display: contents here will allow the grandchildren to be grid items
          className="contents"
          key={item.name}
        >
          {['name', 'location'].map(
            // iterate over each field in the row
            (key) => (
              // alternating row colors
              <div className={cn('text-dark px-2 py-1 font-bold', index % 2 ? 'bg-light-50' : 'bg-light-300')}>
                {item[key as keyof ListItem]}
              </div>
            ),
          )}
        </div>
      ))}
    </div>
  );
}

export default List;
