"use client";

import React from "react";
import { motion } from "framer-motion";

function SkillSetBox({
  skill,
  color = "text-foreground-secondary",
}: {
  skill: string;
  color: "text-foreground-secondary" | "text-primary";
}) {
  return (
    <motion.div
      initial={{ opacity: 0.9, scale: 0.98 }}
      whileHover={{ 
        opacity: 1, 
        scale: 1.05,
        boxShadow: color === "text-primary" 
          ? "0 0 15px var(--skill-glow-primary)" 
          : "0 0 12px var(--skill-glow-secondary)"
      }}
      transition={{ 
        duration: 0.2,
        ease: "easeInOut"
      }}
      className={`p-2 border-[1px] text-sm rounded-sm cursor-default transition-all ${
        color === "text-foreground-secondary"
          ? "text-foreground-secondary border-box-border bg-box hover:border-box-accent hover:bg-background"
          : "text-primary border-primary hover:border-primary-secondary bg-box bg-opacity-10 hover:bg-opacity-25 dark:hover:bg-opacity-40"
      }`}
    >
      <span className="font-bold text-border">{skill}</span>
    </motion.div>
  );
}

export default SkillSetBox;
