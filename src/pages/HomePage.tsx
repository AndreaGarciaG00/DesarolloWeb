import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, BarChart3, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
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
  
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -5,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Bienvenido a FútbolApp</h1>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Horarios de Partidos */}
        <motion.div 
          className="card group"
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="icon-container bg-primary-500">
            <Calendar className="text-white w-16 h-16" />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Horarios de Partidos</h2>
            <p className="text-gray-600 mb-4">
              Ver próximos partidos con fechas, horarios y ubicaciones.
            </p>
            <Link 
              to="/schedules" 
              className="block w-full py-3 px-4 bg-primary-500 text-white text-center rounded-md hover:bg-primary-600 transition-colors"
            >
              Ver Partidos
            </Link>
          </div>
        </motion.div>
        
        {/* Reservas de Asientos */}
        <motion.div 
          className="card group"
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="icon-container bg-success-500">
            <Users className="text-white w-16 h-16" />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Reservas de Asientos</h2>
            <p className="text-gray-600 mb-4">
              Reserva tus asientos para los próximos partidos de fútbol.
            </p>
            <Link 
              to="/reservations" 
              className="block w-full py-3 px-4 bg-success-500 text-white text-center rounded-md hover:bg-success-600 transition-colors"
            >
              Hacer Reserva
            </Link>
          </div>
        </motion.div>
        
        {/* Resultados de Partidos */}
        <motion.div 
          className="card group"
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="icon-container bg-danger-500">
            <BarChart3 className="text-white w-16 h-16" />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Resultados de Partidos</h2>
            <p className="text-gray-600 mb-4">
              Consulta los últimos marcadores y resultados de partidos.
            </p>
            <Link 
              to="/results" 
              className="block w-full py-3 px-4 bg-danger-500 text-white text-center rounded-md hover:bg-danger-600 transition-colors"
            >
              Ver Resultados
            </Link>
          </div>
        </motion.div>
        
        {/* Información General */}
        <motion.div 
          className="card group"
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="icon-container bg-info-500">
            <Info className="text-white w-16 h-16" />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Información General</h2>
            <p className="text-gray-600 mb-4">
              Información sobre equipos, estadios y detalles de torneos.
            </p>
            <Link 
              to="/information" 
              className="block w-full py-3 px-4 bg-info-500 text-white text-center rounded-md hover:bg-info-600 transition-colors"
            >
              Ver Información
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;