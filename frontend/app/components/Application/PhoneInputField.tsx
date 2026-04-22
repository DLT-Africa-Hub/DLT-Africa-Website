"use client";

import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import type { ChangeEvent } from "react";

type Props = {
  phoneCountry: string;
  phoneNo: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  labelClass: string;
  inputClass: string;
  selectClass: string;
};

const countries = getCountries();

export default function PhoneInputField({
  phoneCountry,
  phoneNo,
  onInputChange,
  labelClass,
  inputClass,
  selectClass,
}: Props) {
  return (
    <div>
      <label htmlFor="phoneNo" className={labelClass}>
        Phone number <span className="font-normal">(WhatsApp preferably)</span>
      </label>
      <div className="grid grid-cols-[minmax(0,120px)_minmax(0,1fr)] gap-3">
        <select
          id="phoneCountry"
          name="phoneCountry"
          value={phoneCountry || ""}
          onChange={onInputChange}
          className={`${selectClass} min-w-0`}
          required
          aria-label="Country code"
        >
          <option value="">

          </option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country} (+{getCountryCallingCode(country)})
            </option>
          ))}
        </select>

        <input
          id="phoneNo"
          name="phoneNo"
          type="tel"
          value={phoneNo}
          onChange={onInputChange}
          className={`${inputClass} min-w-0`}
          placeholder="Phone number"
          required
        />
      </div>
    </div>
  );
}
