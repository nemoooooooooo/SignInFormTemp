import { Box, Grid } from "@mui/material";
import React, { FC } from "react";
import { HeadingContainer } from "@molecules";
import Image from "next/image";

interface LayoutPropTypes {
  children: React.ReactNode;
}
export const SignInPage: FC<LayoutPropTypes> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage: `url(${"/images/bg.png"})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        sx={{
          width: "602px",
          backgroundColor: "white",
          p: {
            xl: "96px 46px 54px",
            lg: "96px 46px 54px",
            md: "96px 46px 54px",
            sm: "96px 20px",
            xs: "50px 15px",
          },
          borderRadius: "9px",
        }}
      >
        <HeadingContainer padding={"0px 0px 21px"}>
          <Image src={"/images/Frame.svg"} width="180px" height="22px" />
        </HeadingContainer>
        <Grid width = "100%">{children}</Grid>
      </Grid>
    </Box>
  );
};
