import React, { useState, useMemo } from 'react';
import { Presentation } from 'lucide-react';
import { conferences } from '../data/conferences';

const renderCitation = (citation: string) => {
  const formattedCitation = citation.replace(/\*\*/g, '').replace(/Mrozinski, B\./g, '<strong>Mrozinski, B.</strong>').replace(/Mroziński, B\./g, '<strong>Mroziński, B.</strong>');

  return (
    <p className="text-gray-600">
      <span dangerouslySetInnerHTML={{ __html: formattedCitation }} />
    </p>
  );
};

export const Conferences = () => {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);

  const years = useMemo(() => 
    ['all', ...new Set(conferences.map(conf => conf.year))].sort().reverse(),
    []
  );

  const filteredConferences = useMemo(() => 
    conferences
      .filter(conf => selectedYear === 'all' || conf.year === selectedYear)
      .sort((a, b) => parseInt(b.year) - parseInt(a.year)),
    [selectedYear]
  );

  const displayedConferences = showAll 
    ? filteredConferences 
    : filteredConferences.slice(0, 3);

  return (
    <section id="conferences" className="bg-white rounded-lg shadow-md p-8">
      <div className="flex items-center space-x-2 mb-6">
        <Presentation className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">Conference Presentations</h2>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              selectedYear === year
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {year === 'all' ? 'All Years' : year}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {displayedConferences.map((conf, index) => (
          <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium text-gray-900">{conf.title}</h3>
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {conf.year}
              </span>
            </div>
            <p className="text-gray-600 mb-3">{conf.description}</p>
            {renderCitation(conf.citation)}
          </div>
        ))}
      </div>

      {filteredConferences.length > 3 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </section>
  );
};