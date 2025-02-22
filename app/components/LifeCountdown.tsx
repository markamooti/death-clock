"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface LifeCountdownProps {
  birthYear: number;
  gender: string;
  country: string;
}

const LifeCountdown: React.FC<LifeCountdownProps> = ({
  birthYear,
  gender,
  country,
}) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  // TODO: Dummy baseline life expectancy (could be adjusted by country)
  let lifeExpectancy = 80;
  if (gender === "female") lifeExpectancy = 85;

  const remainingYears = lifeExpectancy - age;
  const totalWeeks = lifeExpectancy * 52;
  const weeksLived = age * 52;
  const weeksRemaining = totalWeeks - weeksLived;
  const percentLived = (weeksLived / totalWeeks) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading">Life Countdown</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-2xl font-bold">
            {weeksRemaining.toLocaleString()} weeks left
          </p>
          <p className="text-sm text-gray-400">
            Based on average life expectancy
          </p>
        </motion.div>
        <div className="space-y-2">
          <Progress value={percentLived} className="h-2" />
          <p className="text-sm text-gray-400 text-right">
            {percentLived.toFixed(1)}% lived
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LifeCountdown;
