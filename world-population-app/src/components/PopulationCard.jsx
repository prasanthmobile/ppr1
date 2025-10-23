import { useState } from 'react'
import './PopulationCard.css'

function PopulationCard({ data }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const formatPopulation = (pop) => {
    if (pop >= 1000000000) {
      return `${(pop / 1000000000).toFixed(2)} billion`
    } else if (pop >= 1000000) {
      return `${(pop / 1000000).toFixed(0)} million`
    }
    return pop.toLocaleString()
  }

  return (
    <div className={`population-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="card-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h2>{data.region}</h2>
        <div className="population-badge">
          {formatPopulation(data.population)}
        </div>
        <button className="expand-btn">
          {isExpanded ? '−' : '+'}
        </button>
      </div>

      <div className="card-content">
        <div className="info-section">
          <div className="info-item">
            <span className="icon">👥</span>
            <div>
              <strong>Ethnicity:</strong>
              <p>{data.ethnicity}</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">🙏</span>
            <div>
              <strong>Religion:</strong>
              <p>{Array.isArray(data.religion) ? data.religion.join(', ') : data.religion}</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">🍽️</span>
            <div>
              <strong>Food Habits:</strong>
              <p>{data.foodHabits}</p>
            </div>
          </div>

          {isExpanded && (
            <>
              <div className="info-item">
                <span className="icon">👔</span>
                <div>
                  <strong>Clothing:</strong>
                  <p>{data.clothing}</p>
                </div>
              </div>

              <div className="info-item">
                <span className="icon">💡</span>
                <div>
                  <strong>Principles:</strong>
                  <p>{data.principles}</p>
                </div>
              </div>

              <div className="info-item">
                <span className="icon">🏠</span>
                <div>
                  <strong>Lifestyle:</strong>
                  <p>{data.lifestyle}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default PopulationCard
