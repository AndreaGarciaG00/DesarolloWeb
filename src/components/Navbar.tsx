import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'border-b-2 border-primary-500 text-primary-500' : '';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-primary-500 text-2xl font-bold">
          FútbolApp
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/schedules" 
            className={`py-2 text-gray-700 hover:text-primary-500 transition-colors ${isActive('/schedules')}`}
          >
            Partidos
          </Link>
          <Link 
            to="/reservations" 
            className={`py-2 text-gray-700 hover:text-primary-500 transition-colors ${isActive('/reservations')}`}
          >
            Reservas
          </Link>
          <Link 
            to="/results" 
            className={`py-2 text-gray-700 hover:text-primary-500 transition-colors ${isActive('/results')}`}
          >
            Resultados
          </Link>
          <Link 
            to="/information" 
            className={`py-2 text-gray-700 hover:text-primary-500 transition-colors ${isActive('/information')}`}
          >
            Información
          </Link>
        </nav>
        
        <button 
          className="md:hidden text-gray-700 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col px-4 py-2 space-y-2">
              <Link 
                to="/schedules" 
                className={`py-2 text-gray-700 hover:text-primary-500 transition-colors ${isActive('/schedules')}`}
                onClick={toggleMenu}
              >
                Partidos
              </Link>
              <Link 
                to="/reservations" 
                className={`py-2 text-gray-700 hover:text-primary-500 transition-colors ${isActive('/reservations')}`}
                onClick={toggleMenu}
              >
                Reservas
              </Link>
              <Link 
                to="/results" 
                className={`py-2 text-gray-700 hover:text-primary-500 transition-colors ${isActive('/results')}`}
                onClick={toggleMenu}
              >
                Resultados
              </Link>
              <Link 
                to="/information" 
                className={`py-2 text-gray-700 hover:text-primary-500 transition-colors ${isActive('/information')}`}
                onClick={toggleMenu}
              >
                Información
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="h-px bg-gray-200"></div>
    </header>
  );
};

export default Navbar;