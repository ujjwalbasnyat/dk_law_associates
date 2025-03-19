// components/LawyerCard.tsx
import React from 'react';
import Image from 'next/image';

// Define the Lawyer interface for TypeScript
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

interface LawyerCardProps {
  lawyer: Lawyer;
}

const LawyerCard: React.FC<LawyerCardProps> = ({ lawyer }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white m-4 transform transition duration-300 hover:scale-105">
      <div className="relative w-full h-48">
        <Image
          src={lawyer.profile_picture}
          alt={`${lawyer.name}'s profile`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-[var(--foreground-color)]">{lawyer.name}</h2>
        <p className="text-sm text-gray-600">{lawyer.specialization}</p>
        <p className="text-sm text-gray-500">Experience: {lawyer.experience}</p>
        <div className="mt-2">
          <p className="text-sm text-gray-700">Location: {lawyer.location}</p>
          <p className="text-sm text-gray-700">Fee: {lawyer.fee}</p>
          <p className="text-sm text-gray-700">
            Rating: {lawyer.ratings} ({lawyer.reviews} reviews)
          </p>
        </div>
        <p className="mt-3 text-gray-600 text-sm">{lawyer.bio}</p>
        <div className="mt-4">
          <p className="text-sm text-gray-800">
            <span className="font-semibold">Phone:</span> {lawyer.contact.phone}
          </p>
          <p className="text-sm text-gray-800">
            <span className="font-semibold">Email:</span> {lawyer.contact.email}
          </p>
        </div>
        <button className="bg-[var(--accent-color)] text-[var(--foreground-color)] mt-4 w-full  py-2 px-4 rounded  transition duration-200">
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default LawyerCard;