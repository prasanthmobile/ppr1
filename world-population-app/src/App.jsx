import { useState } from 'react'
import './App.css'
import { populationData } from './data/populationData'
import PopulationCard from './components/PopulationCard'
import FilterPanel from './components/FilterPanel'
import StatsOverview from './components/StatsOverview'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilters, setSelectedFilters] = useState({
    region: 'all',
    religion: 'all',
    minPopulation: 0
  })

  const filteredData = populationData.filter(item => {
    const matchesSearch = item.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.ethnicity.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.foodHabits.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRegion = selectedFilters.region === 'all' || item.region === selectedFilters.region
    const matchesReligion = selectedFilters.religion === 'all' || item.religion.includes(selectedFilters.religion)
    const matchesPopulation = item.population >= selectedFilters.minPopulation

    return matchesSearch && matchesRegion && matchesReligion && matchesPopulation
  })

  const totalPopulation = filteredData.reduce((sum, item) => sum + item.population, 0)

  return (
    <div className="app">
      <header className="app-header">
        <h1>World Population Explorer</h1>
        <p className="subtitle">Discover diverse cultures, traditions, and demographics across the globe</p>
      </header>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by region, ethnicity, food habits..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <StatsOverview
        totalPopulation={totalPopulation}
        regions={filteredData.length}
        allData={populationData}
      />

      <div className="main-content">
        <FilterPanel
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          populationData={populationData}
        />

        <div className="population-grid">
          {filteredData.length > 0 ? (
            filteredData.map(item => (
              <PopulationCard key={item.id} data={item} />
            ))
          ) : (
            <div className="no-results">
              <h3>No results found</h3>
              <p>Try adjusting your filters or search term</p>
            </div>
          )}
        </div>
      </div>

      <footer className="app-footer">
        <p>Data represents approximate demographics for educational purposes</p>
      </footer>
    </div>
  )
}

export default App
