import React from "react";
import DarkMode from "./DarkMode";

export default function User() {
  return (
    <>
      <div className="flex flex-col justify-end items-center relative bottom-0">
        <div className="flex flex-col relative mb-10 justify-center items-center">
          <img
            className="w-24 h-24 rounded-full shadow-lg"
            src="https://www.sharedrop.io/assets/images/avatars/64.svg"
            alt="Profile"
          />
          <div className="inset-0 flex items-end justify-center bg-theme bg-opacity-75 rounded-full p-2 m-2">
            <p className="text-white font-bold">You (Convivial Monkey)</p>
          </div>
          <DarkMode />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center  dark:bg-black">
          <p className="text-lg font-bold mb-4">Welcome to LocalShare!</p>
          <p className="text-gray-700 dark:text-white">
            LocalShare lets you share files with others. Other people will see
            you as <b className="text-blue-500">Convivial Monkey</b>.
          </p>
        </div>
      </div>
    </>
  );
}
