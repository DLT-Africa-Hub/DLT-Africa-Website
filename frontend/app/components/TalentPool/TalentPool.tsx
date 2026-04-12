"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import NewForm from "./TalentPoolForm";
import SkillFilter from "./SkillFilter";
import TalentGrid from "./TalentGrid";
import Pagination from "./Pagination";
import {
  API_CONFIG,
  PAGINATION_CONFIG,
  ACCESSIBILITY_CONFIG,
  ERROR_MESSAGES,
} from "./constants";
import { useApiWithRetry } from "./useApiWithRetry";

interface Talent {
  _id: string;
  fullName: string;
  role: string;
  description: string;
  skills: string[];
  profileImage: string;
  bgImage: string;
  uploadResume: string;
  gitHubLink: string;
}

const TalentPool: React.FC = () => {
  const [availableSkills, setAvailableSkills] = useState<string[]>([]);
  const [allTalents, setAllTalents] = useState<Talent[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["Frontend"]);
  const [currentPage, setCurrentPage] = useState<number>(
    PAGINATION_CONFIG.DEFAULT_PAGE,
  );
  const [itemsPerPage] = useState<number>(PAGINATION_CONFIG.ITEMS_PER_PAGE);
  const [selectedTalent, setSelectedTalent] = useState<Talent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const skillsApi = useApiWithRetry<{ [key: string]: any }>();
  const talentsApi = useApiWithRetry<{ data: Talent[]; total: number }>();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchSkills = async () => {
      const response = await axios.get(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SKILLS}`,
        {
          signal: abortController.signal,
        },
      );
      return response.data;
    };

    skillsApi.executeWithRetry(
      fetchSkills,
      (data) => {
        const skillCategories = Object.keys(data).filter(
          (key) => key !== "_id" && key !== "__v",
        );
        setAvailableSkills(skillCategories);
      },
      (error) => {
        console.error("Error fetching skills:", error);
        toast.error(`${ERROR_MESSAGES.FETCH_SKILLS}: ${error}`);
      },
    );

    return () => {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchTalents = async () => {
      const response = await axios.get(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.TALENTS}`,
        {
          signal: abortController.signal,
        },
      );
      return response.data;
    };

    talentsApi.executeWithRetry(
      fetchTalents,
      (data) => {
        const talentsArray = data.data || data;
        setAllTalents(talentsArray);
      },
      (error) => {
        console.error("Error fetching talents:", error);
        toast.error(`${ERROR_MESSAGES.FETCH_TALENTS}: ${error}`);
      },
    );

    return () => {
      abortController.abort();
    };
  }, []); // Only fetch once on component mount

  // Reset to first page when skills change
  useEffect(() => {
    setCurrentPage(PAGINATION_CONFIG.DEFAULT_PAGE);
  }, [selectedSkills]);

  // Filter and paginate talents on the client side
  const filteredTalents = allTalents.filter(
    (talent) =>
      talent.skills &&
      Array.isArray(talent.skills) &&
      selectedSkills.every((skill) => talent.skills.includes(skill)),
  );

  const paginatedTalents = filteredTalents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleSkillChange = (skill: string): void => {
    setSelectedSkills((prevSkills) => {
      if (prevSkills.includes(skill)) {
        return prevSkills.filter((s) => s !== skill);
      } else {
        return [...prevSkills, skill];
      }
    });
  };

  const handlePageChange = (direction: "next" | "prev"): void => {
    if (talentsApi.loading) return;

    const totalPages = Math.ceil(filteredTalents.length / itemsPerPage);
    const nextPage =
      direction === "next"
        ? Math.min(currentPage + 1, totalPages)
        : Math.max(currentPage - 1, PAGINATION_CONFIG.DEFAULT_PAGE);

    setCurrentPage(nextPage);
  };

  const handleCardClick = (talent: Talent): void => {
    setSelectedTalent((prevTalent) => (prevTalent === talent ? null : talent));
  };

  const handleContactClick = (talent: Talent): void => {
    setSelectedTalent((prevTalent) => (prevTalent === talent ? null : talent));

    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  // Removed renderButtons and renderTalents functions - now handled by separate components

  return (
    <section
      className="min-h-[60vh] bg-[#F5F6F6] pb-16 pt-20 sm:pb-20 sm:pt-24"
      aria-label={ACCESSIBILITY_CONFIG.ARIA_LABELS.TALENT_POOL}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        <header className="mb-10 max-w-2xl text-center sm:mb-12">
          <h1 className="font-sfPro text-3xl font-bold tracking-tight text-[#1C1C1C] sm:text-4xl">
            DLT Africa Talent Pool
          </h1>
          <p className="mt-3 font-poppins text-sm leading-relaxed text-[#1C1C1C]/65 sm:text-base">
            Browse graduates and professionals by skill. Select one or more
            filters to narrow the list.
          </p>
        </header>

        <SkillFilter
          availableSkills={availableSkills}
          selectedSkills={selectedSkills}
          onSkillChange={handleSkillChange}
          loading={skillsApi.loading}
        />

        <TalentGrid
          talents={paginatedTalents}
          selectedTalent={selectedTalent}
          loading={talentsApi.loading}
          itemsPerPage={itemsPerPage}
          onCardClick={handleCardClick}
          onContactClick={handleContactClick}
        />

        {filteredTalents.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalItems={filteredTalents.length}
            itemsPerPage={itemsPerPage}
            loading={talentsApi.loading}
            onPageChange={handlePageChange}
          />
        )}
      </div>

      {isModalOpen && selectedTalent && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <NewForm
            selectedTalent={selectedTalent}
            handleCloseModal={handleCloseModal}
          />
        </div>
      )}
    </section>
  );
};

export default TalentPool;
