import { TextField, IconButton } from "@mui/material";
import React, { FC } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

interface PasswordFieldPropTypes {
  placeHolder?: string;
  padding?: string;
  height?: string | number;
  py?: string | number;
  radius?: string;
  type?: "text" | "password";
  size: "small" | "medium";
  isValid?: any;
  fullWidth?: boolean;
  onChange?: any | undefined;
  inputRef?:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;
}

export const PasswordInputField: FC<PasswordFieldPropTypes> = ({
  inputRef,
  size = "small",
  isValid,
  placeHolder = "Enter password",
  padding = "0px 0px 36px",
  height = "46px",
  py = "0px",
  radius = "12px",
}) => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleClickShowPassword = (): void => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  return (
    <TextField
      fullWidth
      placeholder={placeHolder}
      sx={{
        p: { padding },
        "& .MuiInputBase-input": { height: height, py: py },
        borderRadius: radius,
      }}
      error={!!isValid}
      color={"secondary"}
      ref={inputRef}
      id="password"
      data-testid="password-text-field"
      type={values.showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              size={size}
              style={{ marginRight: "12px", height: "13px", width: "16px" }}
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {values.showPassword ? (
                <VisibilityOutlinedIcon
                  sx={{ color: "common.icon", fontSize: "20px" }}
                />
              ) : (
                <VisibilityOffOutlinedIcon
                  sx={{ color: "common.icon", fontSize: "20px" }}
                />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
