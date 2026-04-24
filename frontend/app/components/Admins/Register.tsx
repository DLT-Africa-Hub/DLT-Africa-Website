"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { apiClient, getApiErrorMessage } from "@/lib/apiClient";
import { useRouter } from "next/navigation";
import AdminAuthShell from "./AdminAuthShell";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  phone: string;
}

const Register: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      router.push("/admin-dashboard");
    }
  }, [router]);

  const [formValidMessage, setFormValidMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValidMessage("");
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { name, email, password, phone } = formData;

    if (!name || !email || !password || !phone) {
      setFormValidMessage("Oops! All fields are required.");
      return;
    }

    setIsSubmitting(true);

    apiClient
      .post("/team/register-team", formData)
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

  return (
    <AdminAuthShell
      title="Admin Registration"
      subtitle="Create an admin account to manage admissions, teams and events."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-[#083700]">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full rounded-xl border border-[#E4E8EC] px-4 py-3 text-sm outline-none transition focus:border-[#1C7800] focus:ring-2 focus:ring-[#1C7800]/20"
          />
        </div>
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
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-semibold text-[#083700]"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#E4E8EC] px-4 py-3 text-sm outline-none transition focus:border-[#1C7800] focus:ring-2 focus:ring-[#1C7800]/20"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-[#083700]">
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="08123456789"
              className="w-full rounded-xl border border-[#E4E8EC] px-4 py-3 text-sm outline-none transition focus:border-[#1C7800] focus:ring-2 focus:ring-[#1C7800]/20"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-[#1C7800] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#166100] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Create Admin Account"}
        </button>
        {formValidMessage && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {formValidMessage}
          </div>
        )}
        <p className="text-sm text-[#5C6670]">
          Already have an account?{" "}
          <Link href="/admin-login" className="font-medium text-[#1C7800] underline">
            Login
          </Link>
        </p>
      </form>
    </AdminAuthShell>
  );
};

export default Register;
