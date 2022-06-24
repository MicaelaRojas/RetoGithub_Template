import Router from"./router";
import{ThemeProvider}from"@mui/material/styles";
import theme from"./theme";

function App(){
  return (
    <ThemeProvider theme={theme} className="App">
      <Router/>
    </ThemeProvider>
  );
}

export default App
