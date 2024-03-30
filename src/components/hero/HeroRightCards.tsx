import React from "react";

export default function HeroRightCards() {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-4">
      <div className="flex flex-col gap-y-2 rounded-md border border-slate-700 p-4 hover:border-slate-200 hover:shadow-md">
        <h2 className="text-2xl font-bold">Card 1</h2>
        <p className="text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quasi
          neque quia dolorum doloremque aliquid, minima velit iste quidem fuga
          magni.
        </p>
      </div>
      <div className="flex flex-col gap-y-2 rounded-md border border-slate-700 p-4 hover:border-slate-200 hover:shadow-md">
        <h2 className="text-2xl font-bold">Card 2</h2>
        <p className="text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quasi
          neque quia dolorum doloremque aliquid, minima velit iste quidem fuga
          magni.
        </p>
      </div>
    </div>
  );
}
