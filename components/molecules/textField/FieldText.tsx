import React, { FC } from "react";
import {
  FieldLabel,
  PasswordInputField,
  InputField,
  ErrorMessage,
} from "@atoms";
import { Controller } from "react-hook-form";

interface TextFieldPropTypes {
  label?: string;
  optional?: boolean;
  weight?: string | number;
  size?: string | number | object;
  style?: string;

  inputType: "text" | "password";
  control: any | undefined;
  name: string;
  handleErrorMessage?: boolean;
  errorMessage: string | undefined;
}

export const LabeledTextField: FC<TextFieldPropTypes> = ({
  label,
  optional,
  weight,
  size,
  style,

  inputType = "text",
  control,
  name,
  handleErrorMessage = true,
  errorMessage,
}) => {
  return (
    <>
      <Controller
        {...{ control }}
        name={name}
        render={({ field: { ref, onChange, onBlur, value, name } }) => (
          <>
            <FieldLabel
              text={label}
              optional={optional}
              weight={weight}
              size={size}
              style={style}
            />
            {inputType === "text" ? (
              <InputField
                onChange={(e: any) => {
                  return onChange(e);
                }}
                {...{
                  onBlur,
                  value,
                  name,
                }}
                inputRef={ref}
              />
            ) : (
              <PasswordInputField
                size={"small"}
                onChange={(e: any) => {
                  onChange(e);
                }}
                {...{
                  onBlur,
                  value,
                  name,
                }}
                inputRef={ref}
              />
            )}
          </>
        )}
      />
      {handleErrorMessage ? (
        <ErrorMessage errorMessage={errorMessage || ""} />
      ) : (
        ""
      )}
    </>
  );
};
