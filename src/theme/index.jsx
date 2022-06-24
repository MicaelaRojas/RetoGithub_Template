import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f50057",
      contrastText: "#fff",
    },
    secondary: {
      main: "#00bcd4",
      contrastText: "#fff",
    }
  },
  typography:{
    fontFamily:"Swanky and Moo Moo, The Girl Next Door",
    fontSize:14,
    fontWeightLight:300,
    fontWeightRegular:400,
    fontWeightMedium:500,
  },
  
});

export default theme;