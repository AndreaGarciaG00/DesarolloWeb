// Tipos de datos comunes para la aplicación

export interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeCode: string;
  awayCode: string;
  league: string;
  date: string;
  time: string;
  venue: string;
  homeScore?: number;
  awayScore?: number;
  isLive?: boolean;
  minute?: number;
  homeStatus?: string;
  awayStatus?: string;
}

export interface SeatSelection {
  id: number;
  label: string;
}

export interface League {
  id: number;
  name: string;
  country: string;
  description: string;
  season: string;
  teams: number;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}