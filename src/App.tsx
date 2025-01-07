import React from 'react';
import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { SummaryCV } from './components/SummaryCV';
import { CurriculumVitae } from './components/CurriculumVitae';
import { Education } from './components/Education';
import { Companies } from './components/Companies';
import { Publications } from './components/Publications';
import { BookChapters } from './components/BookChapters';
import { Conferences } from './components/Conferences';
import { Awards } from './components/Awards';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24">
        <main className="max-w-5xl mx-auto px-4 py-8 space-y-12">
          <Summary />
          <SummaryCV />
          <CurriculumVitae />
          <Education />
          <Companies />
          <Publications />
          <BookChapters />
          <Conferences />
          <Awards />
        </main>
        <footer className="bg-white border-t border-gray-200 mt-12">
          <div className="max-w-5xl mx-auto px-4 py-6">
            <p className="text-center text-gray-500">© {new Date().getFullYear()} Błażej Mroziński. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}