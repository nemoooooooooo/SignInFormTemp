import React, { FC } from "react";
import { Grid } from "@mui/material";

interface ContainerPropTypes {
  children: React.ReactNode |  JSX.Element;
  padding?: string;
}
export const HeadingContainer: FC<ContainerPropTypes> = ({
  children,
  padding = "0px",
}) => {
  return (
    <Grid
      item
      sx={{ p: { padding } }}
      container
      alignItems="center"
      justifyContent="center"
      
    
    >
      <Grid item>{children}</Grid>
    </Grid>
  );
};
