# World Population Explorer

An interactive React application that displays world population data categorized by demographics, culture, traditions, and lifestyle.

## Features

- **Interactive Population Cards**: Expandable cards showing detailed demographic information for different world regions
- **Advanced Filtering**: Filter by region, religion, and population size
- **Real-time Search**: Search across regions, ethnicities, and food habits
- **Statistics Overview**: Visual summary of total population, regions, and religions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern gradient design with smooth animations and transitions

## Data Categories

Each region includes comprehensive information about:

- **Population**: Total population count
- **Ethnicity**: Major ethnic groups
- **Religion**: Primary religious beliefs
- **Food Habits**: Traditional cuisine and dietary preferences
- **Clothing**: Traditional and modern clothing styles
- **Principles**: Cultural values and societal principles
- **Lifestyle**: Living conditions and cultural practices

## Regions Covered

- East Asia
- South Asia
- Middle East
- Sub-Saharan Africa
- Europe
- North America
- Latin America
- Southeast Asia
- Oceania
- Central Asia
- Eastern Europe
- Indigenous Communities Worldwide

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Technology Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **CSS3**: Custom styling with gradients and animations
- **JavaScript ES6+**: Modern JavaScript features

## Project Structure

```
world-population-app/
├── src/
│   ├── components/
│   │   ├── PopulationCard.jsx       # Individual region card component
│   │   ├── PopulationCard.css
│   │   ├── FilterPanel.jsx          # Filter controls
│   │   ├── FilterPanel.css
│   │   ├── StatsOverview.jsx        # Statistics display
│   │   └── StatsOverview.css
│   ├── data/
│   │   └── populationData.js        # Sample population data
│   ├── App.jsx                      # Main application component
│   ├── App.css
│   ├── index.css                    # Global styles
│   └── main.jsx                     # Application entry point
├── public/
├── index.html
└── package.json
```

## Features in Detail

### Search Functionality
Type in the search bar to filter results by region name, ethnicity, or food habits in real-time.

### Filter Panel
- **Region Filter**: Select specific regions to view
- **Religion Filter**: Filter by major religious groups
- **Population Filter**: Filter by population ranges (100M+, 500M+, 1B+)
- **Reset Button**: Clear all filters with one click

### Expandable Cards
Click on any population card to expand and see additional information about clothing, principles, and lifestyle.

### Statistics Overview
View real-time statistics that update based on your current filters:
- Total filtered population
- Number of regions displayed
- Count of major religions
- Total world population

## Note

The data provided is for educational and demonstrative purposes. Population figures are approximate and based on general demographic information.

## License

MIT License - feel free to use this project for learning and development purposes.
