const COMPANY_STYLES: Record<string, string> = {
  lisk: "bg-[#0B3D91]/90 text-white border-white/20",
  crossfi: "bg-[#083700]/90 text-[#B8F070] border-[#1C7800]/40",
  celo: "bg-[#FBCC5C]/95 text-[#083700] border-[#E5A82B]/50",
};

const DEFAULT_STYLE =
  "bg-[#1C7800]/90 text-white border-white/20";

type CompanyBadgeProps = {
  company?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "px-2 py-0.5 text-[10px] sm:text-xs",
  md: "px-2.5 py-1 text-xs sm:text-sm",
  lg: "px-3.5 py-1.5 text-sm font-semibold",
};

export default function CompanyBadge({
  company,
  size = "md",
  className = "",
}: CompanyBadgeProps) {
  const label = company?.trim();
  if (!label) return null;

  const styleKey = label.toLowerCase().replace(/\s+/g, "");
  const colorClass =
    COMPANY_STYLES[styleKey] ??
    COMPANY_STYLES[label.toLowerCase()] ??
    DEFAULT_STYLE;

  return (
    <span
      className={`inline-flex items-center rounded-full border font-poppins font-semibold uppercase tracking-wide backdrop-blur-sm ${sizeClasses[size]} ${colorClass} ${className}`.trim()}
    >
      {label}
    </span>
  );
}
