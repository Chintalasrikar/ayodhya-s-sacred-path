import { useState } from 'react';
import AuthNavbar from '@/components/AuthNavbar';
import PlaceCard from '@/components/PlaceCard';
import { touristPlaces, TouristPlace } from '@/data/mockData';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MapPin, Clock } from 'lucide-react';

const Places = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedPlace, setSelectedPlace] = useState<TouristPlace | null>(null);

  const allCategories = [...new Set(touristPlaces.map(p => p.category))];

  const filteredPlaces = touristPlaces.filter((place) => {
    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || place.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <AuthNavbar />
      
      <main className="pt-20 lg:pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">
              Sacred Tourist Places
            </h1>
            <p className="text-muted-foreground">
              Discover the divine temples, ghats, and spiritual sites of holy Ayodhya.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-card rounded-xl p-4 mb-8 border border-border shadow-soft">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search places..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {allCategories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredPlaces.length} places
            </p>
          </div>

          {/* Places Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlaces.map((place) => (
              <PlaceCard 
                key={place.id} 
                place={place}
                onClick={() => setSelectedPlace(place)}
              />
            ))}
          </div>

          {filteredPlaces.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No places found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      {/* Place Detail Modal */}
      <Dialog open={!!selectedPlace} onOpenChange={() => setSelectedPlace(null)}>
        <DialogContent className="max-w-3xl">
          {selectedPlace && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">{selectedPlace.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <img 
                  src={selectedPlace.image} 
                  alt={selectedPlace.name}
                  className="w-full h-72 object-cover rounded-lg"
                />
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{selectedPlace.location}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/20 px-3 py-1.5 rounded-full">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium">{selectedPlace.timings}</span>
                  </div>
                  <span className="bg-accent/20 text-accent px-3 py-1.5 rounded-full text-sm font-medium">
                    {selectedPlace.category}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">About</h3>
                  <p className="text-muted-foreground">{selectedPlace.description}</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-display text-lg font-semibold mb-2">Spiritual Significance</h3>
                  <p className="text-muted-foreground">{selectedPlace.significance}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Places;
