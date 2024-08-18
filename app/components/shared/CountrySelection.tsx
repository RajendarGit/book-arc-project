import React, { FC } from "react";
import { BiBorderRadius } from "react-icons/bi";
import Select, { SingleValue } from "react-select";

type CountryOption = {
  value: string;
  label: string;
};

const countries: CountryOption[] = [
  { value: "India", label: "India" },
  { value: "Sri Lanka", label: "Sri Lanka" },
  { value: "United States", label: "United States" },
  { value: "Canada", label: "Canada" },
  { value: "Australia", label: "Australia" },
  { value: "Germany", label: "Germany" },
  { value: "France", label: "France" },
  { value: "Japan", label: "Japan" },
  { value: "South Korea", label: "South Korea" },
  { value: "United Kingdom", label: "United Kingdom" },
];

interface CountrySelectionProps {
  value?: CountryOption | null;
  onChange?: (option: SingleValue<CountryOption>) => void;
}

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    height: "47px",
    minHeight: "47px",
    borderRadius: '.5rem',
  }),
};

const CountrySelection: FC<CountrySelectionProps> = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor="country" className="mb-3 block">
        Country
      </label>
      <Select
        styles={customStyles}
        options={countries}
        value={value}
        onChange={onChange}
        placeholder="Select a country"
        className="w-full"
      />
    </>
  );
};

export default CountrySelection;
