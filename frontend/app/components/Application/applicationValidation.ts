/**
 * Mirrors backend `userModel` + `validateUserInput` (user.controller.js)
 * so users see errors before submit when possible.
 */

export const EMAIL_REGEX =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/** Same as Mongoose `phoneNo.match` in userModel.js */
export const NIGERIAN_PHONE_REGEX = /^(\+234|234|0)?[789][01]\d{8}$/;

export const ALLOWED_GENDERS = [
  "Male",
  "Female",
  "Other",
  "Prefer Not To Mention",
] as const;

export const ALLOWED_CODE_EXPERIENCE = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Expert",
] as const;

const MIN_NAME_LEN = 2;
const MAX_NAME_LEN = 50;

export function normalizePhoneForValidation(phone: string): string {
  return phone.replace(/[\s-]/g, "");
}

export function validateApplicationFields(input: {
  firstName: string;
  lastName: string;
  dob: string;
  courseSelected: string;
  classType: string;
  stateOfOrigin: string;
  gender: string;
  phoneNo: string;
  emailAddress: string;
  codeExperience: string;
  stateOfResidence: string;
}): string | null {
  const requiredKeys = [
    "firstName",
    "lastName",
    "dob",
    "courseSelected",
    "classType",
    "stateOfOrigin",
    "gender",
    "phoneNo",
    "emailAddress",
    "codeExperience",
    "stateOfResidence",
  ] as const;

  for (const key of requiredKeys) {
    const v = input[key];
    if (v === undefined || v === null || String(v).trim() === "") {
      return "Please fill in all required fields.";
    }
  }

  const fn = input.firstName.trim();
  const ln = input.lastName.trim();
  if (fn.length < MIN_NAME_LEN || fn.length > MAX_NAME_LEN) {
    return `First name must be between ${MIN_NAME_LEN} and ${MAX_NAME_LEN} characters.`;
  }
  if (ln.length < MIN_NAME_LEN || ln.length > MAX_NAME_LEN) {
    return `Last name must be between ${MIN_NAME_LEN} and ${MAX_NAME_LEN} characters.`;
  }

  if (!EMAIL_REGEX.test(input.emailAddress.trim())) {
    return "Please enter a valid email address.";
  }

  const phoneNorm = normalizePhoneForValidation(input.phoneNo);
  if (!NIGERIAN_PHONE_REGEX.test(phoneNorm)) {
    return "Please enter a valid Nigerian phone number (e.g. 08031234567 or +2348031234567).";
  }

  const genderTrimmed = input.gender.trim();
  const codeTrimmed = input.codeExperience.trim();
  if (!([...ALLOWED_GENDERS] as string[]).includes(genderTrimmed)) {
    return "Please select a valid gender option.";
  }

  if (!([...ALLOWED_CODE_EXPERIENCE] as string[]).includes(codeTrimmed)) {
    return "Please select a valid coding experience level.";
  }

  return null;
}
