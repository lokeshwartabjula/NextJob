"use client";

import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Link,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import AuthLayout from "../layout";
import React, { ReactElement, useContext } from "react";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import { axiosInstance } from "../../../../api";
import { UserContext } from "@/app/(context)/UserContext";
import { setUserData } from "@/app/(context)/LocatStorageManager";

interface LoginResponseType {
  token: string;
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  isSeeker: boolean;
  isEmployer: boolean;
  companyId?: string;
  companyName?: string;
  loginType?: "seeker" | "employer";
}

function Page(): ReactElement {
  const router = useRouter();
  const [isHydrated, setIsHydrated] = React.useState(false);

  const userContext = useContext(UserContext);
  
  const { dispatch } = userContext;

  const handleLoginAndRedirect = (value: {
    loginType: string;
    email: string;
    password: string;
  }) => {
    axiosInstance
      .post("/pub/login", {...value, submit: undefined})
      .then((res) => {
        const data: LoginResponseType = res.data.response;
        setUserData(data);
        dispatch(data);
        if (!data.isSeeker) {
          router.push("/onboard/seeker");
        } else if (!data.isEmployer) {
          router.push("/onboard/employer");
        } else {
          router.push("/");
        }
      })
      .catch((err) => {});
  };

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);
  const formik = useFormik({
    initialValues: {
      loginType: "seeker",
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        console.log(values);
        handleLoginAndRedirect(values);
      } catch (err: any) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Box
        sx={{
          backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Login</Typography>
            </Stack>
            <form noValidate onSubmit={formik.handleSubmit}>
              {isHydrated && (
                <Stack spacing={3}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <ToggleButtonGroup
                      value={formik.values.loginType}
                      exclusive
                      onChange={(event, newLoginType) => {
                        formik.setFieldValue("loginType", newLoginType);
                      }}
                      aria-label="login type"
                      size="large"
                    >
                      <ToggleButton
                        value="seeker"
                        aria-label="seeker"
                        sx={{ margin: "5px", marginRight: "10px" }}
                      >
                        <PersonIcon />
                        <Typography color="text.secondary" variant="body1">
                          Seeker
                        </Typography>
                      </ToggleButton>
                      <ToggleButton
                        value="employer"
                        aria-label="employer"
                        sx={{
                          margin: "5px",
                          marginLeft: "10px",
                          borderLeft:
                            "1px solid rgba(0, 0, 0, 0.12) !important",
                        }}
                      >
                        <BusinessIcon />
                        <Typography color="text.secondary" variant="body1">
                          Employer
                        </Typography>
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Box>
                  <TextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email Address"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                  />
                  <TextField
                    error={
                      !!(formik.touched.password && formik.errors.password)
                    }
                    fullWidth
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    label="Password"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password}
                  />
                </Stack>
              )}

              {formik.errors.submit && (
                <Typography color="error" sx={{ mt: 3 }} variant="body2">
                  {formik.errors.submit}
                </Typography>
              )}
              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
              >
                Login
              </Button>
              <Typography color="text.secondary" variant="body2">
                Don&apos;t have an account? &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/register"
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </Link>
              </Typography>
            </form>
          </div>
        </Box>
      </Box>
    </>
  );
}

Page.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Page;
