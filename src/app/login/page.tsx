"use client";
import React from "react";
import Image from "next/image";
import { ToggleTheme } from "@/components/Theme/ToggleTheme";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LoginForm from "@/components/LoginForm/LoginForm";

export function LoginPage() {
  return (
    <>
      <Card className="absolute inset-0 w-[1100px] h-[750px] m-auto flex">
        <div className="flex-1 flex justify-center items-center border-r">
          <figure>
            <Image
              src="/images/LoginImage.jpg"
              width={550}
              height={750}
              alt="Picture of Flower"
              className="dark:invert"
            />
          </figure>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <nav className="flex w-full items-center justify-between p-[10px]">
            <div className="">
              <figure>
                <Image
                  src="logo/IdahoLogo.svg"
                  alt="Idaho Logo"
                  width={100}
                  height={100}
                  className="dark:invert"
                />
              </figure>
            </div>
            <div className="flex justify-center items-center">
              <ToggleTheme />
            </div>
          </nav>
          <div className="w-[300px] mt-[100px] ">
            <LoginForm />
          </div>
        </div>
      </Card>
      <ToggleTheme />
    </>
  );
}

export default LoginPage;
