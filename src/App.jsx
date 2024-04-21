import React from "react";
import Dropdown from "./components/Dropdown";
import "./App.css";

function App() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "vanilla", label: "Vanilla" },
    { value: "strawberry", label: "Strawberry" },
    { value: "matcha", label: "Matcha" },
  ];
  const pokemonOptions = [
    { value: "charmander", label: "Charmander" },
    { value: "squirtle", label: "Squirtle" },
    { value: "bulbasaur", label: "Bulbasaur" },
  ];
  const numberOptions = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
  ];

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "10rem" }}>
        {/* Example 1: Multi-select dropdown with options scrollable and 30% width*/}
        <Dropdown
          isMultiSelect={true}
          options={options}
          label={"Ice Cream Flavors"}
          scrollItems={3}
          width={"30%"}
        />

        {/* Example 2: Single-select dropdown with custom label and no arrow and 30% width*/}
        <Dropdown
          isMultiSelect={false}
          options={options}
          label={"Select a Flavor"}
          showToggleArrow={false}
          width={"30%"}
        />

        {/* Example 3: Multi-select dropdown with Pokemon options and 40% width */}
        <Dropdown
          isMultiSelect={true}
          options={pokemonOptions}
          label={"Starter Pokemon"}
          width={"40%"}
        />

        {/* Example 4: Single-select dropdown with custom 'None' option and 60% width */}
        <Dropdown
          isMultiSelect={false}
          options={numberOptions}
          label={"Select a Number"}
          noneOptionLabel={"None Custom"}
          scrollItems={3}
          width={"60%"}
        />
      </div>
    </>
  );
}

export default App;
