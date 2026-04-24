"use client";

import { useEffect, useState } from "react";
import { apiClient, getApiErrorMessage } from "@/lib/apiClient";
import ChangeStatus from "@/app/components/ChangeStatus/ChangeStatus";
import AdminTopNav from "./AdminTopNav";

interface AdmissionData {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNo: string;
  courseSelected: string;
  classType: string;
  emailAddress: string;
  status: string;
}

const AdminDashboard: React.FC = () => {
  const [admissionData, setAdmissionData] = useState<AdmissionData[]>([]);

  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<AdmissionData[]>([]);
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(5);

  useEffect(() => {
    setIsLoading(true);
    const fetchAdmissions = async (): Promise<void> => {
      try {
        const response = await apiClient.get("/cohorts/get-all-admissions");
        if (
          response.data &&
          response.data.success &&
          Array.isArray(response.data.data)
        ) {
          setAdmissionData(response.data.data);
          setMessage("");
        } else {
          console.error("Invalid response format:", response.data);
          setAdmissionData([]);
          setMessage("Invalid data format received");
        }
      } catch (error: unknown) {
        console.error("Error fetching admissions:", error);
        setAdmissionData([]);
        setMessage(getApiErrorMessage(error));
      }
      setIsLoading(false);
    };
    fetchAdmissions();
  }, []);

  useEffect(() => {
    if (!Array.isArray(admissionData) || admissionData.length === 0) {
      setSearchResults([]);
      return;
    }

    try {
      const filteredAdmission = admissionData.filter(
        (res) =>
          res?.firstName?.toLowerCase().includes(search.toLowerCase()) ||
          res?.classType?.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults(filteredAdmission);
    } catch (error) {
      console.error("Error filtering admission data:", error);
      setSearchResults([]);
    }
  }, [admissionData, search]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  const exportToCSV = (): void => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const csvContent = [
      [
        "First Name",
        "Last Name",
        "Email",
        "Phone",
        "Course Selected",
        "Class Type",
        "Status",
      ],
      ...admissionData.map((entry) => [
        entry.firstName || "",
        entry.lastName || "",
        entry.emailAddress || "",
        entry.phoneNo || "",
        entry.courseSelected || "",
        entry.classType || "",
        entry.status || "",
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `admissions-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#F7FAF8] p-4 md:p-8">
      <div className="w-full">
        <h1 className="font-sfPro text-3xl font-bold text-[#083700]">Admin Dashboard</h1>
        <p className="mt-1 font-poppins text-sm text-[#5C6670]">
          Manage admissions and update student status.
        </p>
        <div className="mt-5">
          <AdminTopNav activePath="/admin-dashboard" onExportCsv={exportToCSV} />
        </div>
      </div>

      <input
        type="text"
        placeholder="Search"
        className="mt-6 w-full rounded-xl border border-[#E4E8EC] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#1C7800] focus:ring-2 focus:ring-[#1C7800]/20"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {!isLoading && admissionData.length === 0 ? (
        <p>No admission data found...</p>
      ) : (
        <>
          <div className="mt-4 overflow-hidden rounded-2xl border border-[#E4E8EC] bg-white">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-[#F8FAFC] text-left text-[#324054]">
                  <th className="px-4 py-3 font-semibold">S/N</th>
                  <th className="px-4 py-3 font-semibold">First Name</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">Update Status</th>
                  <th className="px-4 py-3 font-semibold">Course Selected</th>
                  <th className="px-4 py-3 font-semibold">Phone</th>
                  <th className="px-4 py-3 font-semibold">Class Type</th>
                  <th className="px-4 py-3 font-semibold" title="payment status">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {currentItems.map((admission: AdmissionData, index: number) => {
                  const {
                    _id,
                    firstName,
                    phoneNo,
                    courseSelected,
                    classType,
                    emailAddress,
                    status,
                    lastName,
                  } = admission;

                  return (
                    <tr key={_id}>
                      <td className="border-t border-[#EEF1F4] px-4 py-3">{index + 1}</td>
                      <td className="border-t border-[#EEF1F4] px-4 py-3">
                        {firstName} &nbsp;{lastName}
                      </td>
                      <td className="border-t border-[#EEF1F4] px-4 py-3">{emailAddress}</td>
                      <td className="border-t border-[#EEF1F4] px-4 py-3">
                        <ChangeStatus id={_id} />
                      </td>
                      <td className="border-t border-[#EEF1F4] px-4 py-3">{courseSelected}</td>
                      <td className="border-t border-[#EEF1F4] px-4 py-3">{phoneNo}</td>
                      <td className="border-t border-[#EEF1F4] px-4 py-3">{classType}</td>
                      <td className="border-t border-[#EEF1F4] px-4 py-3">{status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <ul className="flex flex-wrap gap-2">
              {Array.from(
                { length: Math.ceil(searchResults.length / itemsPerPage) },
                (_, number) => (
                  <li key={number}>
                    <button
                      onClick={() => paginate(number + 1)}
                      className="rounded-lg border border-[#D6DEE6] bg-white px-3 py-1.5 text-sm text-[#324054] transition hover:border-[#1C7800] hover:text-[#1C7800]"
                    >
                      {number + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
