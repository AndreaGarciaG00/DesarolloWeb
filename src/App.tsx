import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SchedulesPage from './pages/SchedulesPage';
import ReservationsPage from './pages/ReservationsPage';
import ResultsPage from './pages/ResultsPage';
import InformationPage from './pages/InformationPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/schedules" element={<SchedulesPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/information" element={<InformationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;