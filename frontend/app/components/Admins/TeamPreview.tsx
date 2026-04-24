"use client";

import { useEffect, useState } from "react";
import { apiClient, getApiErrorMessage } from "@/lib/apiClient";
import AdminTopNav from "./AdminTopNav";

interface TeamData {
  _id: string;
  name: string;
  email: string;
  photo: string;
  phone: string;
  role: string;
  isVerified: boolean;
}

const TeamPreview: React.FC = () => {
  const [teamData, setTeamData] = useState<TeamData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<TeamData[]>([]);
  const [message, setMessage] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(5);

  useEffect(() => {
    setIsLoading(true);
    const fetchTeamData = async (): Promise<void> => {
      try {
        const response = await apiClient.get("/team/team-details");
        // The team API returns the teams array directly (not wrapped in { success: true, data: [...] })
        if (Array.isArray(response.data)) {
          setTeamData(response.data);
        } else {
          setTeamData([]);
          setMessage("Invalid data format received");
        }
      } catch (error: unknown) {
        console.error("Error fetching team data:", error);
        setTeamData([]);
        setMessage(getApiErrorMessage(error));
      }
      setIsLoading(false);
    };
    fetchTeamData();
  }, []);

  useEffect(() => {
    if (!Array.isArray(teamData)) {
      setSearchResults([]);
      return;
    }
    const filteredTeamData = teamData.filter(
      (res) =>
        res.name?.toLowerCase().includes(search.toLowerCase()) ||
        res.email?.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredTeamData);
  }, [teamData, search]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-[#F7FAF8] p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-sfPro text-3xl font-bold text-[#083700]">Team List</h1>
        <p className="mt-1 font-poppins text-sm text-[#5C6670]">
          View all registered admin team members.
        </p>
        <div className="mt-5">
          <AdminTopNav activePath="/team-list" />
        </div>
      </div>

      <input
        type="text"
        placeholder="Search"
        className="mt-6 w-full rounded-xl border border-[#E4E8EC] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#1C7800] focus:ring-2 focus:ring-[#1C7800]/20"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {!isLoading && teamData.length === 0 ? (
        <p>No data found...</p>
      ) : (
        <>
          <div className="mt-4 overflow-hidden rounded-2xl border border-[#E4E8EC] bg-white">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-[#F8FAFC] text-left text-[#324054]">
                  <th className="px-4 py-3 font-semibold">S/N</th>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">Phone</th>
                </tr>
              </thead>

              <tbody>
                {currentItems.map((team: TeamData, index: number) => {
                  const { _id, name, email, phone } = team;

                  return (
                    <tr key={_id}>
                      <td className="border-t border-[#EEF1F4] px-4 py-3">{index + 1}</td>

                      <td className="border-t border-[#EEF1F4] px-4 py-3">{name}</td>
                      <td className="border-t border-[#EEF1F4] px-4 py-3">{email}</td>

                      <td className="border-t border-[#EEF1F4] px-4 py-3">{phone}</td>
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

export default TeamPreview;
