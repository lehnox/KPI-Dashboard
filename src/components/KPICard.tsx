import { KPI } from '../types'
import { TrendingUp, TrendingDown, Minus, Users, Target, Clock } from 'lucide-react'

interface KPICardProps {
  kpi: KPI
}

const iconMap = {
  TrendingUp,
  Users,
  Target,
  Clock,
}

export default function KPICard({ kpi }: KPICardProps) {
  const Icon = iconMap[kpi.icon as keyof typeof iconMap] || TrendingUp

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`${kpi.color} p-3 rounded-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className={`flex items-center gap-1 ${
          kpi.changeType === 'positive' ? 'text-green-600' : 
          kpi.changeType === 'negative' ? 'text-red-600' : 
          'text-gray-600'
        }`}>
          {kpi.changeType === 'positive' && <TrendingUp className="w-4 h-4" />}
          {kpi.changeType === 'negative' && <TrendingDown className="w-4 h-4" />}
          {kpi.changeType === 'neutral' && <Minus className="w-4 h-4" />}
          <span className="text-sm font-semibold">
            {kpi.change > 0 ? '+' : ''}{kpi.change}%
          </span>
        </div>
      </div>
      <h3 className="text-gray-500 text-sm font-medium mb-1">{kpi.title}</h3>
      <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
    </div>
  )
}

