"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { set } from "date-fns";

interface AliveTimeTrackerProps {
  aliveTimeToday: number;
  setAliveTimeToday: (value: number) => void;
}

const AliveTimeTracker: React.FC<AliveTimeTrackerProps> = ({
  aliveTimeToday,
  setAliveTimeToday,
}) => {
  const totalHours = 24;
  const percentAlive = (aliveTimeToday / totalHours) * 100;

  let responseColor = "";
  if (percentAlive < 12.5) {
    responseColor = "text-red-400";
  } else if (percentAlive < 25) {
    responseColor = "text-yellow-400";
  } else {
    responseColor = "text-green-400";
  }
  console.log(responseColor);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading">Today's Alive Time</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-2xl font-bold">
            {aliveTimeToday.toFixed(1)} hours
          </p>
          <p className="text-sm text-gray-400">
            Time lived intentionally today
          </p>
        </motion.div>
        <Slider
          value={[aliveTimeToday]}
          onValueChange={(value) => setAliveTimeToday(value[0])}
          max={24}
          step={0.5}
          className="w-full"
        />
        <div className="space-y-2">
          {/* <Progress value={percentAlive} className="h-2" /> */}
          {/* <p className="text-sm text-red-400 text-right"> */}
          <p className={`text-sm ${responseColor} text-right`}>
            {percentAlive.toFixed(1)}% of the day
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AliveTimeTracker;
