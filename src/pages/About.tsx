
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { GridPattern } from "@/components/climate/GridPattern";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="About the Project"
            description="Planet at Risk: Visualizing Climate Realities"
            className="mb-8"
          />
          
          <div className="relative">
            <GridPattern />
            
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                  <p className="text-muted-foreground mb-4">
                    "Planet at Risk: Visualizing Climate Realities" is an interactive data visualization platform
                    designed to help users understand and explore climate change through real-world environmental indicators.
                    By presenting complex data in accessible visual formats, we aim to increase awareness and understanding
                    of climate change impacts.
                  </p>
                  <p className="text-muted-foreground">
                    This dashboard presents key climate indicators including global temperature rise, CO₂ emissions,
                    sea level changes, arctic ice extent, extreme weather events, and biodiversity metrics. Users can
                    explore these indicators individually, understand their trends, and learn about their interrelationships.
                  </p>
                </section>
                
                <Separator />
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">Methodology</h2>
                  <p className="text-muted-foreground mb-4">
                    The data visualized in this project is based on sample datasets that represent the trends and
                    patterns observed in actual climate data. In a real implementation, this would be connected to
                    authoritative data sources from climate science organizations like NASA, NOAA, the IPCC, and
                    other research institutions.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our approach focuses on presenting data in clear, intuitive visualizations that highlight trends
                    over time, allowing users to grasp the magnitude and rate of environmental changes. The dashboard
                    implements interactive elements that enable users to explore different indicators and time periods.
                  </p>
                  <p className="text-muted-foreground">
                    For each indicator, we provide context about what is being measured, how it relates to climate
                    change, and what impacts it may have on natural systems and human societies.
                  </p>
                </section>
                
                <Separator />
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">Data Sources</h2>
                  <p className="text-muted-foreground mb-4">
                    While this demonstration uses sample data, a production implementation would draw from the
                    following authoritative sources:
                  </p>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
                    <li>
                      <strong>Temperature Data:</strong> NASA's Goddard Institute for Space Studies (GISS),
                      NOAA's National Centers for Environmental Information
                    </li>
                    <li>
                      <strong>CO₂ Emissions:</strong> Global Carbon Project, World Resources Institute
                    </li>
                    <li>
                      <strong>Sea Level:</strong> NASA's Satellite Sea Level Observations, NOAA Tides and Currents
                    </li>
                    <li>
                      <strong>Arctic Sea Ice:</strong> National Snow and Ice Data Center (NSIDC)
                    </li>
                    <li>
                      <strong>Extreme Weather:</strong> EM-DAT International Disaster Database, NOAA Storm Events Database
                    </li>
                    <li>
                      <strong>Biodiversity:</strong> WWF Living Planet Index, International Union for Conservation of Nature (IUCN)
                    </li>
                  </ul>
                  <p className="text-muted-foreground">
                    Data processing would include standardization of time periods, handling of missing values,
                    and appropriate statistical transformations to ensure accurate representation.
                  </p>
                </section>
              </div>
              
              <div className="space-y-6">
                <div className="rounded-lg border overflow-hidden">
                  <img 
                    src="/lovable-uploads/110a1a85-6303-4991-b438-03c9edbd2b62.png" 
                    alt="Planet at Risk Banner" 
                    className="w-full object-cover h-48"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">Project Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">Project Type:</span>
                        <span className="text-muted-foreground">Data Visualization</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Focus:</span>
                        <span className="text-muted-foreground">Climate Indicators</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Created:</span>
                        <span className="text-muted-foreground">April 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Updated:</span>
                        <span className="text-muted-foreground">Monthly</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg border p-4 space-y-4">
                  <h3 className="font-bold">Key Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="mr-2 h-5 w-5 text-climate-blue shrink-0">•</div>
                      <span>Interactive visualization of climate indicators</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 h-5 w-5 text-climate-blue shrink-0">•</div>
                      <span>Comprehensive dashboard with key metrics</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 h-5 w-5 text-climate-blue shrink-0">•</div>
                      <span>Detailed explanations of climate impacts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 h-5 w-5 text-climate-blue shrink-0">•</div>
                      <span>Educational content on potential solutions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 h-5 w-5 text-climate-blue shrink-0">•</div>
                      <span>Responsive design for all devices</span>
                    </li>
                  </ul>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold mb-3">Explore the Dashboard</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Access our interactive dashboard to analyze environmental indicators and understand climate change impacts.
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full" asChild>
                      <Link to="/dashboard">View Dashboard</Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/explore">Explore Data</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <section className="mt-12 bg-climate-darkgray rounded-lg border p-6">
              <h2 className="text-xl font-bold mb-4">Project Requirements</h2>
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium mb-2">Project Goals</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Analyze datasets based on the climate change theme</li>
                    <li>Present meaningful insights through interactive visualizations</li>
                    <li>Create an intuitive interface for data exploration</li>
                    <li>Provide educational context alongside data presentation</li>
                    <li>Demonstrate connections between different climate indicators</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Deliverables</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Frontend dashboard with interactive visualization components</li>
                    <li>Data sources clearly identified and referenced</li>
                    <li>Responsive interface accessible on multiple devices</li>
                    <li>Educational content to support data understanding</li>
                    <li>Source code with clear documentation</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Potential Future Features</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded border border-border/50 p-3">
                    <h4 className="font-medium mb-1">Advanced Filtering</h4>
                    <p className="text-xs text-muted-foreground">
                      Implement more granular filtering options including regional views and custom date ranges.
                    </p>
                  </div>
                  <div className="rounded border border-border/50 p-3">
                    <h4 className="font-medium mb-1">Predictive Models</h4>
                    <p className="text-xs text-muted-foreground">
                      Integrate climate projection models to show potential future scenarios.
                    </p>
                  </div>
                  <div className="rounded border border-border/50 p-3">
                    <h4 className="font-medium mb-1">API Integration</h4>
                    <p className="text-xs text-muted-foreground">
                      Connect to live climate data APIs for real-time updates and monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
