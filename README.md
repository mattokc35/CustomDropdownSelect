# Custom Dropdown Select (React + Vite)

To demo, first `git clone` this repository.

Next, inside the project directory run the command `npm install`.

Finally, run the command `npm run dev`. You should then see the Web App running on localhost.

The source code for the Dropdown component can be found in `src/components/Dropdown.jsx`, and `src/App.jsx` contains different examples of the dropdown (both multi-selects and regular selects) using various Component API props.

## Dropdown Component Props

- `isMultiSelect` (boolean, default: `false`): Determines whether the dropdown allows multiple options to be selected.
  
- `options` (array of objects): An array of objects representing the selectable options in the dropdown. Each object should have the following shape:
  - `label` (string, required): The display label for the option.
  - `value` (any, required): The value associated with the option.
  
- `onSelect` (function): A function called when an option is selected. It receives an array of selected options as an argument.

- `label` (string): The label displayed above the dropdown.

- `scrollItems` (number, default: `4`): The number of options displayed before the dropdown becomes scrollable.

- `showToggleArrow` (boolean, default: `true`): Determines whether to show the toggle arrow indicating the dropdown state.

- `noneOptionLabel` (string, default: `"None"`): The label for the custom "None" option in single-select dropdowns.

- `width` (string): The width of the dropdown component.