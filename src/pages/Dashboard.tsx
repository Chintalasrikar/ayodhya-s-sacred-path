import AuthNavbar from '@/components/AuthNavbar';
import { useAuth } from '@/contexts/AuthContext';
import GuideCard from '@/components/GuideCard';
import PlaceCard from '@/components/PlaceCard';
import PackageCard from '@/components/PackageCard';
import { guides, touristPlaces, tourPackages } from '@/data/mockData';
import { Sparkles, TrendingUp, MapPin, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <AuthNavbar />
      
      <main className="pt-20 lg:pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="bg-gradient-saffron rounded-2xl p-6 md:p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-primary-foreground">Welcome to your Dashboard</span>
              </div>
              
              <h1 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                Jai Shri Ram, {user?.name}! 🙏
              </h1>
              <p className="text-primary-foreground/90 max-w-2xl">
                Welcome to the spiritual journey of Ayodhya. Explore our certified guides, 
                sacred places, and curated tour packages for an unforgettable pilgrimage experience.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-card rounded-xl p-4 border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Active Guides</p>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground">50+</p>
              <p className="text-sm text-muted-foreground">Sacred Places</p>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground">20+</p>
              <p className="text-sm text-muted-foreground">Tour Packages</p>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground">10K+</p>
              <p className="text-sm text-muted-foreground">Happy Pilgrims</p>
            </div>
          </div>

          {/* Featured Guides */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                Featured Guides
              </h2>
              <button 
                onClick={() => navigate('/guides')}
                className="text-sm text-primary hover:underline"
              >
                View All →
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.slice(0, 3).map((guide) => (
                <GuideCard key={guide.id} guide={guide} onClick={() => navigate('/guides')} />
              ))}
            </div>
          </section>

          {/* Popular Places */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                Popular Tourist Places
              </h2>
              <button 
                onClick={() => navigate('/places')}
                className="text-sm text-primary hover:underline"
              >
                View All →
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {touristPlaces.slice(0, 4).map((place) => (
                <PlaceCard key={place.id} place={place} onClick={() => navigate('/places')} />
              ))}
            </div>
          </section>

          {/* Recommended Packages */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                Recommended Packages
              </h2>
              <button 
                onClick={() => navigate('/packages')}
                className="text-sm text-primary hover:underline"
              >
                View All →
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tourPackages.slice(0, 3).map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} onClick={() => navigate('/packages')} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
