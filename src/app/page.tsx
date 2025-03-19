// pages/index.tsx
'use client';
import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import LawyerCard from './lawyercard'; // Using your provided path
import lawyersData from './lawyer.json'; // Using your provided path
import Card from './components/card'; // Using your provided path
import cardData from './data/card.json';

// Define the Lawyer interface
interface Lawyer {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  contact: {
    phone: string;
    email: string;
  };
  ratings: number;
  reviews: number;
  location: string;
  fee: string;
  bio: string;
  profile_picture: string;
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>(''); // Search state
  const [currentPage, setCurrentPage] = useState<number>(1); // Pagination state
  const cardsPerPage = 8; // Number of cards per page
  const cardGridRef = useRef<HTMLDivElement>(null); // Ref to the card grid

  // Filter lawyers based on search term (case-insensitive)
  const filteredLawyers = lawyersData.filter((lawyer: Lawyer) =>
    lawyer.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredLawyers.length / cardsPerPage);

  // Reset currentPage to 1 when searchTerm changes
  useEffect(() => {
    setCurrentPage(1); // Reset to page 1 whenever searchTerm updates
  }, [searchTerm]);

  // Get the lawyers for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentLawyers = filteredLawyers.slice(indexOfFirstCard, indexOfLastCard);

  // Function to scroll to the top of the card grid
  const scrollToTop = () => {
    if (cardGridRef.current) {
      cardGridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Pagination handlers with scroll
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-[var(--background-color)] py-10">
      <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Find a Lawyer</h1>
      <div className="relative w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Find lawyer with specialization"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[var(--accent-color)] text-[var(--foreground-color)] placeholder-gray-400 text-sm sm:text-base"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>
      <div
        ref={cardGridRef} // Attach ref to the grid container
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mt-10"
      >
        {currentLawyers.map((lawyer: Lawyer) => (
          <LawyerCard key={lawyer.id} lawyer={lawyer} />
        ))}
      </div>

      {/* Pagination Controls */}
      {filteredLawyers.length > 0 && (
        <div className="flex justify-center items-center mt-10 space-x-4 py-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg text-[var(--foreground-color)] ${
              currentPage === 1
                ? 'bg-gray-400 cursor-not-allowed text-gray-500'
                : 'bg-[var(--accent-color)] text-[var(--foreground-color)] hover:opacity-80 transition'
            } transition duration-200`}
          >
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-3 py-1 rounded-lg ${
                  currentPage === page
                    ? 'bg-[var(--accent-color)] text-[var(--foreground-color)] hover:opacity-80 transition'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } transition duration-200`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg text-[var(--foreground-color)] ${
              currentPage === totalPages
                ? 'bg-gray-400 cursor-not-allowed text-gray-500'
                : 'bg-[var(--accent-color)] text-[var(--foreground-color)] hover:opacity-80 transition'
            } transition duration-200`}
          >
            Next
          </button>
        </div>
      )}
      <main className="min-h-screen bg-gray-100 flex items-center justify-center ">
      <div className="flex flex-wrap gap-4">
        {cardData.cards.map((card) => (
          <Card
            key={card.id}
            header={card.header}
            content={card.content}
          />
        ))}
      </div>
    </main>
    </div>
  );
}