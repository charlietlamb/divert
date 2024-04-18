import React from "react";

export default function PrivacyPolicy() {
  return (
    <div
      className="flex flex-col gap-4 rounded-lg bg-slate-900 p-6 text-slate-200"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className=" text-slate-300">
          We respect your privacy and are committed to protecting it. This
          privacy policy explains our policies and practices regarding customer
          information.
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className=" text-xl font-semibold">Information We Collect</h2>
        <p className=" text-slate-300">
          We collect various types of information in connection with the
          services, including: - Information you provide directly to us. -
          Information we collect about your use of our services. - Information
          we obtain from third-party sources.
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className=" text-xl font-semibold">How We Use Your Information</h2>
        <p className=" text-slate-300">
          We may use the information we collect for a variety of purposes,
          including to: - Provide, operate, improve, and maintain our services.
          - Understand and analyze how you use our services and develop new
          products, services, features, and functionality. - Communicate with
          you to provide updates and other information relating to the service.
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className=" text-xl font-semibold">
          How We Share Your Information
        </h2>
        <p className="text-slate-300">
          Except as described in this policy, we will not disclose your
          information that we collect on the service to third parties without
          your consent.
        </p>
      </div>
    </div>
  );
}
