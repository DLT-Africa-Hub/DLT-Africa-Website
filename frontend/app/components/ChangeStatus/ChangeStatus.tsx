import { FaCheck } from "react-icons/fa";
import React, { useState } from "react";
import { apiClient, getApiErrorMessage } from "@/lib/apiClient";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface ChangeStatusProps {
  id: string;
}

const ChangeStatus: React.FC<ChangeStatusProps> = ({ id }) => {
  const [studentStatus, setStudentStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const changeRole = async (): Promise<void> => {
    if (!studentStatus) {
      toast.error("Please select a status to be updated");
      return;
    }
    setIsLoading(true);
    try {
      await apiClient.post("/cohorts/upgrade-admission", {
        status: studentStatus,
        id,
      });
      router.push("/admin-dashboard");
    } catch (error: unknown) {
      toast.error(getApiErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <select
        value={studentStatus}
        onChange={(e) => setStudentStatus(e.target.value)}
        className="rounded-lg border border-[#D6DEE6] bg-white px-2 py-1.5 text-xs text-[#324054] outline-none focus:border-[#1C7800]"
      >
        <option value="Not Paid">-- select status --</option>
        <option value="Paid">Paid</option>
        <option value="Accepted">Accepted</option>
      </select>
      <button
        className="rounded-lg border border-[#1C7800]/30 bg-[#1C7800]/10 p-2 transition hover:bg-[#1C7800]/20 disabled:opacity-60"
        onClick={changeRole}
        disabled={isLoading}
      >
        <FaCheck size={25} color="green" />
      </button>
    </div>
  );
};

export default ChangeStatus;
