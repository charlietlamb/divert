import React from "react";
import TeamTest from "./TeamTest";
import TeamInfo from "./TeamInfo";

export default function TeamContent() {
  return (
    <div className="flex w-full flex-col gap-4 lg:flex-row">
      <TeamInfo />
      <TeamTest />
    </div>
  );
}
