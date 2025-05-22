import React, { useState } from 'react';
import { Calendar, Clock, MapPin, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface SeatSelection {
  id: number;
  label: string;
}

const ReservationsPage: React.FC = () => {
  // Estado para la selección de asientos
  const [selectedSeats, setSelectedSeats] = useState<SeatSelection[]>([]);
  
  // Datos del partido
  const match = {
    homeTeam: "FC Barcelona",
    awayTeam: "Real Madrid",
    league: "La Liga",
    date: "25 Oct, 2024",
    time: "20:00",
    venue: "Camp Nou"
  };
  
  // Precios y cálculos
  const pricePerSeat = 45.00;
  const serviceFee = 10.00;
  const totalPrice = (selectedSeats.length * pricePerSeat) + serviceFee;
  
  // Estado para controlar los asientos disponibles/reservados
  const [seatStatus, setSeatStatus] = useState<{[key: number]: string}>({
    11: 'reserved',
    12: 'reserved',
    15: 'reserved',
    30: 'reserved',
    40: 'reserved',
    52: 'reserved',
  });
  
  const getSeatStatus = (seatId: number): string => {
    // Si está en los asientos seleccionados, está seleccionado
    if (selectedSeats.some(seat => seat.id === seatId)) {
      return 'selected';
    }
    // Si está en el estado de asientos, usa ese estado
    if (seatStatus[seatId]) {
      return seatStatus[seatId];
    }
    // Por defecto, disponible
    return 'available';
  };
  
  const getSeatClassName = (seatId: number): string => {
    const status = getSeatStatus(seatId);
    
    const baseClass = "w-8 h-8 text-xs flex items-center justify-center rounded-md font-medium";
    
    if (status === 'selected') {
      return `${baseClass} bg-primary-500 text-white`;
    } else if (status === 'reserved') {
      return `${baseClass} bg-gray-300 text-gray-500 cursor-not-allowed`;
    } else {
      return `${baseClass} bg-success-500 text-white hover:bg-success-600 cursor-pointer`;
    }
  };
  
  const toggleSeatSelection = (seatId: number) => {
    // No permitir seleccionar asientos reservados
    if (getSeatStatus(seatId) === 'reserved') {
      return;
    }
    
    // Verificar si el asiento ya está seleccionado
    const existingIndex = selectedSeats.findIndex(seat => seat.id === seatId);
    
    if (existingIndex >= 0) {
      // Quitar el asiento de la selección
      setSelectedSeats(prev => prev.filter(seat => seat.id !== seatId));
    } else {
      // Agregar asiento a la selección
      setSelectedSeats(prev => [...prev, { id: seatId, label: `Asiento #${seatId}` }]);
    }
  };
  
  const removeSeat = (seatId: number) => {
    setSelectedSeats(prev => prev.filter(seat => seat.id !== seatId));
  };
  
  // Renderizar filas de asientos
  const renderSeatRow = (start: number, end: number) => {
    const seats = [];
    for (let i = start; i <= end; i++) {
      seats.push(
        <button 
          key={i}
          className={getSeatClassName(i)}
          onClick={() => toggleSeatSelection(i)}
          disabled={getSeatStatus(i) === 'reserved'}
        >
          {i}
        </button>
      );
    }
    return seats;
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
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Reservar Asientos</h1>
      
      {/* Información del partido */}
      <motion.div 
        className="bg-white rounded-lg shadow-md p-4 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h2 className="text-xl font-bold">{match.homeTeam} vs {match.awayTeam}</h2>
            <p className="text-gray-600">{match.league}</p>
          </div>
          <div className="flex flex-col items-end mt-2 sm:mt-0">
            <div className="flex items-center text-gray-600 mb-1">
              <Calendar className="w-4 h-4 mr-2" /> {match.date}
            </div>
            <div className="flex items-center text-gray-600 mb-1">
              <Clock className="w-4 h-4 mr-2" /> {match.time}
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2" /> {match.venue}
            </div>
          </div>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Mapa de asientos del estadio */}
        <motion.div 
          className="lg:col-span-2 bg-white rounded-lg shadow-md p-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-xl font-bold mb-4">Mapa de Asientos del Estadio</h2>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-success-500 rounded-sm mr-2"></div>
              <span className="text-sm">Disponible</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-300 rounded-sm mr-2"></div>
              <span className="text-sm">Reservado</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-primary-500 rounded-sm mr-2"></div>
              <span className="text-sm">Seleccionado</span>
            </div>
          </div>
          
          {/* Campo */}
          <div className="relative mb-8">
            <div className="border-2 border-white bg-success-500 rounded-lg p-16 flex items-center justify-center mb-6">
              <span className="text-white font-bold">CAMPO</span>
            </div>
            
            {/* Asientos */}
            <div className="grid grid-cols-10 gap-1 mb-4 justify-center">
              {renderSeatRow(1, 10)}
            </div>
            
            <div className="grid grid-cols-10 gap-1 mb-4 justify-center">
              {renderSeatRow(11, 20)}
            </div>
            
            <div className="grid grid-cols-2 gap-1 mb-4">
              <div className="flex flex-col space-y-1">
                {renderSeatRow(21, 30)}
              </div>
              <div className="flex flex-col space-y-1 items-end">
                {renderSeatRow(31, 40)}
              </div>
            </div>
            
            <div className="grid grid-cols-10 gap-1 justify-center">
              {renderSeatRow(41, 60)}
            </div>
          </div>
        </motion.div>
        
        {/* Detalles de reserva */}
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-xl font-bold mb-4">Detalles de Reserva</h2>
          
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre Completo
              </label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono
              </label>
              <input 
                type="tel" 
                placeholder="+1 (123) 456-7890" 
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">Asientos Seleccionados</h3>
            
            {selectedSeats.length === 0 ? (
              <p className="text-gray-500 text-sm">No has seleccionado ningún asiento.</p>
            ) : (
              <div className="space-y-2">
                {selectedSeats.map(seat => (
                  <div key={seat.id} className="flex justify-between items-center bg-gray-50 p-2 rounded-md">
                    <span>{seat.label}</span>
                    <button 
                      onClick={() => removeSeat(seat.id)}
                      className="text-danger-500 hover:text-danger-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="border-t border-gray-200 pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Precio por asiento:</span>
              <span>${pricePerSeat.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Número de asientos:</span>
              <span>{selectedSeats.length}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Cargo por servicio:</span>
              <span>${serviceFee.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between font-bold border-t border-gray-200 pt-2">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          
          <button 
            className={`w-full mt-6 py-3 rounded-md text-white font-medium ${
              selectedSeats.length > 0 
                ? 'bg-primary-500 hover:bg-primary-600' 
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={selectedSeats.length === 0}
          >
            Completar Reserva
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ReservationsPage;