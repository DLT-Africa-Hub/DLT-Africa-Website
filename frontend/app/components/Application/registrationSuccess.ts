/**
 * Persists a lightweight post-registration summary so the success page can show
 * details and build a structured WhatsApp link (session-only, no app ID).
 */

export const REGISTRATION_SUCCESS_STORAGE_KEY = "dlt_registration_success";

/** Same support line as footer / contact (wa.me expects digits only, no +). */
export const WHATSAPP_SUPPORT_E164 = "2348156509701";

export type RegistrationSuccessSummary = {
  fullName: string;
  courseName: string;
  mode: "Physical" | "Virtual" | "";
  priceLabel: string;
};

export function persistRegistrationSuccess(
  summary: RegistrationSuccessSummary,
): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(
      REGISTRATION_SUCCESS_STORAGE_KEY,
      JSON.stringify(summary),
    );
  } catch {
    // quota / private mode
  }
}

export function readRegistrationSuccess(): RegistrationSuccessSummary | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(REGISTRATION_SUCCESS_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as RegistrationSuccessSummary;
    if (!parsed || typeof parsed.fullName !== "string") return null;
    return parsed;
  } catch {
    return null;
  }
}

function modeLine(mode: RegistrationSuccessSummary["mode"]): string {
  if (mode === "Physical") return "Physical";
  if (mode === "Virtual") return "Virtual";
  return "—";
}

export function buildWhatsAppConfirmationMessage(
  summary: RegistrationSuccessSummary,
): string {
  return `Hi, my name is ${summary.fullName}.

I just registered for the ${summary.courseName} bootcamp.

📍 Mode: ${modeLine(summary.mode)}
💰 Price: ${summary.priceLabel}

Please confirm my registration. Thank you.`;
}

export function buildWhatsAppConfirmationUrl(
  summary: RegistrationSuccessSummary,
): string {
  const text = buildWhatsAppConfirmationMessage(summary);
  return `https://wa.me/${WHATSAPP_SUPPORT_E164}?text=${encodeURIComponent(text)}`;
}

/** When the user lands on /congrats without session data (refresh, direct link). */
export function buildDefaultWhatsAppUrl(): string {
  const text = `Hi, I just completed my registration on the DLT Africa website.

Please confirm my registration. Thank you.`;
  return `https://wa.me/${WHATSAPP_SUPPORT_E164}?text=${encodeURIComponent(text)}`;
}
