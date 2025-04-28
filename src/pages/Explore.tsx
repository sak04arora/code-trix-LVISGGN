
import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { IndicatorSelector, IndicatorOption } from "@/components/climate/IndicatorSelector";
import { IndicatorChart } from "@/components/climate/IndicatorChart";
import { GridPattern } from "@/components/climate/GridPattern";
import { 
  indicators, 
  getIndicatorData, 
  getIndicatorDataKey, 
  getIndicatorColor,
  getIndicatorTitle,
  getIndicatorUnit
} from "@/data/climate-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Explore = () => {
  const [selectedIndicator, setSelectedIndicator] = useState("temperature");
  
  const indicatorOptions: IndicatorOption[] = indicators;
  const indicatorData = getIndicatorData(selectedIndicator);
  const dataKey = getIndicatorDataKey(selectedIndicator);
  const color = getIndicatorColor(selectedIndicator);
  const title = getIndicatorTitle(selectedIndicator);
  const unit = getIndicatorUnit(selectedIndicator);
  
  const latestValue = indicatorData[indicatorData.length - 1][dataKey as keyof typeof indicatorData[0]];
  const previousValue = indicatorData[indicatorData.length - 2][dataKey as keyof typeof indicatorData[0]];
  
  const percentChange = typeof latestValue === 'number' && typeof previousValue === 'number'
    ? ((latestValue - previousValue) / previousValue * 100).toFixed(1)
    : 'N/A';
  
  const getIndicatorDescription = () => {
    switch (selectedIndicator) {
      case "temperature":
        return "Global temperature anomaly shows the difference in degrees Celsius relative to pre-industrial levels (1850-1900). Rising temperatures indicate climate change progression.";
      case "co2":
        return "Carbon dioxide emissions measured in billion tonnes per year from fossil fuels, land use change, and other industrial processes.";
      case "seaLevel":
        return "Global sea level rise in millimeters compared to 1990 baseline, measured through satellite altimetry and tide gauges.";
      case "arcticIce":
        return "Arctic sea ice extent measured in million square kilometers, representing the area of ocean with at least 15% sea ice coverage.";
      case "extremeWeather":
        return "Annual frequency of extreme weather events including major floods, storms, droughts and heat waves recorded globally.";
      case "biodiversity":
        return "Biodiversity index showing relative population abundance of thousands of vertebrate species compared to 1990 levels (1.0).";
      default:
        return "Select an indicator to view its description and data visualization.";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Explore Climate Data"
            description="Select indicators to analyze climate trends and patterns"
            className="mb-8"
          />
          
          <div className="relative">
            <GridPattern />
            
            <div className="mb-8">
              <IndicatorSelector 
                indicators={indicatorOptions}
                value={selectedIndicator}
                onValueChange={setSelectedIndicator}
              />
            </div>
            
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <IndicatorChart
                  title={title}
                  data={indicatorData}
                  dataKey={dataKey}
                  color={color}
                  yAxisLabel={unit}
                  height={400}
                  className="h-full"
                />
              </div>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>Key information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1">Latest value</div>
                      <div className="text-2xl font-bold">
                        {latestValue} <span className="text-sm font-normal text-muted-foreground">{unit}</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1">Change from previous period</div>
                      <div className="text-lg font-semibold">
                        {percentChange}%
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="text-sm font-medium mb-1">Description</div>
                      <p className="text-sm text-muted-foreground">
                        {getIndicatorDescription()}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Data Information</CardTitle>
                    <CardDescription>About this dataset</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <div className="font-medium">Source:</div>
                      <div className="text-muted-foreground">Sample data</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="font-medium">Time range:</div>
                      <div className="text-muted-foreground">1990-2025</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="font-medium">Last updated:</div>
                      <div className="text-muted-foreground">April 2025</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="font-medium">Format:</div>
                      <div className="text-muted-foreground">Year, {title}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mt-8">
              <Tabs defaultValue="details">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="impacts">Impacts</TabsTrigger>
                  <TabsTrigger value="solutions">Solutions</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="p-4 border rounded-lg mt-2">
                  <h3 className="text-lg font-medium mb-2">{title} - Detailed Information</h3>
                  <p className="text-muted-foreground mb-4">
                    {getIndicatorDescription()}
                  </p>
                  <h4 className="font-medium mb-2">Measurement Methodology:</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    This indicator is measured through a combination of satellite data, ground observations, 
                    and historical records. Scientists compile these measurements to create a comprehensive 
                    view of changes over time, applying statistical methods to account for uncertainties 
                    and natural variations.
                  </p>
                  <h4 className="font-medium mb-2">Data Limitations:</h4>
                  <p className="text-sm text-muted-foreground">
                    While this data represents the best available scientific understanding, there are inherent 
                    uncertainties in climate measurements. Historical records may have gaps, and projections 
                    into the future depend on various assumptions about emissions scenarios and climate sensitivity.
                  </p>
                </TabsContent>
                <TabsContent value="impacts" className="p-4 border rounded-lg mt-2">
                  <h3 className="text-lg font-medium mb-2">Potential Impacts of Changes</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Environmental Impacts:</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-1">
                        <li>Changes in precipitation patterns and water availability</li>
                        <li>Alteration of habitats and ecosystems</li>
                        <li>Increased frequency of wildfires and extreme weather</li>
                        <li>Shifts in growing seasons and agricultural zones</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Human Impacts:</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-1">
                        <li>Threats to food security and agricultural production</li>
                        <li>Water scarcity in already vulnerable regions</li>
                        <li>Health impacts from heat waves and changing disease patterns</li>
                        <li>Displacement of communities due to sea level rise</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Economic Impacts:</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-1">
                        <li>Infrastructure damage from extreme weather events</li>
                        <li>Increased costs for adaptation and resilience</li>
                        <li>Shifts in tourism and recreational opportunities</li>
                        <li>Changes in resource availability and extraction costs</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="solutions" className="p-4 border rounded-lg mt-2">
                  <h3 className="text-lg font-medium mb-2">Potential Solutions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Mitigation Strategies:</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-1">
                        <li>Transition to renewable energy sources</li>
                        <li>Increase energy efficiency in buildings and transportation</li>
                        <li>Develop and deploy carbon capture technologies</li>
                        <li>Implement sustainable land use and agriculture practices</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Adaptation Approaches:</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-1">
                        <li>Design climate-resilient infrastructure</li>
                        <li>Diversify agricultural crops and farming techniques</li>
                        <li>Restore natural ecosystems like wetlands and forests</li>
                        <li>Develop early warning systems for extreme weather</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Policy Frameworks:</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-1">
                        <li>Implement carbon pricing mechanisms</li>
                        <li>Set ambitious emissions reduction targets</li>
                        <li>Increase funding for climate research and technology</li>
                        <li>Support vulnerable communities with adaptation resources</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
