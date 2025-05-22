import React, { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

// Tipo de datos para los partidos
interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeCode: string;
  awayCode: string;
  league: string;
  date: string;
  time: string;
  venue: string;
}

const SchedulesPage: React.FC = () => {
  // Estado para los filtros
  const [leagueFilter, setLeagueFilter] = useState<string>("Todas las Ligas");
  const [dateFilter, setDateFilter] = useState<string>("Este Mes");
  
  // Datos de ejemplo para los partidos
  const upcomingMatches: Match[] = [
    {
      id: 1,
      homeTeam: "FC Barcelona",
      awayTeam: "Real Madrid",
      homeCode: "FC",
      awayCode: "Re",
      league: "La Liga",
      date: "25 Oct, 2024",
      time: "20:00",
      venue: "Camp Nou"
    },
    {
      id: 2,
      homeTeam: "Manchester United",
      awayTeam: "Liverpool",
      homeCode: "Ma",
      awayCode: "Li",
      league: "Premier League",
      date: "28 Oct, 2024",
      time: "17:30",
      venue: "Old Trafford"
    },
    {
      id: 3,
      homeTeam: "Bayern Munich",
      awayTeam: "Borussia Dortmund",
      homeCode: "Ba",
      awayCode: "Bo",
      league: "Bundesliga",
      date: "1 Nov, 2024",
      time: "19:45",
      venue: "Allianz Arena"
    },
    {
      id: 4,
      homeTeam: "PSG",
      awayTeam: "Marseille",
      homeCode: "PS",
      awayCode: "Ma",
      league: "Ligue 1",
      date: "5 Nov, 2024",
      time: "21:00",
      venue: "Parc des Princes"
    },
    {
      id: 5,
      homeTeam: "Juventus",
      awayTeam: "AC Milan",
      homeCode: "Ju",
      awayCode: "AC",
      league: "Serie A",
      date: "8 Nov, 2024",
      time: "20:45",
      venue: "Allianz Stadium"
    },
    {
      id: 6,
      homeTeam: "Arsenal",
      awayTeam: "Chelsea",
      homeCode: "Ar",
      awayCode: "Ch",
      league: "Premier League",
      date: "12 Nov, 2024",
      time: "16:30",
      venue: "Emirates Stadium"
    }
  ];
  
  // Opciones para los filtros
  const leagueOptions = ["Todas las Ligas", "La Liga", "Premier League", "Bundesliga", "Serie A", "Ligue 1"];
  const dateOptions = ["Esta Semana", "Este Mes", "Este Año"];
  
  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Próximos Partidos</h1>
      
      {/* Filtros */}
      <div className="flex flex-col sm:flex-row justify-end gap-4 mb-6">
        <select 
          className="rounded-md border-gray-300 shadow-sm bg-white p-2"
          value={leagueFilter}
          onChange={(e) => setLeagueFilter(e.target.value)}
        >
          {leagueOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        
        <select 
          className="rounded-md border-gray-300 shadow-sm bg-white p-2"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        >
          {dateOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      
      {/* Lista de partidos */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {upcomingMatches.map((match) => (
          <motion.div 
            key={match.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={itemVariants}
          >
            <div className="p-4 border-b border-gray-100">
              <div className="text-sm text-primary-500 font-medium mb-1">{match.league}</div>
              <div className="text-right text-gray-500 text-sm">{match.date}</div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                {/* Equipo Local */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-sm text-gray-600 mb-2">
                    {match.homeCode}
                  </div>
                  <div className="text-center font-medium">{match.homeTeam}</div>
                </div>
                
                <div className="text-xl font-bold text-gray-800">VS</div>
                
                {/* Equipo Visitante */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-sm text-gray-600 mb-2">
                    {match.awayCode}
                  </div>
                  <div className="text-center font-medium">{match.awayTeam}</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{match.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{match.venue}</span>
                </div>
              </div>
              
              <button className="w-full bg-primary-500 text-white py-2 rounded-md hover:bg-primary-600 transition-colors">
                Reservar Asientos
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SchedulesPage;