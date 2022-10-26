import { TextField, IconButton } from "@mui/material";
import React, { FC } from "react";

interface InputFieldPropTypes {
  placeHolder?: string;
  padding?: string;
  height?: string | number;
  py?: string | number;
  radius?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  inputRef?:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;
  id?: string;
  color?:
    | "secondary"
    | "error"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | undefined;
    onChange?: (e: any) => void;
  //adornment?: React.ReactNode;
}

export const InputField: FC<InputFieldPropTypes> = ({
  inputRef,
  placeHolder = "Enter ...",
  padding = "0px 0px 36px",
  height = "46px",
  py = "0px",
  id,
  radius = "12px",
  color = "secondary",

}) => {
  return (
    <TextField

      fullWidth
      placeholder={placeHolder}
      sx={{
        p: { padding },
        "& .MuiInputBase-input": { height: height, py: py },
        borderRadius: radius,
      }}
      color={color}
      ref={inputRef}
      id={id}
      data-testid="generic-text-field"
      //InputProps={{{adornment}}}
    />
  );
};
