
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Explore Data", path: "/explore" },
  { name: "About", path: "/about" },
];

export const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-lg bg-background/80">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        <div className="mr-4 flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-climate-blue">
              <div className="absolute inset-0 animate-pulse-slow bg-climate-dark opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white">🌍</div>
            </div>
            <span className="hidden font-bold text-foreground md:inline-block">
              Planet at Risk
            </span>
          </Link>
        </div>
        
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-climate-dark w-[240px] sm:w-[300px]">
              <div className="mt-8 flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 text-base font-medium transition-colors hover:bg-climate-darkgray rounded-md",
                      location.pathname === item.path
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
