"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <motion.h1
        className="text-5xl font-extrabold text-center mb-6 text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Pinnacle
      </motion.h1>
      <motion.p
        className="text-lg text-center max-w-2xl mb-8 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        AI-powered personal growth platform. Achieve your goals with smart scheduling, actionable insights, and a supportive social network for accountability.
      </motion.p>

      {/* Waitlist Form */}
      <div className="w-full max-w-md p-6 bg-gray-800 shadow-lg rounded-lg border border-gray-700">
        <p className="text-center text-xl font-semibold text-white mb-4">Join the Waitlist</p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full py-3 mt-4 bg-blue-500 hover:bg-blue-600 text-lg font-medium rounded-md transition-all">
          Sign Up
        </button>
      </div>
    </div>
  );
}