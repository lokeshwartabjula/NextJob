import { SxProps, Theme } from "@mui/material";
import { MenuType } from "./types";

const NavButtonDefauktStyle: SxProps<Theme> = {
  my: 2,
  color: "#003060",
  display: "block",
  padding: "8px 10px",
  margin: "20px 4px",
  fontWeight: "bold",
  fontSize: "1rem",
  "&:hover": {
    backgroundColor: "#003060",
    color: "white",
  },
};

export const NavOptions: MenuType[] = [
  {
    label: "Login",
    style: {
      ...NavButtonDefauktStyle,
      border: "1px solid #003060",
      padding: "8px 20px",
      margin: "20px 6px",
    },
    route: "/login",
  },
  {
    label: "Sign Up",
    style: {
      ...NavButtonDefauktStyle,
      backgroundColor: "#003060",
      color: "white",
      padding: "8px 20px",
      margin: "20px 6px",
      border: "1px solid #003060",
      "&:hover": {
        backgroundColor: "white",
        color: "#003060",
      },
    },
    route: "/signup",
  },
  {
    label: "Contact Us",
    style: NavButtonDefauktStyle,
    route: "/contact-us",
  },
  {
    label: "FAQs",
    style: NavButtonDefauktStyle,
    route: "/faq",
  },
  {
    label: "Companies",
    style: NavButtonDefauktStyle,
    route: "/companies",
  },
  {
    label: "Jobs",
    style: NavButtonDefauktStyle,
    route: "/jobs",
  },
];
