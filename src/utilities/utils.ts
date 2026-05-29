import { createTheme } from "@mui/material";

export { v4 as uuidv4 } from "uuid";

export const passwordRequirement = { minLength: 10, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0 };

export const validTypes: string[] = ["image/png", "image/jpeg"];

export const datePickerTheme = createTheme({
  palette: {
    primary: {
      main: "#2b638b",
    },
  },
});
