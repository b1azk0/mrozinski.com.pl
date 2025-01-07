import React from 'react';
import { Building2, ExternalLink } from 'lucide-react';
import { companies } from '../data/companies';

export const Companies = () => (
  <section id="work" className="bg-white rounded-lg shadow-md p-8">
    <div className="flex items-center space-x-2 mb-6">
      <Building2 className="w-6 h-6 text-blue-600" />
      <h2 className="text-2xl font-bold text-gray-900">My Startups</h2>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {companies.map((company, index) => (
        <div key={index} className="flex flex-col h-full">
          <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
            <img
              src={company.logo}
              alt={company.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-bold text-white">{company.name}</h3>
                <p className="text-white/90">{company.role}</p>
              </div>
            </div>
          </div>
          <p className="text-gray-600 mb-4 flex-grow">{company.description}</p>
          <a
            href={company.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Visit Website
          </a>
        </div>
      ))}
    </div>
  </section>
);