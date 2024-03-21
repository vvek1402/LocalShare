import React from "react";
import DarkMode from "./DarkMode";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Logo from "./Logo";
import Footer from "./Footer";
import { Badge } from "@/components/ui/badge";

export default function User() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
        <Logo />

        <div className="w-full max-w-3xl p-4">
          <Card>
            <CardHeader>
              <CardTitle>Available Devices</CardTitle>
              <CardDescription>Click on anyone to share files</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center items-center gap-4">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col relative justify-center items-center"
                  >
                    <img
                      className="w-20 h-20 rounded-full shadow-lg"
                      src="https://www.sharedrop.io/assets/images/avatars/64.svg"
                      alt="Profile"
                    />
                    <div className="inset-0 flex items-end justify-centerrounded-full p-1 m-1">
                      <Badge>You (Convivial Monkey)</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Send All</Button>
            </CardFooter>
          </Card>

          <Card className="mt-4">
            <CardContent className="pt-5">
              <div className="text-center">
                <div className="flex flex-col relative justify-center items-center">
                  <img
                    className="w-20 h-20 rounded-full shadow-lg"
                    src="https://www.sharedrop.io/assets/images/avatars/64.svg"
                    alt="Profile"
                  />
                               <div className="inset-0 flex items-end justify-centerrounded-full p-1 m-1">
                      <Badge>You (Convivial Monkey)</Badge>
                    </div>
                </div>
                <p className="text-md font-bold mt-4">Welcome to LocalShare!</p>
                <p className="text-gray-700 text-sm">
                  LocalShare lets you share files with others. Other people will
                  see you as <b className="text-blue-500">Convivial Monkey</b>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    </>
  );
}
