
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { GridPattern } from "@/components/climate/GridPattern";
import { DataCard } from "@/components/climate/DataCard";
import { IndicatorChart } from "@/components/climate/IndicatorChart";
import { temperatureData, co2EmissionsData, seaLevelData, arcticIceData, extremeWeatherData, biodiversityData } from "@/data/climate-data";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Climate Dashboard"
            description="Real-time visualization of key environmental indicators"
            className="mb-8"
          />
          
          <div className="relative">
            <GridPattern />
            
            {/* Key Metrics */}
            <section className="mb-8">
              <h3 className="text-lg font-medium mb-4">Key Metrics</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                <DataCard
                  title="Global Temperature"
                  value={temperatureData[temperatureData.length - 1].temperature}
                  metric="°C above pre-industrial"
                  change={{ value: 11.8, trend: "up" }}
                  color="red"
                />
                <DataCard
                  title="CO₂ Emissions"
                  value={co2EmissionsData[co2EmissionsData.length - 1].emissions}
                  metric="billion tonnes/year"
                  change={{ value: 4.6, trend: "up" }}
                  color="orange"
                />
                <DataCard
                  title="Sea Level Rise"
                  value={seaLevelData[seaLevelData.length - 1].level}
                  metric="mm since 1990"
                  change={{ value: 17.6, trend: "up" }}
                  color="blue"
                />
                <DataCard
                  title="Arctic Sea Ice"
                  value={arcticIceData[arcticIceData.length - 1].extent}
                  metric="million km²"
                  change={{ value: 6.8, trend: "down" }}
                  color="blue"
                />
                <DataCard
                  title="Extreme Weather"
                  value={extremeWeatherData[extremeWeatherData.length - 1].events}
                  metric="events per year"
                  change={{ value: 8.3, trend: "up" }}
                  color="purple"
                />
                <DataCard
                  title="Biodiversity"
                  value={(biodiversityData[biodiversityData.length - 1].index * 100).toFixed(0)}
                  metric="% of 1990 level"
                  change={{ value: 7.4, trend: "down" }}
                  color="green"
                />
              </div>
            </section>
            
            {/* Charts Section */}
            <section className="mb-8">
              <h3 className="text-lg font-medium mb-4">Trend Analysis</h3>
              <div className="grid gap-6 lg:grid-cols-2">
                <IndicatorChart
                  title="Global Temperature Rise"
                  data={temperatureData}
                  dataKey="temperature"
                  color="#EF4444"
                  yAxisLabel="°C"
                />
                <IndicatorChart
                  title="CO₂ Emissions"
                  data={co2EmissionsData}
                  dataKey="emissions"
                  color="#F97316"
                  yAxisLabel="billion tonnes/year"
                />
                <IndicatorChart
                  title="Sea Level Rise"
                  data={seaLevelData}
                  dataKey="level"
                  color="#0EA5E9"
                  yAxisLabel="mm"
                />
                <IndicatorChart
                  title="Arctic Sea Ice Extent"
                  data={arcticIceData}
                  dataKey="extent"
                  color="#3B82F6"
                  yAxisLabel="million km²"
                />
              </div>
            </section>
            
            {/* Additional Indicators */}
            <section className="mb-8">
              <h3 className="text-lg font-medium mb-4">Additional Indicators</h3>
              <div className="grid gap-6 lg:grid-cols-2">
                <IndicatorChart
                  title="Extreme Weather Events"
                  data={extremeWeatherData}
                  dataKey="events"
                  color="#8B5CF6"
                  yAxisLabel="events per year"
                />
                <IndicatorChart
                  title="Biodiversity Index"
                  data={biodiversityData}
                  dataKey="index"
                  color="#10B981"
                  yAxisLabel="index (1.0 = 1990)"
                />
              </div>
            </section>
            
            {/* Data Sources */}
            <section>
              <div className="rounded-lg border bg-card/50 p-6">
                <h3 className="text-lg font-medium mb-2">About This Dashboard</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  This dashboard visualizes key climate change indicators to help understand environmental trends over time. 
                  The data shown represents sample values based on real climate trends for educational purposes.
                </p>
                <h4 className="text-sm font-medium mb-1">Data Sources:</h4>
                <ul className="text-xs text-muted-foreground list-disc pl-5 space-y-1">
                  <li>Global temperature data based on NASA GISS Surface Temperature Analysis</li>
                  <li>CO₂ emissions data adapted from Global Carbon Project</li>
                  <li>Sea level measurements based on satellite altimetry data</li>
                  <li>Arctic sea ice extent based on NSIDC data</li>
                  <li>Extreme weather events frequency based on EM-DAT database</li>
                  <li>Biodiversity index adapted from Living Planet Index</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
