// Author: Aayush Dakwala
// Banner: B00945308
// Email:  ay383119@dal.ca

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
  Typography,
  Backdrop,
  CircularProgress,
  Alert,
  Snackbar,
} from "@mui/material";
import AuthLayout from "../layout";
import React, { ReactElement } from "react";
import { axiosInstance } from "../../../../api";
import { message } from "antd";
import { tr } from "date-fns/locale";

function Page(): ReactElement {
  const router = useRouter();

  const [isHydrated, setIsHydrated] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [responseMessage, setResponseMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      submit: null,
    },
    validateOnBlur: true,

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      firstName: Yup.string()
        .matches(
          /^(?=.*[a-zA-Z])[a-zA-Z0-9 ]+$/,
          "First name must contain only alphabets or a combination of alphabets, numbers, and spaces"
        )
        .max(40)
        .required(),
      lastName: Yup.string().max(255).required("Last name is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        setIsLoading(true);
        axiosInstance
          .post("/pub/register", { ...values, submit: undefined })
          .then((res) => {
            setResponseMessage(
              "Account Created! Now Please Login to Add Your Information."
            );
            setOpenSnackbar(true);
            setIsLoading(false);
            router.push("/auth/login");
          })
          .catch((err) => {
            message.error(err?.response?.data?.message);
            message.error("Error while regestring user");
            setIsLoading(false);
          });
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
        <title>Register | Devias Kit</title>
      </Head>
      <Box
        sx={{
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
              <Typography variant="h4">Register</Typography>
              <Typography color="text.secondary" variant="body2">
                Already have an account? &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/login"
                  underline="hover"
                  variant="subtitle2"
                >
                  Log in
                </Link>
              </Typography>
            </Stack>
            <form noValidate onSubmit={formik.handleSubmit}>
              {isHydrated && (
                <Stack spacing={3}>
                  <TextField
                    id="firstName"
                    type="text"
                    error={
                      !!(formik.touched.firstName && formik.errors.firstName)
                    }
                    fullWidth
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                    label="First Name"
                    name="firstName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />
                  <TextField
                    error={
                      !!(formik.touched.lastName && formik.errors.lastName)
                    }
                    fullWidth
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                    label="Last Name"
                    name="lastName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
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
                Register
              </Button>
            </form>
            <Backdrop
              open={isLoading}
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            <Snackbar
              open={openSnackbar}
              autoHideDuration={6000}
              onClose={handleCloseSnackbar}
            >
              <Alert
                onClose={handleCloseSnackbar}
                severity="success"
                elevation={3}
              >
                {responseMessage}
              </Alert>
            </Snackbar>
          </div>
        </Box>
      </Box>
    </>
  );
}

Page.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Page;
