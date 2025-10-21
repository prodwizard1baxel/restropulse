import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6 text-slate-700 leading-relaxed">
      <h1 className="text-3xl font-bold text-rose-600 mb-6">Privacy Policy</h1>
      <p>
        BAXEL TECHNOLOGIES PRIVATE LIMITED respects your privacy and is committed
        to protecting your personal information. We only collect data necessary
        for order processing, customer support, and legal compliance.
      </p>

      <p className="mt-4">
        We do not sell or share your personal data with third parties. All payment
        data is securely handled by <strong>Razorpay Software Limited</strong>, our
        trusted payment gateway partner.
      </p>

      <p className="mt-4">
        For any privacy-related concerns, please contact us at{" "}
        <a href="mailto:privacy@restropulse.com" className="text-rose-600">
          privacy@restropulse.com
        </a>
        .
      </p>
    </div>
  );
}
