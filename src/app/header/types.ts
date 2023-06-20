import { SxProps, Theme } from "@mui/material";

export type MenuType = {
    label: string;
    style: SxProps<Theme>;
    route: string;
  };