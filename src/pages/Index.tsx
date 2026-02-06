import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PublicNavbar from '@/components/PublicNavbar';
import GuideCard from '@/components/GuideCard';
import PlaceCard from '@/components/PlaceCard';
import PackageCard from '@/components/PackageCard';
import { guides, touristPlaces, tourPackages } from '@/data/mockData';
import { ArrowRight, MapPin, Users, Sparkles, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-ayodhya.jpg';

const Index = () => {
  const navigate = useNavigate();

  const handleProtectedClick = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Ayodhya Ram Mandir"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-primary-foreground">Tourist Guide Welfare Association</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight">
              Experience the Divine
              <span className="block text-secondary">Spirit of Ayodhya</span>
            </h1>
            
            <p className="text-lg text-primary-foreground/90 mb-8 animate-fade-in-delay-1 max-w-xl">
              Embark on a sacred journey to the birthplace of Lord Shri Ram. 
              Book certified guides and explore curated spiritual tour packages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <Button
                size="lg"
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-saffron hover:opacity-90 text-primary-foreground gap-2 animate-glow-pulse"
              >
                Explore Packages
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('guides')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20"
              >
                Find a Guide
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in-delay-3">
              <div>
                <p className="text-3xl font-bold text-secondary">500+</p>
                <p className="text-sm text-primary-foreground/70">Certified Guides</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">50+</p>
                <p className="text-sm text-primary-foreground/70">Sacred Places</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">10k+</p>
                <p className="text-sm text-primary-foreground/70">Happy Pilgrims</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-divine bg-pattern-spiritual">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-card shadow-soft border border-border">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-saffron flex items-center justify-center">
                <Shield className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Certified Guides</h3>
              <p className="text-muted-foreground text-sm">
                All our guides are certified by the Tourist Guide Welfare Association with verified credentials.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card shadow-soft border border-border">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-saffron flex items-center justify-center">
                <MapPin className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Curated Experiences</h3>
              <p className="text-muted-foreground text-sm">
                Thoughtfully designed packages that cover all major spiritual sites and hidden gems.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card shadow-soft border border-border">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-saffron flex items-center justify-center">
                <Users className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Local Expertise</h3>
              <p className="text-muted-foreground text-sm">
                Guides with deep knowledge of local history, mythology, and spiritual significance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Guides Section */}
      <section id="guides" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our <span className="text-gradient-saffron">Top Guides</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced and certified guides who will make your spiritual journey memorable with their knowledge and devotion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.slice(0, 4).map((guide) => (
              <GuideCard key={guide.id} guide={guide} onClick={handleProtectedClick} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button
              size="lg"
              variant="outline"
              onClick={handleProtectedClick}
              className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View All Guides
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Tourist Places Section */}
      <section id="places" className="py-20 bg-gradient-divine bg-pattern-spiritual">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sacred <span className="text-gradient-saffron">Tourist Places</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the divine temples and sacred sites that make Ayodhya one of the holiest cities in India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {touristPlaces.slice(0, 4).map((place) => (
              <PlaceCard key={place.id} place={place} onClick={handleProtectedClick} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button
              size="lg"
              variant="outline"
              onClick={handleProtectedClick}
              className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Explore All Places
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section id="packages" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured <span className="text-gradient-saffron">Tour Packages</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully curated packages designed to give you the complete spiritual experience of Ayodhya.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} onClick={handleProtectedClick} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-sunset relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-spiritual opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Begin Your Sacred Journey Today
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Join thousands of pilgrims who have experienced the divine blessings of Ayodhya with our certified guides.
          </p>
          <Button
            size="lg"
            onClick={handleProtectedClick}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2"
          >
            Login to Book Now
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-saffron flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold">Ayodhya Tourism</h3>
                  <p className="text-xs text-primary-foreground/70">Guide Welfare Association</p>
                </div>
              </div>
              <p className="text-sm text-primary-foreground/70">
                Promoting spiritual tourism and supporting certified tourist guides in Ayodhya.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><button onClick={() => document.getElementById('guides')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-secondary transition-colors">Our Guides</button></li>
                <li><button onClick={() => document.getElementById('places')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-secondary transition-colors">Tourist Places</button></li>
                <li><button onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-secondary transition-colors">Tour Packages</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>Ayodhya, Uttar Pradesh</li>
                <li>+91 XXXXX XXXXX</li>
                <li>info@ayodhyatourism.org</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Timings</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>Office: 9 AM - 6 PM</li>
                <li>Monday - Saturday</li>
                <li>Closed on major festivals</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>© 2024 Tourist Guide Welfare Association, Ayodhya. All rights reserved.</p>
            <p className="mt-2 font-display text-secondary">॥ जय श्री राम ॥</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
