import React from "react";
function SkillSetBox({
  skill,
  color = "text-foreground-secondary",
}: {
  skill: string;
  color: "text-foreground-secondary" | "text-primary";
}) {
  return (
    <div
      className={`p-2 border-[1px] bg-box text-sm  rounded-sm ${
        color === "text-foreground-secondary"
          ? "text-foreground-secondary border-box-border"
          : "text-primary border-primary bg-background-secondary"
      }`}
    >
      {skill}
    </div>
  );
}

export default SkillSetBox;
