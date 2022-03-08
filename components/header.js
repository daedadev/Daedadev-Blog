import React from "react";
import { useGlobal } from "../context/globalContext";

export default function Header() {
  const { darkMode, toggleDarkMode } = useGlobal();

  return (
    <div className="flex w-full items-center justify-center bg-slate-400 h-24">
      <div className="flex flex-row items-center justify-between w-1280">
        <h1>Blog</h1>
      </div>
      <button onClick={toggleDarkMode}>DarkMode</button>
    </div>
  );
}
