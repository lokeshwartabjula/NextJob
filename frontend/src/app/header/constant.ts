import { SxProps, Theme } from "@mui/material";
import { MenuType } from "./types";


export const NavOptions: MenuType[] = [
  {
    label: "Login",
    className:"nav-link-login",
    route: "/auth/login",
  },
  {
    label: "Sign Up",
    className:"nav-link-sign-up",
    route: "/auth/register",
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
    route: "/CompaniesList"
  },
  // {
  //   label: "CompaniesList",
  //   route: "/CompaniesList"
  // },
  {
    label: "Jobs",
  },
];
