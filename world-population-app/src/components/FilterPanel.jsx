import { useState } from 'react'
import './FilterPanel.css'

function FilterPanel({ selectedFilters, setSelectedFilters, populationData }) {
  const [isOpen, setIsOpen] = useState(true)

  const regions = [...new Set(populationData.map(item => item.region))]
  const allReligions = [...new Set(populationData.flatMap(item => item.religion))]

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const resetFilters = () => {
    setSelectedFilters({
      region: 'all',
      religion: 'all',
      minPopulation: 0
    })
  }

  const populationRanges = [
    { label: 'All', value: 0 },
    { label: '100M+', value: 100000000 },
    { label: '500M+', value: 500000000 },
    { label: '1B+', value: 1000000000 }
  ]

  return (
    <div className={`filter-panel ${isOpen ? 'open' : 'closed'}`}>
      <div className="filter-header">
        <h3>Filters</h3>
        <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '◀' : '▶'}
        </button>
      </div>

      {isOpen && (
        <div className="filter-content">
          <div className="filter-group">
            <label>Region</label>
            <select
              value={selectedFilters.region}
              onChange={(e) => handleFilterChange('region', e.target.value)}
            >
              <option value="all">All Regions</option>
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Religion</label>
            <select
              value={selectedFilters.religion}
              onChange={(e) => handleFilterChange('religion', e.target.value)}
            >
              <option value="all">All Religions</option>
              {allReligions.map(religion => (
                <option key={religion} value={religion}>{religion}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Population</label>
            <div className="radio-group">
              {populationRanges.map(range => (
                <label key={range.value} className="radio-label">
                  <input
                    type="radio"
                    name="population"
                    value={range.value}
                    checked={selectedFilters.minPopulation === range.value}
                    onChange={(e) => handleFilterChange('minPopulation', Number(e.target.value))}
                  />
                  {range.label}
                </label>
              ))}
            </div>
          </div>

          <button className="reset-btn" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
      )}
    </div>
  )
}

export default FilterPanel
