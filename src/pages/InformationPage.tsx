import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface League {
  id: number;
  name: string;
  country: string;
  description: string;
  season: string;
  teams: number;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}

const InformationPage: React.FC = () => {
  // Estado para la pestaña activa
  const [activeTab, setActiveTab] = useState<string>("leagues");
  
  // Estado para las preguntas frecuentes
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: 1,
      question: "¿Cómo puedo comprar entradas para los partidos?",
      answer: "Las entradas se pueden comprar a través de nuestra aplicación navegando a la sección Partidos, seleccionando el partido deseado y haciendo clic en \"Reservar Asientos\". También puedes comprar entradas en la taquilla del estadio o a través de vendedores autorizados.",
      isOpen: false
    },
    {
      id: 2,
      question: "¿Cuál es la política de reembolso para partidos cancelados?",
      answer: "Si un partido es cancelado o pospuesto, las entradas siguen siendo válidas para la fecha reprogramada. Si no puedes asistir a la nueva fecha, puedes solicitar un reembolso dentro de los 14 días posteriores al anuncio de la nueva fecha. Los reembolsos se procesan dentro de 7-10 días hábiles.",
      isOpen: false
    },
    {
      id: 3,
      question: "¿Hay restricciones de edad para asistir a los partidos?",
      answer: "Los niños menores de 14 años deben estar acompañados por un adulto. Algunas secciones del estadio pueden tener restricciones específicas de edad. Los niños menores de 3 años pueden entrar gratis pero deben sentarse en el regazo de un padre y no obtener un asiento separado.",
      isOpen: false
    },
    {
      id: 4,
      question: "¿Qué artículos están prohibidos en el estadio?",
      answer: "Los artículos prohibidos incluyen: armas, fuegos artificiales, alcohol, botellas de vidrio, latas, paraguas, cámaras profesionales con lentes desmontables, drones y cualquier objeto que pueda ser utilizado como proyectil. Las bolsas grandes y mochilas también están prohibidas.",
      isOpen: false
    },
    {
      id: 5,
      question: "¿Hay estacionamiento disponible en el estadio?",
      answer: "Sí, hay estacionamiento limitado disponible en la mayoría de los estadios. Recomendamos reservar un lugar de estacionamiento a través de nuestra aplicación o llegar temprano, ya que los espacios se llenan rápidamente. El transporte público suele ser la opción más conveniente para los días de partido.",
      isOpen: false
    }
  ]);
  
  // Datos de ejemplo para ligas
  const leagues: League[] = [
    {
      id: 1,
      name: "La Liga",
      country: "España",
      description: "La máxima división de fútbol profesional del sistema de ligas de fútbol español, disputada por 20 equipos.",
      season: "Agosto - Mayo",
      teams: 20
    },
    {
      id: 2,
      name: "Premier League",
      country: "Inglaterra",
      description: "El nivel más alto del sistema de ligas de fútbol inglés, disputado por 20 clubes.",
      season: "Agosto - Mayo",
      teams: 20
    },
    {
      id: 3,
      name: "Champions League",
      country: "Europa",
      description: "Competición anual de fútbol de clubes organizada por la UEFA para los mejores clubes europeos.",
      season: "Septiembre - Mayo",
      teams: 32
    }
  ];
  
  // Función para alternar el estado de apertura de las preguntas frecuentes
  const toggleFaq = (id: number) => {
    setFaqs(faqs.map(faq => 
      faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
    ));
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Información General</h1>
      
      {/* Pestañas de navegación */}
      <div className="border-b border-gray-200 mb-8">
        <div className="flex flex-wrap -mb-px">
          <button
            className={`mr-4 py-2 px-1 text-sm font-medium border-b-2 ${
              activeTab === 'leagues'
                ? 'border-primary-500 text-primary-500'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('leagues')}
          >
            Ligas y Torneos
          </button>
          <button
            className={`mr-4 py-2 px-1 text-sm font-medium border-b-2 ${
              activeTab === 'teams'
                ? 'border-primary-500 text-primary-500'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('teams')}
          >
            Equipos
          </button>
          <button
            className={`mr-4 py-2 px-1 text-sm font-medium border-b-2 ${
              activeTab === 'stadiums'
                ? 'border-primary-500 text-primary-500'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('stadiums')}
          >
            Estadios
          </button>
          <button
            className={`py-2 px-1 text-sm font-medium border-b-2 ${
              activeTab === 'faqs'
                ? 'border-primary-500 text-primary-500'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('faqs')}
          >
            Preguntas Frecuentes
          </button>
        </div>
      </div>
      
      {/* Contenido de las pestañas */}
      {activeTab === 'leagues' && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Ligas destacadas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {leagues.map((league) => (
              <motion.div 
                key={league.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden"
                variants={itemVariants}
              >
                <div className={`
                  h-24 flex items-center justify-center text-white font-bold text-xl
                  ${league.id === 1 ? 'bg-primary-500' : 
                    league.id === 2 ? 'bg-danger-500' : 'bg-info-500'}
                `}>
                  {league.name}
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-2">{league.id === 1 ? 'Primera División Española' : 
                                                 league.id === 2 ? 'Premier League Inglesa' : 'UEFA Champions League'}</h3>
                  <p className="text-sm text-gray-600 mb-4">{league.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">🗓️</span>
                      <span>Temporada: {league.season}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">👥</span>
                      <span>Equipos: {league.teams}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 py-2 text-center bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors">
                    Ver Detalles de {league.name}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Reglas del torneo */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Reglas y Reglamentos del Torneo</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">Duración del Partido</h3>
                <p className="text-gray-600 text-sm">
                  Los partidos estándar consisten en dos tiempos de 45 minutos con un descanso de 15 minutos en el medio tiempo. El árbitro puede añadir tiempo adicional (tiempo de descuento) al final de cada mitad para compensar el tiempo perdido debido a sustituciones, lesiones y otras paradas.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Sistema de Puntos</h3>
                <p className="text-gray-600 text-sm mb-2">
                  En competiciones de liga, los equipos suelen recibir:
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  <li>3 puntos por una victoria</li>
                  <li>1 punto por un empate</li>
                  <li>0 puntos por una derrota</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Ascenso y Descenso</h3>
                <p className="text-gray-600 text-sm">
                  Al final de cada temporada, los equipos en la parte inferior de la tabla de la liga son relegados a la división inferior, mientras que los mejores equipos de las divisiones inferiores son promovidos para reemplazarlos. El número específico de equipos promovidos/relegados varía según la liga.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Formatos de Torneo</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Las competiciones pueden usar diferentes formatos:
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  <li>Formato de Liga: Cada equipo juega contra todos los demás equipos un número determinado de veces.</li>
                  <li>Formato de Eliminación: Los equipos juegan partidos de eliminación, con los perdedores saliendo de la competición.</li>
                  <li>Fase de Grupos + Eliminación: Los equipos primero compiten en grupos, con los mejores equipos avanzando a rondas de eliminación.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      
      {activeTab === 'faqs' && (
        <motion.div
          className="bg-white rounded-lg shadow-md p-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-xl font-bold mb-6">Preguntas Frecuentes</h2>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <motion.div 
                key={faq.id} 
                className="border border-gray-200 rounded-lg overflow-hidden"
                variants={itemVariants}
              >
                <button
                  className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {faq.isOpen ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {faq.isOpen && (
                  <motion.div 
                    className="p-4 bg-gray-50 border-t border-gray-200"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <button className="bg-primary-500 text-white py-2 px-6 rounded-md hover:bg-primary-600 transition-colors">
              Ver Mas Preguntas
            </button>
          </div>
        </motion.div>
      )}
      
      {/* Aquí se implementarían los demás contenidos de pestañas (equipos, estadios) */}
      {activeTab === 'teams' && (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-gray-600">Información sobre equipos próximamente disponible.</p>
        </div>
      )}
      
      {activeTab === 'stadiums' && (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-gray-600">Información sobre estadios próximamente disponible.</p>
        </div>
      )}
    </div>
  );
};

export default InformationPage;