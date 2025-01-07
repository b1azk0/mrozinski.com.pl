import React from 'react';
import { Github, Linkedin, BookOpen } from 'lucide-react';
import { CV } from '../data/cv';

export const Header = () => (
  <header className="bg-white/80 backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0 z-50">
    <div className="max-w-5xl mx-auto px-4 py-6">
      <nav className="grid grid-cols-3 items-center">
        <div className="flex items-center space-x-4">
          <img
            src={CV.photo}
            alt={CV.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
          />
          <h1 className="text-xl font-semibold text-gray-900 hidden sm:block">{CV.name}</h1>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a href={CV.social.github} className="text-gray-600 hover:text-gray-900">
            <Github className="w-5 h-5" />
          </a>
          <a href={CV.social.linkedin} className="text-gray-600 hover:text-gray-900">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={CV.social.orcid} className="text-gray-600 hover:text-gray-900">
            <BookOpen className="w-5 h-5" />
          </a>
        </div>

        <div className="flex justify-end space-x-4">
          <a href="#cv" className="text-gray-600 hover:text-gray-900">CV</a>
          <a href="#work" className="text-gray-600 hover:text-gray-900">Startups</a>
          <a href="#publications" className="text-gray-600 hover:text-gray-900">Publications</a>
        </div>
      </nav>
    </div>
  </header>
);