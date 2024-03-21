"use client";
import { useTheme } from "next-themes";
import DarkMode from "./DarkMode";

export default function Logo() {
  const { theme } = useTheme();
  return (
    <>
      <div className="flex flex-row m-10 items-center">
        <img
          src={theme === "dark" ? "/localshare-white.png" : "/localshare.png"}
          alt="Profile"
        />
        <DarkMode />
      </div>
    </>
  );
}
