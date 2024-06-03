import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function ThemeButton() {
  const [theme, setTheme] = useState(
    localStorage.getItem("data-theme") || "light"
  );
  const toggleTheme = () => {
    setTheme(
      document.querySelector("html")?.getAttribute("data-theme") == "light"
        ? "dark"
        : "light"
    );
  };

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
    localStorage.setItem("data-theme", theme);
  }, [theme]);

  return (
    <>
      <div className="m-2 flex items-center justify-center">
        <button
          className="btn rounded-full outline outline-1"
          onClick={toggleTheme}
        >
          {theme == "light" ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </button>
      </div>
    </>
  );
}
