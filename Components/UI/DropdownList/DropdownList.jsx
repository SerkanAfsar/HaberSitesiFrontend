"use client";
import { memo } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import styles from "./DropdownList.module.scss";
const animatedComponents = makeAnimated();

const DropdownList = ({ title, name, ...props }) => {
  const optionValues = props.options;
  if (optionValues) {
    optionValues.splice(0, 0, { label: title, value: 0 });
  }
  return (
    <div className={`form-group ${styles.drp}`}>
      <label htmlFor={name}>{title}</label>
      <Select
        name={name}
        id={name}
        components={animatedComponents}
        classNamePrefix="select"
        onChange={props.onChange}
        className={props.className}
        {...props}
      />
    </div>
  );
};

export default memo(DropdownList);
