import React from "react";

export default function RefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6 text-slate-700 leading-relaxed">
      <h1 className="text-3xl font-bold text-rose-600 mb-6">Cancellation & Refund Policy</h1>
      <p className="text-sm text-slate-500 mb-6">
        Last updated on <strong>October 21, 2025</strong>
      </p>

      <p>
        At <strong>BAXEL TECHNOLOGIES PRIVATE LIMITED</strong>, we value your satisfaction. 
        If you are not satisfied with our service, you may request a cancellation or refund in 
        accordance with the policy outlined below.
      </p>

      <p className="mt-4">
        Refund requests must be made within <strong>7 days</strong> of purchase. 
        Refunds will be processed to your original payment method within 5–10 business days.
      </p>

      <p className="mt-4">
        For more information, you can view our Razorpay-verified refund policy at:
      </p>
      <a
        href="https://merchant.razorpay.com/policy/RW3VK6mFZ587hL/refund"
        target="_blank"
        rel="noopener noreferrer"
        className="text-rose-600 underline mt-2 inline-block"
      >
        View Refund Policy on Razorpay
      </a>

      <p className="mt-8">
        For refund-related queries, please contact us at{" "}
        <a href="mailto:support@restropulse.com" className="text-rose-600">
          support@restropulse.com
        </a>
      </p>
    </div>
  );
}
