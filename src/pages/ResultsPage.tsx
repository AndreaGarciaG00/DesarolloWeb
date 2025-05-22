import React, { useState } from 'react';
import { Eye, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

interface MatchResult {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeCode: string;
  awayCode: string;
  homeScore: number;
  awayScore: number;
  homeStatus: string;
  awayStatus: string;
  league: string;
  date: string;
  time?: string;
  isLive: boolean;
  minute?: number;
}

const ResultsPage: React.FC = () => {
  // Estado para los filtros
  const [leagueFilter, setLeagueFilter] = useState<string>("Todas las Ligas");
  const [dateFilter, setDateFilter] = useState<string>("Este Mes");
  
  // Datos de ejemplo para partidos en vivo
  const liveMatches: MatchResult[] = [
    {
      id: 1,
      homeTeam: "Atletico Madrid",
      awayTeam: "Sevilla",
      homeCode: "At",
      awayCode: "Se",
      homeScore: 1,
      awayScore: 0,
      homeStatus: "",
      awayStatus: "",
      league: "La Liga",
      date: "Hoy",
      isLive: true,
      minute: 67
    },
    {
      id: 2,
      homeTeam: "Inter Milan",
      awayTeam: "Napoli",
      homeCode: "In",
      awayCode: "Na",
      homeScore: 2,
      awayScore: 2,
      homeStatus: "",
      awayStatus: "",
      league: "Serie A",
      date: "Hoy",
      isLive: true,
      minute: 82
    }
  ];
  
  // Datos de ejemplo para resultados recientes
  const recentResults: MatchResult[] = [
    {
      id: 3,
      homeTeam: "FC Barcelona",
      awayTeam: "Real Madrid",
      homeCode: "FC",
      awayCode: "Re",
      homeScore: 3,
      awayScore: 2,
      homeStatus: "Winner",
      awayStatus: "Lost",
      league: "La Liga",
      date: "15 Oct, 2024",
      isLive: false
    },
    {
      id: 4,
      homeTeam: "Manchester United",
      awayTeam: "Liverpool",
      homeCode: "Ma",
      awayCode: "Li",
      homeScore: 1,
      awayScore: 3,
      homeStatus: "Lost",
      awayStatus: "Winner",
      league: "Premier League",
      date: "12 Oct, 2024",
      isLive: false
    },
    {
      id: 5,
      homeTeam: "Bayern Munich",
      awayTeam: "Borussia Dortmund",
      homeCode: "Ba",
      awayCode: "Bo",
      homeScore: 2,
      awayScore: 2,
      homeStatus: "Draw",
      awayStatus: "Draw",
      league: "Bundesliga",
      date: "10 Oct, 2024",
      isLive: false
    },
    {
      id: 6,
      homeTeam: "PSG",
      awayTeam: "Marseille",
      homeCode: "PS",
      awayCode: "Ma",
      homeScore: 2,
      awayScore: 0,
      homeStatus: "Winner",
      awayStatus: "Lost",
      league: "Ligue 1",
      date: "8 Oct, 2024",
      isLive: false
    },
    {
      id: 7,
      homeTeam: "Juventus",
      awayTeam: "AC Milan",
      homeCode: "Ju",
      awayCode: "AC",
      homeScore: 1,
      awayScore: 1,
      homeStatus: "Draw",
      awayStatus: "Draw",
      league: "Serie A",
      date: "5 Oct, 2024",
      isLive: false
    },
    {
      id: 8,
      homeTeam: "Arsenal",
      awayTeam: "Chelsea",
      homeCode: "Ar",
      awayCode: "Ch",
      homeScore: 2,
      awayScore: 1,
      homeStatus: "Winner",
      awayStatus: "Lost",
      league: "Premier League",
      date: "1 Oct, 2024",
      isLive: false
    }
  ];
  
  // Opciones para los filtros
  const leagueOptions = ["Todas las Ligas", "La Liga", "Premier League", "Bundesliga", "Serie A", "Ligue 1"];
  const dateOptions = ["Esta Semana", "Este Mes", "Este Año"];
  
  // Estilos para el estado del equipo
  const getStatusStyles = (status: string) => {
    if (status === "Winner") {
      return "text-success-500";
    } else if (status === "Lost") {
      return "text-danger-500";
    } else {
      return "text-gray-500";
    }
  };
  
  // Animaciones
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
  
  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Resultados de Partidos</h1>
      
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
      
      {/* Partidos en vivo */}
      {liveMatches.length > 0 && (
        <>
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-danger-500 rounded-full mr-2 animate-pulse"></div>
            <h2 className="text-xl font-bold">Partidos en Vivo</h2>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {liveMatches.map((match) => (
              <motion.div 
                key={match.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-danger-500"
                variants={itemVariants}
              >
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                  <div className="text-sm text-gray-600">{match.league}</div>
                  <motion.div 
                    className="flex items-center text-danger-500 text-sm font-medium"
                    variants={pulseVariants}
                    animate="pulse"
                  >
                    <span className="mr-1">EN VIVO:</span> {match.minute}'
                  </motion.div>
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
                    
                    {/* Marcador */}
                    <div className="text-xl font-bold text-gray-800">
                      {match.homeScore} - {match.awayScore}
                    </div>
                    
                    {/* Equipo Visitante */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-sm text-gray-600 mb-2">
                        {match.awayCode}
                      </div>
                      <div className="text-center font-medium">{match.awayTeam}</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-danger-500 text-white py-2 rounded-md hover:bg-danger-600 transition-colors flex items-center justify-center">
                    <Eye className="w-4 h-4 mr-2" /> Ver en Vivo
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
      
      {/* Resultados recientes */}
      <h2 className="text-xl font-bold mb-4">Resultados Recientes</h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {recentResults.map((match) => (
          <motion.div 
            key={match.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={itemVariants}
          >
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <div className="text-sm text-primary-500">{match.league}</div>
              <div className="text-sm text-gray-500">{match.date}</div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                {/* Equipo Local */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-sm text-gray-600 mb-2">
                    {match.homeCode}
                  </div>
                  <div className="text-center font-medium">{match.homeTeam}</div>
                  <div className={`text-xs mt-1 ${getStatusStyles(match.homeStatus)}`}>
                    {match.homeStatus === "Winner" ? "Ganador" : 
                     match.homeStatus === "Lost" ? "Perdió" : "Empate"}
                  </div>
                </div>
                
                {/* Marcador */}
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-800 mb-1">
                    {match.homeScore} - {match.awayScore}
                  </div>
                  <div className="text-xs text-gray-500">Tiempo Completo</div>
                </div>
                
                {/* Equipo Visitante */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-sm text-gray-600 mb-2">
                    {match.awayCode}
                  </div>
                  <div className="text-center font-medium">{match.awayTeam}</div>
                  <div className={`text-xs mt-1 ${getStatusStyles(match.awayStatus)}`}>
                    {match.awayStatus === "Winner" ? "Ganador" : 
                     match.awayStatus === "Lost" ? "Perdió" : "Empate"}
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center">
                  <BarChart className="w-4 h-4 mr-2" /> Estadísticas
                </button>
                <button className="flex-1 bg-primary-100 text-primary-700 py-2 rounded-md hover:bg-primary-200 transition-colors flex items-center justify-center">
                  <Eye className="w-4 h-4 mr-2" /> Resumen
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="flex justify-center mt-8">
        <button className="bg-primary-500 text-white py-2 px-6 rounded-md hover:bg-primary-600 transition-colors flex items-center">
          Cargar Más Resultados
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;