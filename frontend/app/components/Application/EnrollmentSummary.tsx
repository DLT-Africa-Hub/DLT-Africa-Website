"use client";

import { formatTuitionNgn } from "./applicationFees";

type Props = {
  courseName: string;
  classType: string;
  tuitionFee: number;
};

export default function EnrollmentSummary({
  courseName,
  classType,
  tuitionFee,
}: Props) {
  const modeLabel =
    classType === "Physical"
      ? "Physical"
      : classType === "Virtual"
        ? "Virtual"
        : "—";

  return (
    <aside className="lg:sticky lg:top-28">
      <div className="rounded-2xl border border-[#E8ECF0] bg-[#F7F7F7] p-6 sm:p-7 shadow-[0px_20px_20px_0px_rgba(0,0,0,0.1)]">
        <h2 className="font-sfPro text-lg font-bold text-[#083700] sm:text-xl">
          Summary
        </h2>
        <p className="mt-1 font-poppins text-xs text-[#5C6670] sm:text-sm">
          Enrollment details
        </p>

        <dl className="mt-6 space-y-4 border-t border-[#E0E4E8] pt-6 bg-[#E8E8E8] rounded-lg p-4">
          <dt className="font-sfPro text-xs font-semibold text-[#083700] flex justify-between items-center">
            Course:{" "}
            <span className="font-poppins text-sm text-[#252A24]">
              {courseName || "—"}
            </span>
          </dt>
          <dt className="font-sfPro text-xs font-semibold text-[#083700] flex justify-between items-center">
            Learning mode:
            <span className="font-poppins text-sm text-[#252A24]">
              {modeLabel}
            </span>
          </dt>
        </dl>

        <div className="mt-6 rounded-xl bg-[#E8E8E8] px-4 py-4">
          <p className="font-poppins text-xs text-[#083700] flex justify-between items-center">
            Total course cost:{" "}
            <span className="font-semibold text-[#083700] ">
              {formatTuitionNgn(tuitionFee)}
            </span>
          </p>
        </div>
      </div>
    </aside>
  );
}
