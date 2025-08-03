import React from 'react';
import { SearchSection } from './SearchSection';
import { StatsSection } from './StatsSection';
import { AllResultsSection } from './AllResultsSection';
import { ExamSchedule } from './ExamSchedule';
import { Student } from '../types';

interface MainPageProps {
  onNavigate: (page: string) => void;
  stats: any;
  students: Student[];
}

const MainPage: React.FC<MainPageProps> = ({ onNavigate, stats, students }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <SearchSection students={students} onResult={() => {}} />
          <StatsSection stats={stats} />
          <AllResultsSection students={students} />
          <ExamSchedule />
        </div>
      </main>
    </div>
  );
};

export default MainPage;