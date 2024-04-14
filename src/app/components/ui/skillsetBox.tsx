import React from "react";
function SkillSetBox({ skill }: { skill: string }) {
  return (
    <div className="p-2 border-[1px] bg-box border-box-border text-sm text-foreground-secondary rounded-sm">
      {skill}
    </div>
  );
}

export default SkillSetBox;
