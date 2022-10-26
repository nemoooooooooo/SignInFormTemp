import { Typography } from "@mui/material";
import React, { FC } from "react";

interface TextPropTypes {
  text?: string;
  size?: string | number;
  style?: string;
  width?: string | number;
}
export const Heading: FC<TextPropTypes> = ({
  text = "Meow",
  size = "32px",
  style = "Jost" 
}) => {
  return (
    <Typography
      sx={{
        fontWeight: "600",
        fontSize: size ,
        fontFamily: style,
        
      }}
    >
      {text}
    </Typography>
  );
};
