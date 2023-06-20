import { SxProps, Theme } from "@mui/material";
import { MenuType } from "./types";


export const NavOptions: MenuType[] = [
  {
    label: "Login",
    route: "/login",
    className:"nav-link-login"
  },
  {
    label: "Sign Up",
    route: "/signup",
    className:"nav-link-sign-up"
  },
  {
    label: "Contact Us",
    route: "/contact-us",
  },
  {
    label: "FAQs",
    route: "/faq",
  },
  {
    label: "Companies",
    route: "/companies",
  },
  {
    label: "Jobs",
    route: "/jobs",
  },
];
