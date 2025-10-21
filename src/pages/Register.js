import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-rose-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-rose-600 mb-6">Create Your Account</h2>
        <form className="space-y-5">
          <input type="text" placeholder="Full Name" className="w-full border px-4 py-2 rounded-md" />
          <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded-md" />
          <input type="password" placeholder="Password" className="w-full border px-4 py-2 rounded-md" />
          <button type="submit" className="w-full bg-rose-600 text-white py-2 rounded-md hover:bg-rose-700">Register</button>
        </form>
        <p className="text-center text-sm text-slate-600 mt-4">
          Already have an account? <Link to="/login" className="text-rose-600">Login</Link>
        </p>
      </div>
    </div>
  );
}
