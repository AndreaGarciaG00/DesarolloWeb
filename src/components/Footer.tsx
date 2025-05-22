import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-1">FútbolApp</h3>
          <p className="text-gray-400 text-sm">Tu compañero definitivo de fútbol</p>
        </div>
        
        <div className="flex flex-col md:flex-row md:justify-between items-center border-t border-gray-800 pt-6">
          <p className="text-sm text-gray-400">© 2025 FútbolApp. Todos los derechos reservados.</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
              Términos
            </Link>
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacidad
            </Link>
            <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;