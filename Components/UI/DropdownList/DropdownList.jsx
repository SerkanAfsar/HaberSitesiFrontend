"use client";
import { memo, useEffect, useRef } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import styles from "./DropdownList.module.scss";
const animatedComponents = makeAnimated();

const DropdownList = ({ title, name, ...props }) => {
  const ref = useRef({ label: title, value: 0 });
  useEffect(() => {
    if (props?.options?.findIndex((a) => a.value == ref.current.value) == -1) {
      props?.options?.splice(0, 0, ref.current);
    }
  }, [props.options]);

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
