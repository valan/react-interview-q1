import Controls from './components/Controls';
import List from './components/List';
import Location from './components/Location';
import Name from './components/Name';

/**
 * Main layout component
 * Sets responsive widths and form component layout
 * @param {void}
 * @returns {JSX.Element}
 */
function App() {
  return (
    <div className="mx-auto w-full px-8 sm:w-2/3 sm:max-w-3xl sm:px-0">
      <div className="my-6 grid grid-cols-[min-content_1fr] items-center gap-x-4 gap-y-16 lg:grid-cols-[min-content_1fr_min-content_1fr]">
        <Name />
        <Location />
      </div>
      <Controls />
      <List />
    </div>
  );
}

export default App;
