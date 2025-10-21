import React from "react";

export default function Login() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow">
        <h3 className="text-xl font-semibold">Login</h3>
        <form className="mt-4 space-y-4">
          <input className="w-full p-3 border rounded" placeholder="Email" />
          <input className="w-full p-3 border rounded" placeholder="Password" type="password" />
          <button className="w-full p-3 rounded bg-rose-600 text-white">Sign in</button>
        </form>
      </div>
    </div>
  );
}
