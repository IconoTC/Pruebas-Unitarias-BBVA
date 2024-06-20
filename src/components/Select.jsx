import { useState } from "react";

export const Select = ({ options, value }) => {
  //Estado local en el cual vamos a almacenar la opción seleccionada
  const [selectedOption, setSelectedOption] = useState(value);

  //Funcion que maneja el cambio de seleccion en el elemento {select}
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };
  
  return (
    <select value={selectedOption} onChange={handleSelectChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value} label={option.label} name={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};