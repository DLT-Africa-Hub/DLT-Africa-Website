"use client";

import React, { useEffect, useState } from "react";
import { apiClient, getApiErrorMessage } from "@/lib/apiClient";
import AdminTopNav from "../components/Admins/AdminTopNav";

const WaitlistAdmin = () => {
  interface WaitlistEntry {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    createdAt: string;
  }

  const [waitlistData, setWaitlistData] = useState<WaitlistEntry[]>([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<WaitlistEntry[]>([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [waitlistActive, setWaitlistActive] = useState(false);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchWaitlist = async () => {
      try {
        const response = await apiClient.get("/waitlist/");
        setWaitlistData(response.data.data);
        setIsLoading(false);
      } catch (error: unknown) {
        setIsLoading(false);
        console.error("Error fetching waitlist:", error);
        setMessage(getApiErrorMessage(error));
      }
    };
    fetchWaitlist();
  }, []);

  // Fetch waitlist status
  useEffect(() => {
    const fetchWaitlistStatus = async () => {
      try {
        const response = await apiClient.get("/settings/waitlist-status");
        setWaitlistActive(response.data.waitlistActive);
      } catch (error: unknown) {
        console.error("Error fetching waitlist status:", error);
        setMessage(getApiErrorMessage(error));
      }
    };
    fetchWaitlistStatus();
  }, []);

  useEffect(() => {
    const filteredWaitlist = waitlistData.filter(
      (entry: WaitlistEntry) =>
        entry.name.toLowerCase().includes(search.toLowerCase()) ||
        entry.email.toLowerCase().includes(search.toLowerCase()) ||
        (entry.phone && entry.phone.includes(search))
    );
    setSearchResults(filteredWaitlist);
  }, [search, waitlistData]);

  const handleDelete = async (id: string) => {
    if (
      typeof window !== "undefined" &&
      window.confirm("Are you sure you want to delete this waitlist entry?")
    ) {
      try {
        await apiClient.delete(`/waitlist/${id}`);
        setWaitlistData(
          waitlistData.filter((entry: WaitlistEntry) => entry._id !== id)
        );
        setMessage("Waitlist entry deleted successfully");
        setTimeout(() => setMessage(""), 3000);
      } catch (error: unknown) {
        console.error("Error deleting waitlist entry:", error);
        setMessage(getApiErrorMessage(error));
        setTimeout(() => setMessage(""), 3000);
      }
    }
  };

  const exportToCSV = () => {
    // Check if we're on the client side
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const csvContent = [
      ["Name", "Email", "Phone", "Joined Date"],
      ...waitlistData.map((entry: WaitlistEntry) => [
        entry.name,
        entry.email,
        entry.phone || "N/A",
        new Date(entry.createdAt).toLocaleDateString(),
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    // Check if we're on the client side
    if (typeof document !== "undefined") {
      const a = document.createElement("a");
      a.href = url;
      a.download = `waitlist-${new Date().toISOString().split("T")[0]}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  const toggleWaitlistStatus = async () => {
    setIsUpdatingStatus(true);
    try {
      const response = await apiClient.put("/settings/waitlist-status", {
        waitlistActive: !waitlistActive,
      });

      setWaitlistActive(!waitlistActive);
      setMessage(response.data.message);
      setTimeout(() => setMessage(""), 3000);
    } catch (error: unknown) {
      console.error("Error updating waitlist status:", error);
      setMessage(getApiErrorMessage(error));
      setTimeout(() => setMessage(""), 3000);
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F7FAF8] p-4 md:p-8">
        <div className="mx-auto flex h-64 max-w-7xl items-center justify-center rounded-2xl border border-[#E4E8EC] bg-white">
          <div className="text-lg text-[#324054]">Loading waitlist data...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7FAF8] p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="font-sfPro text-3xl font-bold text-[#083700]">
            Waitlist Management
          </h1>
          <p className="mt-1 font-poppins text-sm text-[#5C6670]">
          Manage and monitor waitlist entries for upcoming cohorts
          </p>
          <div className="mt-5">
            <AdminTopNav activePath="/waitlist" onExportCsv={exportToCSV} />
          </div>
        </div>

      {/* Waitlist Status Toggle */}
      <div className="mb-8 rounded-2xl border border-[#E4E8EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-[#2E3A46]">
              Waitlist Status
            </h3>
            <p className="text-sm text-[#5C6670]">
              {waitlistActive
                ? "Waitlist is currently ACTIVE - Users will see 'Join Waitlist' button"
                : "Waitlist is INACTIVE - Users will see 'Register' button"}
            </p>
          </div>
          <button
            onClick={toggleWaitlistStatus}
            disabled={isUpdatingStatus}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#1C7800] focus:ring-offset-2 ${
              waitlistActive ? "bg-[#1C7800]" : "bg-gray-200"
            } ${isUpdatingStatus ? "cursor-not-allowed opacity-50" : ""}`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                waitlistActive ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
        {isUpdatingStatus && (
          <div className="mt-2 text-sm text-[#5C6670]">Updating status...</div>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="rounded-2xl border border-[#E4E8EC] bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#2E3A46]">Total Entries</h3>
          <p className="text-3xl font-bold text-[#1C7800]">
            {waitlistData.length}
          </p>
        </div>
        <div className="rounded-2xl border border-[#E4E8EC] bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#2E3A46]">This Month</h3>
          <p className="text-3xl font-bold text-[#1C7800]">
            {
              waitlistData.filter(
                (entry: WaitlistEntry) =>
                  new Date(entry.createdAt).getMonth() ===
                    new Date().getMonth() &&
                  new Date(entry.createdAt).getFullYear() ===
                    new Date().getFullYear()
              ).length
            }
          </p>
        </div>
        <div className="rounded-2xl border border-[#E4E8EC] bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#2E3A46]">With Phone</h3>
          <p className="text-3xl font-bold text-[#1C7800]">
            {waitlistData.filter((entry: WaitlistEntry) => entry.phone).length}
          </p>
        </div>
      </div>

      {/* Search and Actions */}
      <div className="mb-6 rounded-2xl border border-[#E4E8EC] bg-white p-6 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search by name, email, or phone..."
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
              className="w-full rounded-xl border border-[#E4E8EC] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#1C7800] focus:ring-2 focus:ring-[#1C7800]/20"
            />
          </div>
        </div>
      </div>

      {/* Message Display */}
      {message && (
        <div className="mb-4 rounded-lg border border-green-200 bg-green-50 p-4 text-green-700">
          {message}
        </div>
      )}

      {/* Waitlist Table */}
      <div className="overflow-hidden rounded-2xl border border-[#E4E8EC] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-[#F8FAFC]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#5C6670]">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#5C6670]">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#5C6670]">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#5C6670]">
                  Joined Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#5C6670]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {currentItems.map((entry: WaitlistEntry) => (
                <tr key={entry._id} className="border-t border-[#EEF1F4] hover:bg-[#F9FBFA]">
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm font-medium text-[#1C1C1C]">
                      {entry.name}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-[#1C1C1C]">{entry.email}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-[#1C1C1C]">
                      {entry.phone || "N/A"}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-[#1C1C1C]">
                      {formatDate(entry.createdAt)}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <button
                      onClick={() => handleDelete(entry._id)}
                      className="rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-red-600 transition hover:bg-red-100"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-[#EEF1F4] bg-white px-4 py-3 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center rounded-md border border-[#D6DEE6] bg-white px-4 py-2 text-sm font-medium text-[#324054] hover:bg-[#F8FAFC] disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="ml-3 relative inline-flex items-center rounded-md border border-[#D6DEE6] bg-white px-4 py-2 text-sm font-medium text-[#324054] hover:bg-[#F8FAFC] disabled:opacity-50"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-[#5C6670]">
                  Showing{" "}
                  <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
                  <span className="font-medium">
                    {Math.min(indexOfLastItem, searchResults.length)}
                  </span>{" "}
                  of <span className="font-medium">{searchResults.length}</span>{" "}
                  results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex -space-x-px rounded-md">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => paginate(page)}
                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                          currentPage === page
                            ? "z-10 border-[#1C7800] bg-[#1C7800] text-white"
                            : "border-[#D6DEE6] bg-white text-[#5C6670] hover:bg-[#F8FAFC]"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Empty State */}
      {waitlistData.length === 0 && (
        <div className="text-center py-12">
          <div className="text-lg text-[#5C6670]">No waitlist entries found</div>
          <div className="mt-2 text-sm text-[#98A2B3]">
            Waitlist entries will appear here once users start joining
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default WaitlistAdmin;
