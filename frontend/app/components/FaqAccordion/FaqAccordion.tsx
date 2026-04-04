"use client";

import { useId, useState } from "react";

export type FaqAccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: readonly FaqAccordionItem[];
  className?: string;
};

export function FaqAccordion({ items, className = "" }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const instanceId = useId().replaceAll(":", "");

  return (
    <ul
      className={`border-y border-[#E8ECF0] ${className}`.trim()}
      role="list"
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${instanceId}-${item.id}-panel`;
        const headerId = `${instanceId}-${item.id}-trigger`;

        return (
          <li
            key={item.id}
            className="border-b border-[#E8ECF0] last:border-b-0"
          >
            <button
              type="button"
              id={headerId}
              className="flex w-full items-start gap-3 py-4 text-left font-sfPro text-sm font-semibold text-[#1C1C1C] transition-colors hover:text-[#083700] sm:text-base"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() =>
                setOpenIndex((prev) => (prev === index ? null : index))
              }
            >
              <span
                className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center text-lg font-normal leading-none text-black transition-transform duration-300 ease-out motion-reduce:transition-none ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
                aria-hidden
              >
                +
              </span>
              <span className="min-w-0 flex-1">{item.question}</span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0">
                <p className="pb-4 pl-8 pr-1 font-poppins text-sm font-normal leading-relaxed text-[#5C6670] sm:text-base sm:pl-9">
                  {item.answer}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
