
import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-border/40 bg-background/80 py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold">
              <div className="relative h-6 w-6 overflow-hidden rounded-full bg-climate-blue">
                <div className="absolute inset-0 animate-pulse-slow bg-climate-dark opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-xs">🌍</div>
              </div>
              <span>Planet at Risk</span>
            </Link>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              Visualizing Climate Realities — © 2025
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
              Dashboard
            </Link>
            <Link to="/explore" className="text-sm text-muted-foreground hover:text-foreground">
              Explore Data
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
