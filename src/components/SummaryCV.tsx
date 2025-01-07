import React from 'react';
import { FileText, Briefcase, Code, Languages, Download } from 'lucide-react';

const skills = [
  "Research Methodology",
  "Data Analysis",
  "Psychometrics",
  "Product Management",
  "UX Research",
  "Statistical Analysis",
  "SEO Strategy",
  "Team Leadership"
];

const techStack = [
  "Python",
  "R",
  "SPSS",
  "SQL",
  "Git",
  "React"
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Polish", level: "Native" },
  { name: "Italian", level: "Intermediate" }
];

export const SummaryCV = () => (
  <section className="bg-white rounded-lg shadow-md p-8">
    <div className="flex items-center space-x-2 mb-6">
      <FileText className="w-6 h-6 text-blue-600" />
      <h2 className="text-2xl font-bold text-gray-900">Summary CV</h2>
      <a
        href="/cv.pdf"
        download
        className="ml-auto inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 transition-colors duration-200"
      >
        <Download className="w-4 h-4 mr-1.5" />
        Download Full CV
      </a>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      {/* Skills */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Briefcase className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Key Skills</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Code className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Tech Stack</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Languages className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Languages</h3>
        </div>
        <div className="space-y-2">
          {languages.map((lang, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-700">{lang.name}</span>
              <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);