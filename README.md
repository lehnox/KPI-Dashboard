# Dashboard Analytics - KPI

Um painel web moderno e responsivo focado em análises gráficas, KPIs e dashboards interativos.

## 🚀 Funcionalidades

- **KPIs (Key Performance Indicators)**: Cards com métricas importantes e indicadores de tendência
- **Gráficos Interativos**: 
  - Gráfico de Linha (receita ao longo do tempo)
  - Gráfico de Barras (comparativos e distribuições)
  - Gráfico de Pizza (distribuições percentuais)
  - Gráfico de Área (performance e tendências)
- **Dashboard Responsivo**: Layout adaptável para diferentes tamanhos de tela
- **UI Moderna**: Interface limpa e profissional com Tailwind CSS

## 🛠️ Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool rápida e moderna
- **Tailwind CSS** - Framework CSS utility-first
- **Recharts** - Biblioteca de gráficos para React
- **Lucide React** - Ícones modernos e leves

## 📦 Instalação

```bash
npm install
```

## 🏃 Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

## 🏗️ Build

Para criar uma build de produção:

```bash
npm run build
```

## 👀 Preview

Para visualizar a build de produção:

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
webpanel-dashboard/
├── src/
│   ├── components/      # Componentes React
│   │   ├── Dashboard.tsx
│   │   ├── KPICard.tsx
│   │   ├── LineChart.tsx
│   │   ├── BarChart.tsx
│   │   ├── PieChart.tsx
│   │   └── AreaChart.tsx
│   ├── data/            # Dados mockados
│   │   └── mockData.ts
│   ├── types/           # Definições TypeScript
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
└── package.json
```

## 🎨 Personalização

Os dados podem ser facilmente substituídos editando os arquivos em `src/data/mockData.ts`. Os componentes de gráficos são totalmente configuráveis através de props.

## 📝 Licença

Este projeto é de código aberto e está disponível para uso livre.

