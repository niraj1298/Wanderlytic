"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Map, Compass, Briefcase } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border dark:bg-background/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Wanderlytics</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link 
              href="/explore" 
              className="flex items-center gap-1.5 text-foreground/80 hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
            >
              <Compass className="h-4 w-4 text-primary" />
              <span>Explore</span>
            </Link>
            <Link 
              href="/dashboard" 
              className="flex items-center gap-1.5 text-foreground/80 hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
            >
              <Map className="h-4 w-4 text-secondary" />
              <span>Dashboard</span>
            </Link>
            <Link 
              href="/trips" 
              className="flex items-center gap-1.5 text-foreground/80 hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
            >
              <Briefcase className="h-4 w-4 text-accent" />
              <span>My Trips</span>
            </Link>
            <div className="ml-6 flex items-center">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium shadow-sm transition-all hover:shadow-md hover:shadow-primary/20">
                Sign In
              </button>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="pt-2 pb-3 space-y-1 px-4 sm:px-6">
          <Link 
            href="/explore" 
            className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <Compass className="h-5 w-5 text-primary" />
            <span>Explore</span>
          </Link>
          <Link 
            href="/dashboard" 
            className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <Map className="h-5 w-5 text-secondary" />
            <span>Dashboard</span>
          </Link>
          <Link 
            href="/trips" 
            className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <Briefcase className="h-5 w-5 text-accent" />
            <span>My Trips</span>
          </Link>
          <div className="mt-4">
            <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium shadow-sm transition-all">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 