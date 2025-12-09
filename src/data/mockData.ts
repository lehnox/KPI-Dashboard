import { KPI, ChartData, TimeSeriesData } from '../types'

export const kpiData: KPI[] = [
  {
    id: '1',
    title: 'Receita Total',
    value: 'R$ 245.890',
    change: 12.5,
    changeType: 'positive',
    icon: 'TrendingUp',
    color: 'bg-green-500',
  },
  {
    id: '2',
    title: 'Usuários Ativos',
    value: '12.458',
    change: 8.2,
    changeType: 'positive',
    icon: 'Users',
    color: 'bg-blue-500',
  },
  {
    id: '3',
    title: 'Taxa de Conversão',
    value: '3.24%',
    change: -2.1,
    changeType: 'negative',
    icon: 'Target',
    color: 'bg-purple-500',
  },
  {
    id: '4',
    title: 'Tempo Médio',
    value: '4m 32s',
    change: 5.4,
    changeType: 'positive',
    icon: 'Clock',
    color: 'bg-orange-500',
  },
]

export const salesData: TimeSeriesData[] = [
  { date: '2024-01', value: 45000 },
  { date: '2024-02', value: 52000 },
  { date: '2024-03', value: 48000 },
  { date: '2024-04', value: 61000 },
  { date: '2024-05', value: 55000 },
  { date: '2024-06', value: 67000 },
  { date: '2024-07', value: 72000 },
  { date: '2024-08', value: 68000 },
  { date: '2024-09', value: 75000 },
  { date: '2024-10', value: 82000 },
  { date: '2024-11', value: 79000 },
  { date: '2024-12', value: 89000 },
]

export const categoryData: ChartData[] = [
  { name: 'Produto A', value: 45000 },
  { name: 'Produto B', value: 32000 },
  { name: 'Produto C', value: 28000 },
  { name: 'Produto D', value: 15000 },
  { name: 'Outros', value: 12000 },
]

export const monthlyComparison: ChartData[] = [
  { name: 'Jan', atual: 45000, anterior: 42000 },
  { name: 'Fev', atual: 52000, anterior: 48000 },
  { name: 'Mar', atual: 48000, anterior: 45000 },
  { name: 'Abr', atual: 61000, anterior: 55000 },
  { name: 'Mai', atual: 55000, anterior: 52000 },
  { name: 'Jun', atual: 67000, anterior: 60000 },
]

export const regionData: ChartData[] = [
  { name: 'Norte', value: 35000 },
  { name: 'Nordeste', value: 42000 },
  { name: 'Centro-Oeste', value: 28000 },
  { name: 'Sudeste', value: 85000 },
  { name: 'Sul', value: 45000 },
]

export const performanceData: TimeSeriesData[] = [
  { date: '00:00', value: 65 },
  { date: '04:00', value: 45 },
  { date: '08:00', value: 85 },
  { date: '12:00', value: 92 },
  { date: '16:00', value: 88 },
  { date: '20:00', value: 75 },
  { date: '24:00', value: 60 },
]

