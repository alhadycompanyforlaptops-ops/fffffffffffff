import React from 'react';
import SearchSection from './SearchSection';
import StatsSection from './StatsSection';
import AllResultsSection from './AllResultsSection';
import ExamSchedule from './ExamSchedule';

interface MainPageProps {
  onNavigate: (page: string) => void;
}

const MainPage: React.FC<MainPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <SearchSection />
          <StatsSection />
          <AllResultsSection />
          <ExamSchedule />
        </div>
      </main>
    </div>
  );
};

export default MainPage;