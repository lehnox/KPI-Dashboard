export interface KPI {
  id: string
  title: string
  value: string | number
  change: number
  changeType: 'positive' | 'negative' | 'neutral'
  icon: string
  color: string
}

export interface ChartData {
  name: string
  value: number
  [key: string]: string | number
}

export interface TimeSeriesData {
  date: string
  value: number
  category?: string
}

