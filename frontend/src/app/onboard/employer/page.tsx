"use client";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  Formik,
  Field,
  Form,
  FormikErrors,
  ErrorMessage,
  FormikTouched,
} from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import { axiosInstance } from "../../../../api";
import { UserContext } from "@/app/(context)/UserContext";
import { useRouter } from "next/navigation";

interface FormType {
  jobTitle: string;
  phone: string;
  companyName: string;
  industry: string;
  foundedYear: string;
  companySize: string;
  companyType: string;
  description: string;
  websiteURL?: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  companyLogo: any | null;
}

const initialValues: FormType = {
  jobTitle: "",
  phone: "",
  companyName: "",
  industry: "",
  foundedYear: "",
  companySize: "",
  companyType: "",
  description: "",
  websiteURL: "",
  streetAddress: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
  companyLogo: null,
};

const OnBoardingForm: React.FC = () => {
  const [isHydrated, setIsHydrated] = React.useState(false);
  const { state } = useContext(UserContext);
  const router = useRouter();

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  const validationSchema: Yup.ObjectSchema<FormType> = Yup.object().shape({
    jobTitle: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    companyName: Yup.string().required("Required"),
    industry: Yup.string().required("Required"),
    foundedYear: Yup.string().required("Required"),
    companySize: Yup.string().required("Required"),
    companyType: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    websiteURL: Yup.string().url("Invalid URL"),
    streetAddress: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    postalCode: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    companyLogo: Yup.mixed()
      .required("A file is required")
      .test(
        "fileFormat",
        "Unsupported Format",
        (value) =>
          value &&
          ["image/jpg", "image/jpeg", "image/png"].includes(
            (value as File).type
          )
      ),
  });

  const renderBasicDetails = (
    errors: FormikErrors<FormType>,
    touched: FormikTouched<FormType>
  ) => (
    <Grid container spacing={2}>
      <Grid xs={12} md={6}>
        <Field
          as={TextField}
          fullWidth
          name="companyName"
          error={touched.companyName && !!errors.companyName}
          helperText={<ErrorMessage name="companyName" />}
          label="Company Name"
        />
      </Grid>
      <Grid xs={12} md={6}>
        <Field
          as={TextField}
          fullWidth
          name="industry"
          error={touched.industry && !!errors.industry}
          helperText={<ErrorMessage name="industry" />}
          label="Industry"
        />
      </Grid>
      <Grid xs={12} md={6}>
        <Field
          as={TextField}
          fullWidth
          name="foundedYear"
          error={touched.foundedYear && !!errors.foundedYear}
          helperText={<ErrorMessage name="foundedYear" />}
          label="Founded Year"
        />
      </Grid>
      <Grid xs={12} md={6}>
        <Field
          as={TextField}
          fullWidth
          name="companySize"
          error={touched.companySize && !!errors.companySize}
          helperText={<ErrorMessage name="companySize" />}
          label="Company Size"
        />
      </Grid>
      <Grid xs={12} md={6}>
        <Field
          as={TextField}
          fullWidth
          name="companyType"
          error={touched.companyType && !!errors.companyType}
          helperText={<ErrorMessage name="companyType" />}
          label="Company Type"
        />
      </Grid>
      <Grid xs={12} md={6}>
        <Field
          as={TextField}
          fullWidth
          name="websiteURL"
          error={touched.websiteURL && !!errors.websiteURL}
          helperText={<ErrorMessage name="websiteURL" />}
          label="Website URL"
        />
      </Grid>
      <Grid xs={12}>
        <Field
          as={TextField}
          fullWidth
          multiline
          rows={4}
          name="description"
          error={touched.description && !!errors.description}
          helperText={<ErrorMessage name="description" />}
          label="Description"
        />
      </Grid>
    </Grid>
  );

  const renderPersonalDetails = (
    errors: FormikErrors<FormType>,
    touched: FormikTouched<FormType>
  ) => (
    <Grid container spacing={2}>
      <Grid xs={12} md={6}>
        <Field
          as={TextField}
          fullWidth
          name="jobTitle"
          error={touched.jobTitle && !!errors.jobTitle}
          helperText={<ErrorMessage name="jobTitle" />}
          label="Job Title"
        />
      </Grid>
      <Grid xs={12} md={6}>
        <Field
          as={TextField}
          fullWidth
          name="phone"
          error={touched.phone && !!errors.phone}
          helperText={<ErrorMessage name="phone" />}
          label="Phone"
        />
      </Grid>
    </Grid>
  );

  const renderAddressDetails = (
    errors: FormikErrors<FormType>,
    touched: FormikTouched<FormType>
  ) => (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Field
          as={TextField}
          fullWidth
          name="streetAddress"
          error={touched.streetAddress && !!errors.streetAddress}
          helperText={<ErrorMessage name="streetAddress" />}
          label="Street Address"
        />
      </Grid>
      <Grid xs={12} md={6}>
        <Field
          as={TextField}
          fullWidth
          name="city"
          error={touched.city && !!errors.city}
          helperText={<ErrorMessage name="city" />}
          label="City"
        />
      </Grid>
      <Grid xs={12} md={6}>
        <Field
          as={TextField}
          fullWidth
          name="state"
          error={touched.state && !!errors.state}
          helperText={<ErrorMessage name="state" />}
          label="State"
        />
      </Grid>
      <Grid xs={12} md={6}>
        <Field
          as={TextField}
          fullWidth
          name="postalCode"
          error={touched.postalCode && !!errors.postalCode}
          helperText={<ErrorMessage name="postalCode" />}
          label="Postal Code"
        />
      </Grid>
      <Grid xs={12} md={6}>
        <Field
          as={TextField}
          fullWidth
          name="country"
          error={touched.country && !!errors.country}
          helperText={<ErrorMessage name="country" />}
          label="Country"
        />
      </Grid>
    </Grid>
  );

  const renderLogoComponent = () => (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Field name="companyLogo" component={FileUploadField} />
        <ErrorMessage
          style={{ color: "red" }}
          name="companyLogo"
          component="div"
        />
      </Grid>
    </Grid>
  );

  const FileUploadField = ({ field, form, ...props }: any) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.currentTarget.files?.[0];
      form.setFieldValue(field.name, file);
    };

    return (
      <input type="file" accept="image/*" onChange={handleChange} {...props} />
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values: FormType) => {
        console.log("values=>", values);
        const formData = new FormData();
        formData.append("jobTitle", values.jobTitle);
        formData.append("phone", values.phone);
        formData.append("companyName", values.companyName);
        formData.append("industry", values.industry);
        formData.append("foundedYear", values.foundedYear);
        formData.append("companySize", values.companySize);
        formData.append("companyType", values.companyType);
        formData.append("description", values.description);
        values.websiteURL && formData.append("websiteURL", values.websiteURL);
        formData.append("streetAddress", values.streetAddress);
        formData.append("city", values.city);
        formData.append("state", values.state);
        formData.append("postalCode", values.postalCode);
        formData.append("country", values.country);
        formData.append("companyLogo", values.companyLogo);
        formData.append("userId", state.id);

        axiosInstance
          .post("api/employer", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            router.push("/dashboard");
          })
          .catch((err) => {
            console.log("err=>", err);
          });
      }}
      onErrors={(errors: FormikErrors<FormType>) => {
        console.log(errors);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Grid
            container
            justifyContent="center"
            sx={{ flex: "1 1 auto" }}
            spacing={1}
          >
            {!isHydrated ? (
              <CircularProgress />
            ) : (
              <>
                <Grid xs={11} md={8}>
                  <Card>
                    <CardHeader title="Employer Details" />
                    <CardContent>
                      {renderPersonalDetails(errors, touched)}
                    </CardContent>
                  </Card>
                </Grid>
                <Grid xs={11} md={8}>
                  <Card>
                    <CardHeader title="Company Details" />
                    <CardContent>
                      {renderBasicDetails(errors, touched)}
                    </CardContent>
                  </Card>
                </Grid>
                <Grid xs={11} md={8}>
                  <Card>
                    <CardHeader title="Company Address" />
                    <CardContent>
                      {renderAddressDetails(errors, touched)}
                    </CardContent>
                  </Card>
                </Grid>

                <Grid xs={11} md={8}>
                  <Card>
                    <CardHeader title="Upload Logo" />
                    <CardContent>{renderLogoComponent()}</CardContent>
                  </Card>
                </Grid>
                <Grid xs={11} md={8}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    // disabled={isSubmitting}
                    sx={{ mt: 2, py: 1, minWidth: 150 }}
                  >
                    Submit
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default OnBoardingForm;
