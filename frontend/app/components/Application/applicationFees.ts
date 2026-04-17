import { ONLINE_COURSES, PHYSICAL_COURSES } from "./constants";

/**
 * Tuition shown in the summary sidebar, fee checkbox, and FormCheckboxes.
 * Values come from `fee` on {@link PHYSICAL_COURSES} / {@link ONLINE_COURSES} — keep those in sync with product/pricing.
 *
 * Note: confirmation emails use backend `calculateTuitionFee` (`backend/utils/index.js`).
 * If those should match this UI, align `COURSE_PRICING` with the same amounts or update the email template.
 */
export function computeTuitionFee(
  classType: string,
  courseSelected: string,
): number {
  if (!classType || !courseSelected) return 0;

  const list =
    classType === "Physical"
      ? PHYSICAL_COURSES
      : classType === "Virtual"
        ? ONLINE_COURSES
        : [];

  const option = list.find((o) => o.tag === courseSelected);
  return option?.fee ?? 0;
}

/** Tuition label for summary UI and post-registration WhatsApp text (matches enrollment sidebar). */
export function formatTuitionNgn(amount: number): string {
  if (!amount) return "—";
  return `NGN ${amount.toLocaleString("en-NG")}`;
}
