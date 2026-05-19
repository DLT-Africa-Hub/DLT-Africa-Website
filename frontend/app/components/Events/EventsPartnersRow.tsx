import CompanyBadge from "@/app/components/Events/CompanyBadge";

type EventsPartnersRowProps = {
  companies: string[];
};

export default function EventsPartnersRow({ companies }: EventsPartnersRowProps) {
  if (companies.length === 0) return null;

  return (
    <section className="border-b border-[#E4E8EC]/80 bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-poppins text-xs font-semibold uppercase tracking-widest text-[#5C6670]">
          Partners we&apos;ve hosted with
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          {companies.map((company) => (
            <CompanyBadge key={company} company={company} size="lg" />
          ))}
        </div>
      </div>
    </section>
  );
}
