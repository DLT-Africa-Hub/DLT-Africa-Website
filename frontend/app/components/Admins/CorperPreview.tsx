"use client";

import { useEffect, useState } from "react";
import { apiClient, getApiErrorMessage } from "@/lib/apiClient";
import AdminTopNav from "./AdminTopNav";

interface CorperData {
  fullName: string;
  emailAddress: string;
  phone_number: string;
  gender: string;
  stateOfOrigin: string;
  corp_id: string;
  course_selected: string;
  batchResumption: string;
}

const CorperPreview: React.FC = () => {
  const [corperData, setCorperData] = useState<CorperData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<CorperData[]>([]);
  const [message, setMessage] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(5);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async (): Promise<void> => {
      try {
        const response = await apiClient.get("/cohorts/get-all-corpers");
        if (
          response.data &&
          response.data.success &&
          Array.isArray(response.data.data)
        ) {
          setCorperData(response.data.data);
        } else {
          setCorperData([]);
          setMessage("Invalid data format received");
        }
      } catch (error: unknown) {
        console.error("Error fetching corper data:", error);
        setCorperData([]);
        setMessage(getApiErrorMessage(error));
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!Array.isArray(corperData)) {
      setSearchResults([]);
      return;
    }
    const filteredData = corperData.filter(
      (res) =>
        res.batchResumption?.toLowerCase().includes(search.toLowerCase()) ||
        res.fullName?.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredData);
  }, [corperData, search]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-[#F7FAF8] p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-sfPro text-3xl font-bold text-[#083700]">Corpers List</h1>
        <p className="mt-1 font-poppins text-sm text-[#5C6670]">
          Browse corpers by name and batch resumption.
        </p>
        <div className="mt-5">
          <AdminTopNav activePath="/corpers" />
        </div>
      </div>

      <input
        type="text"
        placeholder="Search"
        className="mt-6 w-full rounded-xl border border-[#E4E8EC] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#1C7800] focus:ring-2 focus:ring-[#1C7800]/20"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {!isLoading && corperData.length === 0 ? (
        <p>No corper&apos;s data found...</p>
      ) : (
        <>
          <div className="mt-4 overflow-hidden rounded-2xl border border-[#E4E8EC] bg-white">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-[#F8FAFC] text-left text-[#324054]">
                  <th className="px-4 py-3 font-semibold">S/N</th>
                  <th className="px-4 py-3 font-semibold">Full Name</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">Course Selected</th>
                  <th className="px-4 py-3 font-semibold">Phone</th>
                  <th className="px-4 py-3 font-semibold">Batch</th>
                </tr>
              </thead>

              <tbody>
                {currentItems.map((corper: CorperData, index: number) => {
                  const {
                    fullName,
                    emailAddress,
                    phone_number,
                    course_selected,
                    batchResumption,
                  } = corper;

                  return (
                    <tr key={index}>
                      <td className="border-t border-[#EEF1F4] px-4 py-3">{index + 1}</td>
                      <td className="border-t border-[#EEF1F4] px-4 py-3">{fullName}</td>
                      <td className="border-t border-[#EEF1F4] px-4 py-3">{emailAddress}</td>

                      <td className="border-t border-[#EEF1F4] px-4 py-3">{course_selected}</td>
                      <td className="border-t border-[#EEF1F4] px-4 py-3">{phone_number}</td>

                      <td className="border-t border-[#EEF1F4] px-4 py-3">{batchResumption}</td>
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

export default CorperPreview;
