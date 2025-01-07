import React, { useState, useMemo } from 'react';
import { ExternalLink, Download } from 'lucide-react';
import { publications } from '../data/publications';

const renderCitation = (citation: string) => {
  // Split the citation into parts: before DOI and DOI
  const [citationText, doi] = citation.split('https://doi.org/');
  
  // Replace the markdown-style bold markers with HTML
  const formattedCitation = citationText.replace(/\*\*/g, '').replace(/Mrozinski, B\./g, '<strong>Mrozinski, B.</strong>').replace(/Mroziński, B\./g, '<strong>Mroziński, B.</strong>');

  return (
    <p className="text-gray-600">
      <span dangerouslySetInnerHTML={{ __html: formattedCitation }} />
      <a 
        href={`https://doi.org/${doi}`}
        className="text-blue-600 hover:text-blue-800"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://doi.org/{doi}
      </a>
    </p>
  );
};

export const Publications = () => {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);

  // Get unique years for filter chips
  const years = useMemo(() => 
    ['all', ...new Set(publications.map(pub => pub.year))].sort().reverse(),
    []
  );

  // Filter publications by year
  const filteredPublications = useMemo(() => 
    publications
      .filter(pub => selectedYear === 'all' || pub.year === selectedYear)
      .sort((a, b) => parseInt(b.year) - parseInt(a.year)),
    [selectedYear]
  );

  // Display either all filtered publications or just the first 5
  const displayedPublications = showAll 
    ? filteredPublications 
    : filteredPublications.slice(0, 5);

  return (
    <section id="publications" className="bg-white rounded-lg shadow-md p-8">
      <div className="flex items-center space-x-2 mb-6">
        <ExternalLink className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">Publications</h2>
      </div>

      {/* Filter chips */}
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
        {displayedPublications.map((pub, index) => (
          <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium text-gray-900">{pub.title}</h3>
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {pub.year}
              </span>
            </div>
            <p className="text-gray-600 mb-3">{pub.description}</p>
            {renderCitation(pub.citation)}
            <a
              href={pub.downloadUrl}
              className="inline-flex items-center mt-3 text-blue-600 hover:text-blue-800"
            >
              <Download className="w-4 h-4 mr-1" />
              Download PDF
            </a>
          </div>
        ))}
      </div>

      {filteredPublications.length > 5 && (
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