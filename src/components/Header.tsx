import React from 'react';
import { Github, Linkedin, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { CV } from '../data/cv';

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const getLink = (section: string) => {
    return isHome ? `#${section}` : `/${section}`;
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <nav className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img
                src={CV.photo}
                alt={CV.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-gray-100"
              />
            </Link>
            <h1 className="text-lg font-semibold text-gray-900 hidden sm:block">{CV.name}</h1>
          </div>
          
          <div className="hidden sm:flex justify-center space-x-6">
            <a href={CV.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Github className="w-5 h-5" />
            </a>
            <a href={CV.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={CV.social.orcid} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <BookOpen className="w-5 h-5" />
            </a>
          </div>

          <div className="flex justify-end space-x-4 sm:ml-auto">
            <Link to="/blog" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">Blog</Link>
            {isHome ? (
              <>
                <a href="#cv" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">CV</a>
                <a href="#work" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">Startups</a>
                <a href="#publications" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">Publications</a>
              </>
            ) : (
              <>
                <Link to="/#cv" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">CV</Link>
                <Link to="/#work" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">Startups</Link>
                <Link to="/#publications" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">Publications</Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};