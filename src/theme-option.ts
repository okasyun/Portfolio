import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
export const theme = createTheme({
  typography: {
    h5: {
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: red[100],
    },
  },
});
