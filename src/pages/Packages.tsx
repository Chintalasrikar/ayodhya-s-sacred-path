import { useState } from 'react';
import AuthNavbar from '@/components/AuthNavbar';
import { tourPackages, TourPackage } from '@/data/mockData';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Clock, Star, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Packages = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [durationFilter, setDurationFilter] = useState('all');
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);

  const filteredPackages = tourPackages.filter((pkg) => {
    const matchesSearch = pkg.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDuration = durationFilter === 'all' ||
      (durationFilter === '1day' && pkg.duration.includes('1 Day')) ||
      (durationFilter === '2days' && pkg.duration.includes('2 Days')) ||
      (durationFilter === '3days' && pkg.duration.includes('3 Days'));

    return matchesSearch && matchesDuration;
  });

  return (
    <div className="min-h-screen bg-background">
      <AuthNavbar />
      
      <main className="pt-20 lg:pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">
              Tour Packages
            </h1>
            <p className="text-muted-foreground">
              Choose from our curated spiritual tour packages for a complete Ayodhya experience.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-card rounded-xl p-4 mb-8 border border-border shadow-soft">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search packages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={durationFilter} onValueChange={setDurationFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Durations</SelectItem>
                  <SelectItem value="1day">1 Day</SelectItem>
                  <SelectItem value="2days">2 Days</SelectItem>
                  <SelectItem value="3days">3 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredPackages.length} packages
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg)}
                className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 cursor-pointer card-glow border border-border"
              >
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{pkg.duration}</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-secondary text-secondary" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {pkg.name}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 mb-4">
                    {pkg.includes.slice(0, 3).map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-2xl font-bold text-primary">₹{pkg.price.toLocaleString()}</span>
                      <span className="text-xs text-muted-foreground">/person</span>
                    </div>
                    <Button size="sm" className="bg-gradient-saffron hover:opacity-90 text-primary-foreground">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Package Detail Modal */}
      <Dialog open={!!selectedPackage} onOpenChange={() => setSelectedPackage(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedPackage && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">{selectedPackage.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <img 
                  src={selectedPackage.image} 
                  alt={selectedPackage.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{selectedPackage.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/20 px-3 py-1.5 rounded-full">
                    <Star className="w-4 h-4 fill-secondary text-secondary" />
                    <span className="text-sm font-medium">{selectedPackage.rating} Rating</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-display text-lg font-semibold mb-3">Package Includes</h3>
                    <div className="space-y-2">
                      {selectedPackage.includes.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-display text-lg font-semibold mb-3">Highlights</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPackage.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold mb-3">Itinerary</h3>
                  <div className="space-y-3">
                    {selectedPackage.itinerary.map((item, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-saffron flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-primary-foreground">{index + 1}</span>
                        </div>
                        <p className="text-muted-foreground pt-1">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-divine rounded-lg">
                  <div>
                    <p className="text-sm text-muted-foreground">Price per person</p>
                    <p className="text-3xl font-bold text-primary">₹{selectedPackage.price.toLocaleString()}</p>
                  </div>
                  <Button size="lg" className="bg-gradient-saffron hover:opacity-90 text-primary-foreground">
                    Book This Package
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Packages;
