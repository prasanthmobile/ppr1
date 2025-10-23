import './StatsOverview.css'

function StatsOverview({ totalPopulation, regions, allData }) {
  const formatPopulation = (pop) => {
    if (pop >= 1000000000) {
      return `${(pop / 1000000000).toFixed(2)}B`
    } else if (pop >= 1000000) {
      return `${(pop / 1000000).toFixed(0)}M`
    }
    return pop.toLocaleString()
  }

  const totalWorldPopulation = allData.reduce((sum, item) => sum + item.population, 0)
  const uniqueReligions = [...new Set(allData.flatMap(item => item.religion))].length

  return (
    <div className="stats-overview">
      <div className="stat-card">
        <div className="stat-icon">🌍</div>
        <div className="stat-info">
          <div className="stat-value">{formatPopulation(totalPopulation)}</div>
          <div className="stat-label">Total Population</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">📍</div>
        <div className="stat-info">
          <div className="stat-value">{regions}</div>
          <div className="stat-label">Regions Shown</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">🙏</div>
        <div className="stat-info">
          <div className="stat-value">{uniqueReligions}</div>
          <div className="stat-label">Major Religions</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">🌐</div>
        <div className="stat-info">
          <div className="stat-value">{formatPopulation(totalWorldPopulation)}</div>
          <div className="stat-label">World Total</div>
        </div>
      </div>
    </div>
  )
}

export default StatsOverview
