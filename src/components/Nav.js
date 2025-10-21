import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-4 shadow bg-white">
      <h1 className="text-2xl font-extrabold text-rose-600">RestroPulse</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-rose-600">Home</Link>
        <Link to="/login" className="hover:text-rose-600">Login</Link>
        <Link to="/register" className="hover:text-rose-600">Register</Link>
      </div>
    </nav>
  );
}
