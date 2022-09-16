import "./styles.css";
import Layout from "./layout";
import ThemeContext, { themes } from "./themes";
import { useState } from "react";

export default function App() {
  const [theme, setThemes] = useState(themes.dark);
  function ToggleTheme() {
    theme === themes.dark ? setThemes(themes.light) : setThemes(themes.dark);
  }
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Layout />
        <button onClick={ToggleTheme}>Change</button>
      </ThemeContext.Provider>
    </div>
  );
}
