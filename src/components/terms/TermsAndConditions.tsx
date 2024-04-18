import React from "react";

export default function TermsAndConditions() {
  return (
    <div
      className="flex flex-col gap-4 rounded-lg bg-slate-900 p-6 text-slate-200"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">Terms and Conditions</h1>
        <p className=" text-slate-300">
          Please read these terms and conditions carefully before using our
          service.
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className=" text-xl font-semibold">Acceptance of Terms</h2>
        <p className=" text-slate-300">
          By accessing and using our services, you accept and agree to be bound
          by the terms and provision of this agreement.
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className=" text-xl font-semibold">Changes to Terms</h2>
        <p className=" text-slate-300">
          We reserve the right to modify these terms from time to time at our
          sole discretion. Therefore, you should review this page periodically.
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className=" text-xl font-semibold">User Responsibilities</h2>
        <p className="text-slate-300">
          As a user, you agree not to misuse the service or help anyone else to
          do so.
        </p>
      </div>
    </div>
  );
}
