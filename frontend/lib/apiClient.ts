import axios, { AxiosError, AxiosResponse } from "axios";

const DEFAULT_BASE_URL = "https://dlt-backend.vercel.app/api/v1";

/** Present on errors rejected by {@link apiClient} after the response interceptor runs. */
export type ApiClientError = AxiosError & { apiMessage: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function messageFromResponseData(data: unknown): string | null {
  if (typeof data === "string" && data.trim()) return data.trim();
  if (!isRecord(data)) return null;
  if (typeof data.message === "string") return data.message;
  if (typeof data.error === "string") return data.error;
  const errors = data.errors;
  if (Array.isArray(errors) && errors.length > 0) {
    const first = errors[0];
    if (typeof first === "string") return first;
    if (isRecord(first) && typeof first.msg === "string") return first.msg;
  }
  return null;
}

/** Derive a user-facing message from an Axios error (any source). */
function parseAxiosErrorMessage(error: AxiosError): string {
  const status = error.response?.status;
  const fromBody = messageFromResponseData(error.response?.data);
  if (fromBody) return fromBody;

  if (status === 401) return "Unauthorized. Please sign in again.";
  if (status === 403) return "You do not have permission to do that.";
  if (status === 404) return "Resource not found.";
  if (status !== undefined && status >= 500) {
    return "Server error. Please try again later.";
  }
  if (error.code === "ECONNABORTED") {
    return "Request timed out. Please try again.";
  }
  if (!error.response && error.request) {
    return "Network error. Check your connection and try again.";
  }
  if (error.message) return error.message;
  return "Something went wrong. Please try again.";
}

/**
 * User-facing message for any thrown error (prefer {@link apiClient} errors with `apiMessage`).
 */
export function getApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const enriched = error as Partial<ApiClientError>;
    if (typeof enriched.apiMessage === "string") return enriched.apiMessage;
    return parseAxiosErrorMessage(error);
  }
  if (error instanceof Error) return error.message;
  return "Something went wrong. Please try again.";
}

/**
 * Base URL for the DLT main API (includes `/api/v1`).
 * Set `NEXT_PUBLIC_API_BASE_URL` in `.env` (no trailing slash).
 */
export function getApiBaseUrl(): string {
  const raw = process.env.NEXT_PUBLIC_API_BASE_URL?.trim();
  if (!raw) return DEFAULT_BASE_URL;
  return raw.replace(/\/$/, "");
}

/**
 * Shared Axios instance for the DLT main backend.
 * Pass paths relative to `/api/v1`, e.g. `/contact/contactUs`, `/events/get-all-events`.
 *
 * Rejected errors are enriched with `apiMessage` and logged in development.
 */
export const apiClient = axios.create({
  baseURL: getApiBaseUrl(),
});

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const apiMessage = parseAxiosErrorMessage(error);
    const enriched = Object.assign(error, { apiMessage }) as ApiClientError;

    if (process.env.NODE_ENV === "development") {
      const { config, response: res } = enriched;
      console.error(
        "[apiClient]",
        config?.method?.toUpperCase(),
        config?.url,
        res?.status ?? "no-response",
        apiMessage
      );
    }

    return Promise.reject(enriched);
  }
);
