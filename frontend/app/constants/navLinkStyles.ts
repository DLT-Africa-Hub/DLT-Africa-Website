/** Hover slide + underline (shared by header nav + footer quick links). */
export const navLinkInteractiveClass =
  "relative inline-block pb-1 transition-all duration-300 ease-out after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-sm after:bg-[#1C7800] after:transition-all after:duration-300 after:ease-out after:content-[''] hover:translate-x-1 hover:text-[#1C7800] hover:after:w-full";

/** Current route: green text + full underline. */
export const navLinkActiveClass = "text-[#1C7800] after:w-full";
