import { LayoutDashboard } from 'lucide-react'
import KPICard from './KPICard'
import LineChart from './LineChart'
import BarChart from './BarChart'
import PieChart from './PieChart'
import AreaChart from './AreaChart'
import { kpiData, salesData, categoryData, monthlyComparison, regionData, performanceData } from '../data/mockData'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary-600 p-2 rounded-lg">
              <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">WebPanel Analytics</h1>
              <p className="text-sm text-gray-500">Dashboard de análises e métricas</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi) => (
            <KPICard key={kpi.id} kpi={kpi} />
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Sales Line Chart */}
          <LineChart 
            data={salesData} 
            title="Receita Mensal" 
            color="#0ea5e9"
          />

          {/* Performance Area Chart */}
          <AreaChart 
            data={performanceData} 
            title="Performance Diária" 
            color="#10b981"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Monthly Comparison Bar Chart */}
          <BarChart 
            data={monthlyComparison} 
            title="Comparativo Mensal"
            dataKeys={['atual', 'anterior']}
            colors={['#0ea5e9', '#94a3b8']}
          />

          {/* Category Pie Chart */}
          <PieChart 
            data={categoryData} 
            title="Vendas por Categoria"
          />
        </div>

        {/* Region Bar Chart - Full Width */}
        <div className="mb-8">
          <BarChart 
            data={regionData} 
            title="Vendas por Região"
            colors={['#8b5cf6']}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-500">
            © 2024 WebPanel Analytics. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

