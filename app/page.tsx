import Navbar from "@/components/navigation/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero section */}
        <div className="relative bg-gradient-to-b from-background to-primary/5 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
            <div className="text-center">
              <span className="inline-block bg-secondary/10 text-secondary font-medium rounded-full px-4 py-1.5 mb-6">
                Explore. Track. Discover.
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                <span className="block">Discover Your Next Adventure</span>
                <span className="block text-primary mt-2">with Wanderlytics</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-lg text-muted-foreground sm:max-w-3xl">
                Track, analyze, and share your travel experiences. Plan better trips and discover new destinations tailored to your interests.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 px-6 py-3 rounded-md text-base font-medium transition-all hover:scale-105">
                  Get Started
                </button>
                <button className="bg-white text-foreground hover:bg-gray-50 shadow-md border border-border px-6 py-3 rounded-md text-base font-medium transition-all dark:bg-muted dark:text-foreground dark:border-muted dark:hover:bg-muted/80">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground">Why Wanderlytics?</h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                The smart way to make your travel experiences more meaningful and organized.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-card rounded-xl shadow-sm p-6 border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Interactive Maps</h3>
                <p className="text-muted-foreground">
                  Visualize your travels with beautiful interactive maps that tell your story.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-card rounded-xl shadow-sm p-6 border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Travel Analytics</h3>
                <p className="text-muted-foreground">
                  Gain insights about your travel patterns, preferences, and spending.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-card rounded-xl shadow-sm p-6 border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Social Sharing</h3>
                <p className="text-muted-foreground">
                  Connect with friends and share your adventures with your network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
