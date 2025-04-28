
// Sample climate data for visualization purposes

export interface TemperatureData {
  year: number;
  temperature: number;
}

export interface EmissionsData {
  year: number;
  emissions: number;
}

export interface SeaLevelData {
  year: number;
  level: number;
}

export interface IceExtentData {
  year: number;
  extent: number;
}

export interface ExtremeWeatherData {
  year: number;
  events: number;
}

export interface BiodiversityData {
  year: number;
  index: number;
}

export const temperatureData: TemperatureData[] = [
  { year: 1990, temperature: 0.45 },
  { year: 1995, temperature: 0.52 },
  { year: 2000, temperature: 0.61 },
  { year: 2005, temperature: 0.68 },
  { year: 2010, temperature: 0.72 },
  { year: 2015, temperature: 0.90 },
  { year: 2020, temperature: 1.02 },
  { year: 2025, temperature: 1.13 }
];

export const co2EmissionsData: EmissionsData[] = [
  { year: 1990, emissions: 22.7 },
  { year: 1995, emissions: 23.5 },
  { year: 2000, emissions: 25.2 },
  { year: 2005, emissions: 29.6 },
  { year: 2010, emissions: 33.1 },
  { year: 2015, emissions: 35.5 },
  { year: 2020, emissions: 34.8 },
  { year: 2025, emissions: 36.4 }
];

export const seaLevelData: SeaLevelData[] = [
  { year: 1990, level: 0 },
  { year: 1995, level: 12 },
  { year: 2000, level: 24 },
  { year: 2005, level: 40 },
  { year: 2010, level: 54 },
  { year: 2015, level: 70 },
  { year: 2020, level: 91 },
  { year: 2025, level: 107 }
];

export const arcticIceData: IceExtentData[] = [
  { year: 1990, extent: 7.0 },
  { year: 1995, extent: 6.8 },
  { year: 2000, extent: 6.5 },
  { year: 2005, extent: 5.9 },
  { year: 2010, extent: 5.3 },
  { year: 2015, extent: 4.8 },
  { year: 2020, extent: 4.4 },
  { year: 2025, extent: 4.1 }
];

export const extremeWeatherData: ExtremeWeatherData[] = [
  { year: 1990, events: 250 },
  { year: 1995, events: 268 },
  { year: 2000, events: 293 },
  { year: 2005, events: 315 },
  { year: 2010, events: 342 },
  { year: 2015, events: 380 },
  { year: 2020, events: 412 },
  { year: 2025, events: 446 }
];

export const biodiversityData: BiodiversityData[] = [
  { year: 1990, index: 1.0 },
  { year: 1995, index: 0.95 },
  { year: 2000, index: 0.87 },
  { year: 2005, index: 0.82 },
  { year: 2010, index: 0.77 },
  { year: 2015, index: 0.73 },
  { year: 2020, index: 0.68 },
  { year: 2025, index: 0.63 }
];

export const indicators = [
  { value: "temperature", label: "Global Temperature Rise", category: "Atmosphere" },
  { value: "co2", label: "CO₂ Emissions", category: "Atmosphere" },
  { value: "methane", label: "Methane Levels", category: "Atmosphere" },
  { value: "seaLevel", label: "Sea Level Rise", category: "Oceans" },
  { value: "oceanAcidity", label: "Ocean Acidification", category: "Oceans" },
  { value: "arcticIce", label: "Arctic Sea Ice", category: "Cryosphere" },
  { value: "glaciers", label: "Glacier Mass", category: "Cryosphere" },
  { value: "extremeWeather", label: "Extreme Weather Events", category: "Events" },
  { value: "drought", label: "Drought Frequency", category: "Events" },
  { value: "biodiversity", label: "Biodiversity Index", category: "Ecosystems" }
];

export const getIndicatorData = (indicator: string) => {
  switch (indicator) {
    case "temperature":
      return temperatureData;
    case "co2":
      return co2EmissionsData;
    case "seaLevel":
      return seaLevelData;
    case "arcticIce":
      return arcticIceData;
    case "extremeWeather":
      return extremeWeatherData;
    case "biodiversity":
      return biodiversityData;
    default:
      // Return a default dataset
      return temperatureData;
  }
};

export const getIndicatorDataKey = (indicator: string) => {
  switch (indicator) {
    case "temperature":
      return "temperature";
    case "co2":
      return "emissions";
    case "seaLevel":
      return "level";
    case "arcticIce":
      return "extent";
    case "extremeWeather":
      return "events";
    case "biodiversity":
      return "index";
    default:
      return "value";
  }
};

export const getIndicatorColor = (indicator: string) => {
  switch (indicator) {
    case "temperature":
      return "#EF4444"; // red
    case "co2":
      return "#F97316"; // orange
    case "methane":
      return "#F59E0B"; // amber
    case "seaLevel":
      return "#0EA5E9"; // blue
    case "oceanAcidity":
      return "#06B6D4"; // cyan
    case "arcticIce":
      return "#3B82F6"; // blue
    case "glaciers":
      return "#A78BFA"; // violet
    case "extremeWeather":
      return "#8B5CF6"; // purple
    case "drought":
      return "#EC4899"; // pink
    case "biodiversity":
      return "#10B981"; // green
    default:
      return "#0EA5E9"; // default blue
  }
};

export const getIndicatorTitle = (indicator: string) => {
  const found = indicators.find(i => i.value === indicator);
  return found?.label || "Unknown Indicator";
};

export const getIndicatorUnit = (indicator: string) => {
  switch (indicator) {
    case "temperature":
      return "°C above pre-industrial";
    case "co2":
      return "billion tonnes per year";
    case "methane":
      return "parts per billion";
    case "seaLevel":
      return "millimeters";
    case "oceanAcidity":
      return "pH level";
    case "arcticIce":
      return "million km²";
    case "glaciers":
      return "meters water equivalent";
    case "extremeWeather":
      return "events per year";
    case "drought":
      return "events per decade";
    case "biodiversity":
      return "index (1.0 = 1990 level)";
    default:
      return "";
  }
};
