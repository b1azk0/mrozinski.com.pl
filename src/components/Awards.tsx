import React, { useState } from 'react';
import { Award } from 'lucide-react';
import { awards } from '../data/awards';

export const Awards = () => {
  const [showAllAwards, setShowAllAwards] = useState(false);
  const visibleAwards = showAllAwards ? awards : awards.slice(0, 6);

  return (
    <section className="bg-white rounded-lg shadow-md p-8">
      <div className="flex items-center space-x-2 mb-6">
        <Award className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">Awards</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {visibleAwards.map((award, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-900 mb-1">{award.title}</h3>
            <p className="text-sm text-blue-600 mb-2">{award.institution} | {award.year}</p>
            <p className="text-gray-600">{award.description}</p>
          </div>
        ))}
      </div>

      {awards.length > 6 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAllAwards(!showAllAwards)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            {showAllAwards ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </section>
  );
};