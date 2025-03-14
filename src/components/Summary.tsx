import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CV } from '../data/cv';

export const Summary = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-md p-8 md:p-12">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
          <img
            src={CV.photo}
            alt="Błażej Mroziński"
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center md:text-left">
              <strong>Blazej Mrozinski, PhD</strong>
            </h2>
            <p className="text-lg text-blue-600 font-medium text-center md:text-left">
              <strong>Entrepreneur | CPO at Gyfted | Psychometrics Expert | Workshop Leader</strong>
            </p>
          </div>
        </div>
        
        <p className="text-base leading-relaxed text-gray-700">
          I'm Blazej, <strong>Co-Founder and CPO at Gyfted</strong>, where I lead the development of <strong>cutting-edge psychometric technology</strong> that powers data-driven hiring and talent development. With a <strong>PhD in Psychology specializing in Social Cognition and Psychometrics</strong>, I've combined behavioral science, data analytics, and intuitive product design to build tools that help organizations identify hidden talent, optimize team dynamics, and make smarter hiring decisions.
        </p>

        <p className="text-base leading-relaxed text-gray-700">
          Beyond Gyfted, I'm an <strong>entrepreneur and founder</strong> of projects like <strong>SEO Savages, and FeelMyself</strong>. From <strong>boutique SEO strategies</strong> to <strong>e-commerce innovations</strong>, I excel at combining analytical insight with practical execution to deliver measurable results across diverse industries.
        </p>

        {showMore && (
          <>
            <p className="text-base leading-relaxed text-gray-700">
              In addition to my entrepreneurial ventures, I've designed and delivered <strong>executive workshops on data storytelling, UX design, and business presentations</strong> for clients including <strong>Bayer, L'Oréal, Strabag, PZU, DLA Piper, Nutricia, Kodak Minolta, Takeda, and T-Mobile</strong>. My workshops focus on transforming complex data into actionable insights through clear communication and compelling storytelling.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              I've also contributed to <strong>medical research</strong>, leading the <strong>validation study for Good Sleeper's medical-grade insomnia treatment protocol</strong>. This work resulted in a <strong>commercially available digital therapy tool</strong> backed by scientific evidence.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              In academia, I head an <strong>Experimental Psychology Lab at SWPS University</strong>, where I research <strong>decision-making, cognitive accessibility, and self-awareness theory</strong>. Over the years, I've authored <strong>peer-reviewed publications</strong>, contributed to <strong>academic textbooks</strong>, and taught <strong>statistics, research methodologies, and data analysis</strong>.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              When I'm not leading workshops, building tools, or analyzing data, you'll find me <strong>running ultramarathons, cycling long distances, or savoring a strong cup of coffee</strong>.
            </p>
          </>
        )}

        <button
          onClick={() => setShowMore(!showAll)}
          className="flex items-center justify-center w-full text-blue-600 hover:text-blue-800 transition-colors duration-200 mt-4"
        >
          {showMore ? (
            <>
              Show Less <ChevronUp className="ml-1 w-5 h-5" />
            </>
          ) : (
            <>
              Show More <ChevronDown className="ml-1 w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </section>
  );
};
