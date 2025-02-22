"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import LifeCountdown from "./components/LifeCountdown";
import AliveTimeTracker from "./components/AliveTimeTracker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import timeBg from "./assets/time.jpg";

export default function Home() {
  const [birthYear, setBirthYear] = useState<number>(2005);
  const [gender, setGender] = useState<string>("male");
  const [country, setCountry] = useState<string>("UK");
  const [aliveTimeToday, setAliveTimeToday] = useState<number>(0);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you could update calculations or save settings
  };

  return (
    // <div className="min-h-screen p-8 bg-gray-900 text-gray-100">
    <div className="min-h-screen p-8 text-gray-100">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 z-[-1]" />

      {/* background image */}
      <Image
        alt="u sus"
        // src="https://images.unsplash.com/photo-1562155955-1cb2d73488d7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src={timeBg}
        src="https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // when importing an external image in Next, we need to specify the height and width
        // width={1920}
        // height={1080}

        // since im using layout: "fill" tho, i dont need to.
        fill // fils to the parent container
        className="object-cover z-[-2]" // maintains aspect ratio for bg images
      ></Image>

      <motion.h1
        className={"text-3xl font-bold font-sans text-center font-heading"}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Death Clock */}
        The Dead Man's Clock
      </motion.h1>
      <h2 className="text-sm text-center mb-8 font-body">By Mark Norman</h2>
      <motion.div
        className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="birthYear">Birth Year</Label>
                <Input
                  id="birthYear"
                  type="number"
                  value={birthYear}
                  onChange={(e) =>
                    setBirthYear(Number.parseInt(e.target.value))
                  }
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* TODO: add country selection, make functional */}
              {/* <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full"
                />
              </div> */}
              <div className="w-full flex justify-center">
                {/* TODO: add update button to save to like a database or smth */}
                {/* <Button type="submit" className="w-[20%] rounded-xl">
                  Update
                </Button> */}
              </div>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-8">
          <LifeCountdown
            birthYear={birthYear}
            gender={gender}
            country={country}
          />
          <AliveTimeTracker
            aliveTimeToday={aliveTimeToday}
            setAliveTimeToday={setAliveTimeToday}
          />
        </div>
      </motion.div>
    </div>
  );
}
