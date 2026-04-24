"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { apiClient, getApiErrorMessage } from "@/lib/apiClient";
import { useRouter } from "next/navigation";
import AdminAuthShell from "./AdminAuthShell";

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [formValidMessage, setFormValidMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      router.push("/admin-dashboard");
    }
  }, [router]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setFormValidMessage("Please enter both email and password.");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormValidMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    apiClient
      .post("/team/login", formData)
      .then(() => {
        setIsSubmitting(false);
        localStorage.setItem("isLoggedIn", "true");
        router.push("/admin-dashboard");
      })
      .catch((error: unknown) => {
        setIsSubmitting(false);
        setFormValidMessage(getApiErrorMessage(error));
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValidMessage("");
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <AdminAuthShell
      title="Admin Login"
      subtitle="Sign in to access admissions, team and event controls."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-[#083700]">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="yourname@gmail.com"
            className="w-full rounded-xl border border-[#E4E8EC] px-4 py-3 text-sm outline-none transition focus:border-[#1C7800] focus:ring-2 focus:ring-[#1C7800]/20"
          />
        </div>
        <div>
          <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-[#083700]">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="******"
            className="w-full rounded-xl border border-[#E4E8EC] px-4 py-3 text-sm outline-none transition focus:border-[#1C7800] focus:ring-2 focus:ring-[#1C7800]/20"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-[#1C7800] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#166100] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Loading..." : "Sign In"}
        </button>
        {formValidMessage && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {formValidMessage}
          </div>
        )}
        <p className="text-sm text-[#5C6670]">
          Don&apos;t have an account?{" "}
          <Link href="/admin" className="font-medium text-[#1C7800] underline">
            Register
          </Link>
        </p>
      </form>
    </AdminAuthShell>
  );
};

export default Login;
