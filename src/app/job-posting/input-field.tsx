import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

type InputFieldProps = {
  id: string;
  label: string;
  setValue: (value: string) => void;
};

const InputField: React.FC<InputFieldProps> = ({ id, label, setValue }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box width={isTablet ? 250 : 350} mx={2}>
      <Box display="flex" flexDirection="row" marginTop={2}>
        <Typography>{label}</Typography>
        <Typography color="red">*</Typography>
      </Box>
      <TextField
        className="text-field"
        id={id}
        required={true}
        fullWidth
        onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  );
};

export default InputField;
