import React from "react";
import classes from "./inputElement.module.css";

interface IProps {
  label: string;
  name: string;
  id: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputElement = (props: IProps) => {
  const { label, name, id, value, handleChange } = props;
  return (
    <>
      <label className={classes["title"]} htmlFor={name}>
        {label}
      </label>
      <input
        className={classes["form__input"]}
        type="text"
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};
