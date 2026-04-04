/**
 * Button styles from design spec:
 * - SF Pro Display, 400, 18px, line-height 160%, letter-spacing 0%
 * - Colors: var(--green-colors-800), #FAFAFA, var(--green-colors-50)
 *
 * Use with native <button> or <Link>: className={`${buttonVariants.solidGreen} ...`}
 */
export const buttonTypography =
  "font-sfPro font-normal text-[16px] ";

/** Shared layout: flex, 10px gap, 10px radius (matches spec 3). */
const buttonLayout =
  "inline-flex items-center justify-center gap-[10px] rounded-[10px] transition-colors duration-200";

export const buttonVariants = {
  /** Green fill (#1C7800 / --green-colors-800) */
  solidGreen: `${buttonTypography} ${buttonLayout} px-6 py-3 bg-[#1C7800] text-white hover:bg-[#155a00]`,

  /** Light gray fill (#FAFAFA) */
  neutral: `${buttonTypography} ${buttonLayout} px-6 py-3 bg-[#FAFAFA] text-[#1C7800] border border-[#1C7800] hover:bg-[#1C7800]/10`,

  /**
   * Fixed 175×65, 10px padding & gap, light green (#EFFFE2 / --green-colors-50).
   * box-border so padding counts inside width/height.
   */
  softGreen: `${buttonTypography} ${buttonLayout} box-border p-[10px] bg-[#EFFFE2] text-[#1C7800] w-[175px] h-[50px] hover:bg-[#DFF5D0] active:bg-[#D4EFC8]`,
} as const;

export type ButtonVariantName = keyof typeof buttonVariants;
