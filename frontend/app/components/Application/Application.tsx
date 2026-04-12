"use client";

import { buttonVariants } from "@/app/constants/buttonStyles";
import EnrollmentFormFields from "./EnrollmentFormFields";
import EnrollmentSummary from "./EnrollmentSummary";
import FormCheckboxes from "./FormCheckboxes";
import { useApplicationForm } from "./hooks/useApplicationForm";

const FORM_ID = "enrollment-form";

const Application: React.FC = () => {
  const {
    formData,
    checkboxesChecked,
    formValidMessage,
    isSubmitting,
    tuitionFee,
    isApplicationClosed,
    allCheckboxesChecked,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
    setClassType,
  } = useApplicationForm();

  const submitDisabled =
    !allCheckboxesChecked || isSubmitting || isApplicationClosed;

  return (
    <div className="min-h-screen bg-white pb-16 pt-[103px]">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        {isApplicationClosed && (
          <div
            className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 font-poppins text-sm text-amber-900"
            role="status"
          >
            Applications are currently closed.
          </div>
        )}

        <div className="grid gap-10 lg:grid-cols-[1fr,min(340px,100%)] lg:items-start lg:gap-12">
          <div>
            <h1 className="font-sfPro text-3xl font-bold text-[#083700] sm:text-4xl">
              Enroll and start your tech journey
            </h1>

            <form
              id={FORM_ID}
              className="mt-8 rounded-2xl border border-[#EEF1F4] bg-white p-6 shadow-sm sm:p-8 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
              onSubmit={handleSubmit}
            >
              <EnrollmentFormFields
                formData={formData}
                onInputChange={handleInputChange}
                setClassType={setClassType}
              />

              <div className="mt-10 border-t border-[#EEF1F4] pt-8">
                <FormCheckboxes
                  checkboxesChecked={checkboxesChecked}
                  onCheckboxChange={handleCheckboxChange}
                  tuitionFee={tuitionFee}
                />
              </div>

              <button
                type="submit"
                disabled={submitDisabled}
                className={`${buttonVariants.solidGreen} mt-8 w-full justify-center py-3.5 disabled:pointer-events-none disabled:opacity-50 sm:w-auto sm:min-w-[200px]`}
              >
                {isSubmitting ? "Submitting…" : "Enroll now"}
              </button>

              {formValidMessage && (
                <div
                  className="event-page-registration-error-message mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 font-poppins text-sm text-red-800"
                  role="alert"
                >
                  {formValidMessage}
                </div>
              )}
            </form>

            <div className="mt-8 text-center lg:text-left">
              <p className="font-poppins text-sm text-[#5C6670]">
                Need help or having issues registering? Call us at:{" "}
                <span className="font-semibold text-[#1C7800]">
                  +234-8156509701
                </span>
              </p>
            </div>
          </div>

          <EnrollmentSummary
            courseName={formData.courseSelected}
            classType={formData.classType}
            tuitionFee={tuitionFee}
          />
        </div>
      </div>
    </div>
  );
};

export default Application;
