import React from "react";
import styles from "./FormControls.module.css";

export const FromControl = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  ...props
}) => {
  const hasError = touched && error;
  return (
    <div>
      <label>{label}</label>
      <div
        className={styles.formControl + " " + (hasError ? styles.error : "")}
      >
        {props.children}
      </div>
      <div>
        {(touched && error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>)}
      </div>
    </div>
  );
};

export const Textarea = (props) => {
  const { input, label, type, ...restProps } = props;
  return (
    <FromControl {...props}>
      <textarea {...input} placeholder={label} type={type} {...restProps} />
    </FromControl>
  );
};

export const Input = (props) => {
  const { input, label, type, ...restProps } = props;
  return (
    <FromControl {...props}>
      <input {...input} placeholder={label} type={type} {...restProps} />
    </FromControl>
  );
};
