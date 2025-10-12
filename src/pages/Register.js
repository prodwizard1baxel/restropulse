import React from "react";

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <h2 className="text-3xl font-semibold text-rose-600 mb-4">Register</h2>
      <form className="bg-white shadow-md rounded-lg p-6 w-80">
        <input className="w-full mb-3 p-2 border rounded" placeholder="Restaurant Name" />
        <input className="w-full mb-3 p-2 border rounded" placeholder="Email" />
        <input className="w-full mb-3 p-2 border rounded" type="password" placeholder="Password" />
        <button className="w-full bg-rose-600 text-white p-2 rounded">Create Account</button>
      </form>
    </div>
  );
}
