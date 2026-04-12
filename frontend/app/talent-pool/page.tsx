import dynamic from "next/dynamic";
import TalentPoolLoader from "@/app/components/Loader/TalentPoolLoader";

const TalentPool = dynamic(
  () => import("@/app/components/TalentPool/TalentPool"),
  {
    ssr: false,
    loading: () => <TalentPoolLoader />,
  },
);

export default function Page() {
  return <TalentPool />;
}
