"use client";

import type { ChangeEvent } from "react";
import {
  CODING_EXPERIENCE,
  FormData,
  GENDER_OPTIONS,
  NIGERIAN_STATES,
  ONLINE_COURSES,
  PHYSICAL_COURSES,
} from "./constants";

const selectClass =
  "w-full rounded-xl border border-[#E4E8EC] bg-white px-4 py-3 font-poppins text-sm text-[#1C1C1C] outline-none transition focus:border-[#1C7800] focus:ring-1 focus:ring-[#1C7800]/20";

const labelClass = "mb-1.5 block font-sfPro text-sm font-semibold text-[#083700]";

const inputClass =
  "w-full rounded-xl border border-[#E4E8EC] bg-white px-4 py-3 font-poppins text-sm text-[#1C1C1C] outline-none transition focus:border-[#1C7800] focus:ring-1 focus:ring-[#1C7800]/20";

type Props = {
  formData: FormData;
  onInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  setClassType: (value: "Physical" | "Virtual") => void;
};

export default function EnrollmentFormFields({
  formData,
  onInputChange,
  setClassType,
}: Props) {
  const courseOptions =
    formData.classType === "Virtual"
      ? ONLINE_COURSES
      : formData.classType === "Physical"
        ? PHYSICAL_COURSES
        : [];

  return (
    <div className="space-y-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="stateOfOrigin" className={labelClass}>
            State of origin
          </label>
          <select
            id="stateOfOrigin"
            name="stateOfOrigin"
            value={formData.stateOfOrigin}
            onChange={onInputChange}
            className={selectClass}
            required
          >
            <option value="">Select state</option>
            {NIGERIAN_STATES.map(({ id, tag }) => (
              <option key={id} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="stateOfResidence" className={labelClass}>
            State of residence
          </label>
          <select
            id="stateOfResidence"
            name="stateOfResidence"
            value={formData.stateOfResidence}
            onChange={onInputChange}
            className={selectClass}
            required
          >
            <option value="">Select state</option>
            {NIGERIAN_STATES.map(({ id, tag }) => (
              <option key={id} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="gender" className={labelClass}>
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={onInputChange}
          className={selectClass}
          required
        >
          <option value="">Select an option</option>
          {GENDER_OPTIONS.map(({ id, tag }) => (
            <option key={id} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className={labelClass}>Preferred mode of learning</p>
        <div className="mt-2 grid grid-cols-2 gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setClassType("Physical")}
            className={`rounded-2xl border-2 px-4 py-3 text-center font-sfPro text-sm font-semibold transition sm:py-4 sm:text-base ${
              formData.classType === "Physical"
                ? "border-[#1C7800] bg-[#1C7800]/[0.06] text-[#083700] shadow-sm"
                : "border-[#E4E8EC] text-[#5C6670] hover:border-[#1C7800]/35"
            }`}
          >
            Physical
          </button>
          <button
            type="button"
            onClick={() => setClassType("Virtual")}
            className={`rounded-2xl border-2 px-4 py-3 text-center font-sfPro text-sm font-semibold transition sm:py-4 sm:text-base ${
              formData.classType === "Virtual"
                ? "border-[#1C7800] bg-[#1C7800]/[0.06] text-[#083700] shadow-sm"
                : "border-[#E4E8EC] text-[#5C6670] hover:border-[#1C7800]/35"
            }`}
          >
            Virtual
          </button>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="courseSelected" className={labelClass}>
            Course of interest
          </label>
          <select
            id="courseSelected"
            name="courseSelected"
            value={formData.courseSelected}
            onChange={onInputChange}
            className={selectClass}
            disabled={!formData.classType}
            required
          >
            <option value="">
              {!formData.classType
                ? "Choose learning mode first"
                : "Select an option"}
            </option>
            {courseOptions.map(({ id, tag }) => (
              <option key={id} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="codeExperience" className={labelClass}>
            Coding experience
          </label>
          <select
            id="codeExperience"
            name="codeExperience"
            value={formData.codeExperience}
            onChange={onInputChange}
            className={selectClass}
            required
          >
            <option value="">Select an option</option>
            {CODING_EXPERIENCE.map(({ id, tag }) => (
              <option key={id} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="border-t border-[#EEF1F4] pt-8">
        <h3 className="font-sfPro text-base font-semibold text-[#083700]">
          Your details
        </h3>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className={labelClass}>
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={onInputChange}
              className={inputClass}
              placeholder="First name"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className={labelClass}>
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={onInputChange}
              className={inputClass}
              placeholder="Last name"
              required
            />
          </div>
          <div>
            <label htmlFor="dob" className={labelClass}>
              Date of birth
            </label>
            <input
              id="dob"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={onInputChange}
              className={inputClass}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNo" className={labelClass}>
              Phone number
            </label>
            <input
              id="phoneNo"
              name="phoneNo"
              type="tel"
              value={formData.phoneNo}
              onChange={onInputChange}
              className={inputClass}
              placeholder="+234…"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="emailAddress" className={labelClass}>
              Email address
            </label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              value={formData.emailAddress}
              onChange={onInputChange}
              className={inputClass}
              placeholder="you@example.com"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}
