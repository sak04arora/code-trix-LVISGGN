
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GridPattern } from "@/components/climate/GridPattern";
import { WaveAnimation } from "@/components/climate/WaveAnimation";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="relative flex-1">
        <GridPattern />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <WaveAnimation className="h-full" />
          
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-climate-blue/10 px-3 py-1 text-sm text-climate-blue">
                    Planet at Risk
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    Visualizing Climate Realities
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Explore how climate change is affecting our planet using real-world environmental indicators.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link to="/dashboard">View Dashboard</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/explore">Explore Data</Link>
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-md">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border/40 bg-climate-darkgray shadow-xl">
                    <img 
                      src="/lovable-uploads/110a1a85-6303-4991-b438-03c9edbd2b62.png" 
                      alt="Planet at Risk: Visualizing Climate Realities" 
                      className="h-full w-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-white glow-text">PLANET AT RISK</h3>
                      <p className="mt-1 text-sm text-white/80">
                        Explore how climate change is affecting our planet
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Indicators Section */}
        <section className="py-16 lg:py-24 relative">
          <GridPattern className="opacity-10" />
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-10">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Key Environmental Indicators
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our dashboard presents real-world data to help you understand climate change trends and impacts.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Temperature Rise",
                  description: "Track global and regional temperature changes over time.",
                  color: "bg-climate-red/10 border-climate-red/20",
                  textColor: "text-climate-red",
                  icon: "🌡️"
                },
                {
                  title: "CO2 Emissions",
                  description: "Monitor carbon dioxide levels and emissions by country.",
                  color: "bg-climate-orange/10 border-climate-orange/20",
                  textColor: "text-climate-orange",
                  icon: "🏭"
                },
                {
                  title: "Sea Level Rise",
                  description: "Visualize changes in global sea levels and coastal impacts.",
                  color: "bg-climate-blue/10 border-climate-blue/20",
                  textColor: "text-climate-blue",
                  icon: "🌊"
                },
                {
                  title: "Ice Sheet Decline",
                  description: "Track polar ice coverage and glacial retreat patterns.",
                  color: "bg-climate-blue/10 border-climate-blue/20",
                  textColor: "text-climate-blue",
                  icon: "❄️"
                },
                {
                  title: "Extreme Weather",
                  description: "Analyze the frequency of extreme weather events globally.",
                  color: "bg-climate-purple/10 border-climate-purple/20",
                  textColor: "text-climate-purple",
                  icon: "🌪️"
                },
                {
                  title: "Biodiversity Loss",
                  description: "Examine species decline and ecosystem health indicators.",
                  color: "bg-climate-green/10 border-climate-green/20",
                  textColor: "text-climate-green",
                  icon: "🦋"
                }
              ].map((indicator, i) => (
                <div
                  key={i}
                  className={`flex flex-col rounded-lg border p-6 ${indicator.color}`}
                >
                  <div className={`mb-4 text-4xl ${indicator.textColor}`}>
                    {indicator.icon}
                  </div>
                  <h3 className="text-xl font-bold">{indicator.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {indicator.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col rounded-lg border bg-gradient-to-b from-climate-darkgray to-background p-8 md:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Ready to explore climate data?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Access our interactive dashboard to analyze environmental indicators and understand climate change impacts.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg" asChild>
                    <Link to="/dashboard">View Dashboard</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
