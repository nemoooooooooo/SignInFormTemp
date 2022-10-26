import { Typography } from "@mui/material";
import React, { FC } from "react";

interface LabelPropTypes {
  text?: string;
  size?: string | number | object;
  style?: string;
  width?: string | number;
  hight?: string | number;
  weight?: string | number;
  padding?: string;
  optional?: boolean;
}
export const FieldLabel: FC<LabelPropTypes> = ({
  text,
  size = { md: "16px", sm: "14px", xs: "14px" },
  style = "Jost",
  width = "178px",
  hight = "17px",
  weight = "500",
  padding = "0px 0px 6px",
  optional = false,
}) => {
  return (
     text ?
     (
    <Typography
      sx={{
        fontWeight: weight,
        fontSize: size,
        fontFamily: style,
        width: width,
        hight: hight,
        p: { padding },
      }}
    >
      {text}
      <span style={{ color: '#8F8F8F' }}>
          {optional ? ' (Optional)' : ''}
      </span>
    </Typography>) : null

  );
};
