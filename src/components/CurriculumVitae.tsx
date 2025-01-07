import React, { useState } from 'react';
import { FileText, Briefcase } from 'lucide-react';

const Experience = [
  {
    title: "Co-Founder",
    company: "SEO Savages",
    period: "Oct 2024 – Present",
    location: "Remote, Texas, USA",
    description: [
      "Boutique programmatic SEO (pSEO) solutions tailored for alignment and long-term success.",
      "Specialize in SEO audits, on-page optimization, off-page strategies, and organic search growth.",
      "Leadership in startup operations and SEO strategy development."
    ],
    skills: ["Search Engine Optimization (SEO)", "SEO Audits", "Off-Page SEO", "Start-up Leadership", "On-Page Optimization", "Organic Search"]
  },
  {
    title: "Co-Founder & Chief Product Officer (CPO)",
    company: "Gyfted",
    period: "2021 – Present",
    location: "Palo Alto, California, USA | Hybrid",
    description: [
      "Hire hidden talent through culture fit and growth potential assessments.",
      "Simplified recruitment process: one interview for thousands of opportunities.",
      "Data-driven insights for smarter hiring and talent development.",
      "Development of predictive behavioral assessments for leadership, management, and team growth."
    ],
    skills: ["Quality Assurance", "Psychometrics", "Product Planning", "User Experience (UX)", "Product Management", "Computer Adaptive Testing", "Data Analysis"]
  },
  {
    title: "Head of Experimental Psychology Lab | Assistant Professor",
    company: "University SWPS",
    period: "2006 – Present",
    location: "Warsaw, Poland | Hybrid",
    description: [
      "Lead experimental research projects in psychology.",
      "Teach research methodology, statistical data analysis, and quantitative methods.",
      "Expertise in designing and analyzing qualitative and quantitative research studies."
    ],
    skills: ["Statistics", "University Teaching", "Statistical Data Analysis", "Research Methodologies", "Quantitative Research"]
  }
];

const AdditionalExperience = [
  {
    title: "Psychometrics Consultant",
    company: "esportsLABgg",
    period: "Jan 2023 – Jun 2023",
    location: "Remote, Poland",
    description: [
      "Designed and implemented personality and cognitive ability assessments for professional esports players.",
      "Developed Computer Adaptive Tests (CAT) and performed IRT modeling for precision analytics."
    ],
    skills: ["Data Analysis", "Psychometrics", "Computer Adaptive Testing", "IRT"]
  },
  {
    title: "Workshop Instructor",
    company: "move.mi",
    period: "Sep 2017 – May 2023",
    location: "Hybrid, Poland",
    description: [
      "Conducted workshops on data storytelling, visualization, and business presentation skills.",
      "Delivered tailored sessions for clients such as Bayer, L'Oréal, Strabag, PZU, DLA Piper, Nutricia, Kodak Minolta, Takeda, and T-Mobile.",
      "Focused on simplifying complex data for clear and actionable insights."
    ],
    skills: ["Data Presentation", "Visual Storytelling", "Data Analysis", "Psychology"]
  },
  {
    title: "Research & Statistical Analysis Consultant",
    company: "Good Sleeper",
    period: "May 2020 – May 2021",
    location: "Remote, Poland",
    description: [
      "Conducted validation research for an insomnia treatment protocol based on CBT-I methodology.",
      "Research outcomes contributed to developing a medical-grade application now commercially available.",
      "Delivered statistical analysis and insights for clinical research."
    ],
    skills: ["Data Analysis", "Clinical Research", "Statistical Data Analysis", "Research Design", "Medical Research"]
  },
  {
    title: "University Lecturer",
    company: "University of Warsaw – Faculty of Management",
    period: "Feb 2017 – Jul 2017",
    location: "On-site, Poland",
    description: [
      "Taught foundational quantitative methods and advanced statistical analysis courses.",
      "Designed coursework tailored for different academic levels, focusing on clarity and engagement."
    ],
    skills: ["University Lecturing", "Analytical Skills", "Statistical Data Analysis", "Quantitative Analytics"]
  }
];

export const CurriculumVitae = () => {
  const [showAllExperience, setShowAllExperience] = useState(false);

  const renderExperience = (exp: typeof Experience[0]) => (
    <div className="border-l-2 border-blue-200 pl-4 py-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-medium text-gray-900">{exp.title}</h4>
          <p className="text-blue-600">{exp.company}</p>
          <p className="text-sm text-gray-500">{exp.period} | {exp.location}</p>
        </div>
      </div>
      <ul className="mt-2 space-y-1 text-gray-600">
        {exp.description.map((item, index) => (
          <li key={index} className="list-disc ml-4">{item}</li>
        ))}
      </ul>
      <div className="mt-3 flex flex-wrap gap-2">
        {exp.skills.map((skill, index) => (
          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="cv" className="bg-white rounded-lg shadow-md p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <FileText className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Professional Experience</h2>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Current Positions</h3>
          </div>
          <div className="space-y-4">
            {Experience.map((exp, index) => (
              <div key={index}>{renderExperience(exp)}</div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Previous Experience</h3>
            </div>
            <button
              onClick={() => setShowAllExperience(!showAllExperience)}
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm"
            >
              {showAllExperience ? 'Show Less' : 'Show More'}
            </button>
          </div>
          <div className="space-y-4">
            {(showAllExperience ? AdditionalExperience : AdditionalExperience.slice(0, 2)).map((exp, index) => (
              <div key={index}>{renderExperience(exp)}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};