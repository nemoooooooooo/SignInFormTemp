import React, { FC, useEffect, useState } from "react";
import { Heading } from "@atoms";
import { HeadingContainer, LabeledTextField } from "@molecules";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SigninSchema } from "./signin.schema";
import { Box, Grid, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useRouter } from "next/router";
import { ErrorMessage } from "@atoms";

interface SignInFormPropTypes {
  email: string;
  password: string;
}

interface ErrorPropTypes {
  loginErrorResponses: any;
}

export const SignInForm: FC<ErrorPropTypes> = ({ loginErrorResponses }) => {
  const router = useRouter();
  const [showErrorMessage, setShowErrorMessage] = useState<string>("");

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm<SignInFormPropTypes>({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(SigninSchema),
    mode: "onChange",
  });

  const handleForgetPass = async (e: any): Promise<any> => {
    e.preventDefault();
    try {
      await router.push("/forgotpassword");
    } catch (e) {}
  };

  useEffect(() => {
    if (!loginErrorResponses) return setShowErrorMessage("");
    const { message } = loginErrorResponses;
    setShowErrorMessage(message);
  }, [loginErrorResponses]);

  const onSubmitHandler = (data: any) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} style={{ width: "100%" }}>
      <HeadingContainer
        padding={"20px 0px 20px"}
        children={<Heading text={"Login to Continue"} />}
      />
      <LabeledTextField
        label={"Email"}
        inputType={"text"}
        control={control}
        name={"email"}
        errorMessage={errors?.email?.message}
      />

      <LabeledTextField
        label={"Password"}
        inputType={"password"}
        control={control}
        name={"password"}
        errorMessage={errors?.password?.message}
      />

      <Box>
        <LoadingButton
          className={!isDirty || !isValid ? "" : "gradiant-button"}
          //disabled={!isDirty || !isValid}
          //loading={isLoading}
          type="submit"
          sx={{ width: "100%", height: "54px", marginTop: "25px" }}
          variant="contained"
        >
          Login
        </LoadingButton>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ marginTop: "12px" }}
        >
          <Typography
            sx={{
              color: "#A8238C",
              fontWeight: "500",
              fontSize: "14px",
              cursor: "pointer",
            }}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={handleForgetPass}
          >
            Forgot your password?
          </Typography>
        </Grid>
      </Box>

      {showErrorMessage && (
        <ErrorMessage
          errorMessage={showErrorMessage}
          color={"#F91732"}
          mt={3}
          fontSize={"16px"}
          fontWeight={"500"}
        />
      )}
    </form>
  );
};
