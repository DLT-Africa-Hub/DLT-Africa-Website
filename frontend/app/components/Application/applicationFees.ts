/**
 * Tuition shown on the enrollment form and sent with fee-acknowledgement checkbox.
 * Keys must match `courseSelected` option labels from constants.
 */
export function computeTuitionFee(
  classType: string,
  courseSelected: string
): number {
  if (!classType || !courseSelected) return 0;

  if (classType === "Physical") {
    const physical: Record<string, number> = {
      "Frontend Development": 420_000,
      "Full-Stack Development": 640_000,
      "Product UI/UX Design": 170_000,
      "Graphics Design": 150_000,
    };
    return physical[courseSelected] ?? 0;
  }

  if (classType === "Virtual") {
    const virtual: Record<string, number> = {
      "Frontend Development": 100_000,
      "Product UI/UX Design": 50_000,
      "Graphics Design": 40_000,
    };
    return virtual[courseSelected] ?? 0;
  }

  return 0;
}
