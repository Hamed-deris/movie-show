import { useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (localStorage.theme) {
      setTheme(localStorage.theme);
    } else {
      localStorage.setItem("theme", theme);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      root.classList.add(theme);
      localStorage.theme = theme;
    } else {
      root.classList.remove("light");
      root.classList.add(theme);
      localStorage.theme = theme;
    }
  }, [theme]);

  return [theme, setTheme];
}

export default useDarkMode;
