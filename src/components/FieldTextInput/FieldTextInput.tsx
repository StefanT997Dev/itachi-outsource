import React from "react";
import { Field } from "react-final-form";
import classes from "./index.module.scss";

type FieldTextInputProps = {
  placeholder: string;
  name: string;
  type?: string;
  label?: string;
  validate?: any;
};

const FieldTextInput: React.FC<FieldTextInputProps> = (props) => {
  const { placeholder, name, type, label, validate } = props;
  return (
    <Field
      name={name}
      render={({ input, meta }) => (
        <div className={classes.text_input}>
          <label className={classes.text_input__label}>{label}</label>
          <input
            {...input}
            type={type}
            className={`${classes.text_input__input} ${
              meta.error && meta.touched && classes.text_input__input__error
            }`}
            placeholder={placeholder}
          />
          {meta.error && meta.touched && (
            <span className={classes.text_input__error}>{meta.error}</span>
          )}
        </div>
      )}
      validate={validate}
    />
  );
};

export default FieldTextInput;
