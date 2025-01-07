import React from 'react';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: "PhD in Social Cognition",
    institution: "University SWPS",
    grade: "Grade: A",
    description: "Research focused on the cognitive accessibility of content contained in the image of oneself and other social objects.",
    skills: ["Advanced Research Methodology", "Cognitive Psychology", "Self-Awareness Theory"]
  },
  {
    degree: "Postgraduate Diploma Statistics",
    institution: "The London School of Economics and Political Science (LSE)",
    description: "Multilevel modeling, latent class analysis, and structural equation modeling.",
    skills: ["Multilevel Modeling", "Latent Class Analysis", "Structural Equation Modeling"]
  },
  {
    degree: "Postgraduate Diploma in User Experience Design",
    institution: "University SWPS",
    grade: "Grade: A",
    description: "Specialized in usability research and cross-channel communication.",
    skills: ["UX Design", "Usability Research", "Cross-Channel Communication"]
  }
];

export const Education = () => (
  <section className="bg-white rounded-lg shadow-md p-8">
    <div className="flex items-center space-x-2 mb-6">
      <GraduationCap className="w-6 h-6 text-blue-600" />
      <h2 className="text-2xl font-bold text-gray-900">Education</h2>
    </div>

    <div className="space-y-6">
      {educationData.map((edu, index) => (
        <div key={index} className="border-l-2 border-blue-200 pl-4 py-4">
          <h3 className="text-lg font-medium text-gray-900">{edu.degree}</h3>
          <p className="text-blue-600">{edu.institution}</p>
          {edu.grade && <p className="text-sm text-gray-600 mt-1">{edu.grade}</p>}
          <p className="text-gray-600 mt-2">{edu.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {edu.skills.map((skill, skillIndex) => (
              <span 
                key={skillIndex}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);