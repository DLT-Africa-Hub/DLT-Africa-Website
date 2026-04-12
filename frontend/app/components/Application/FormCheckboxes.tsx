import { CheckboxesChecked } from "./constants";

interface FormCheckboxesProps {
  checkboxesChecked: CheckboxesChecked;
  onCheckboxChange: (name: keyof CheckboxesChecked) => void;
  tuitionFee: number;
}

const inputClass =
  "mt-0.5 h-[18px] w-[18px] shrink-0 rounded border border-[#C5CED6] accent-[#1C7800] focus:outline-none focus:ring-2 focus:ring-[#1C7800]/25";

const FormCheckboxes = ({
  checkboxesChecked,
  onCheckboxChange,
  tuitionFee,
}: FormCheckboxesProps) => {
  const feeLabel =
    tuitionFee > 0
      ? `NGN ${tuitionFee.toLocaleString("en-NG")}`
      : "the listed fee";

  return (
    <div className="flex w-full flex-col gap-4">
      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={checkboxesChecked.newsletter}
          onChange={() => onCheckboxChange("newsletter")}
          className={inputClass}
          required
        />
        <span className="font-poppins text-sm leading-relaxed text-[#252A24]">
          I would like to be kept up to date with new training programs, events,
          promotions, and marketing.
        </span>
      </label>

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={checkboxesChecked.privacyPolicy}
          onChange={() => onCheckboxChange("privacyPolicy")}
          className={inputClass}
          required
        />
        <span className="font-poppins text-sm leading-relaxed text-[#252A24]">
          By submitting this form, I accept DLT Africa&apos;s Privacy Policy.
        </span>
      </label>

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={checkboxesChecked.payment}
          onChange={() => onCheckboxChange("payment")}
          className={inputClass}
          required
        />
        <span className="font-poppins text-sm leading-relaxed text-[#252A24]">
          I confirm I am applying for this course at the specified fee of{" "}
          {feeLabel}.
        </span>
      </label>
    </div>
  );
};

export default FormCheckboxes;
