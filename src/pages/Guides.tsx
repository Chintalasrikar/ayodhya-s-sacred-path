import { useState } from 'react';
import AuthNavbar from '@/components/AuthNavbar';
import GuideCard from '@/components/GuideCard';
import { guides } from '@/data/mockData';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Guide } from '@/data/mockData';

const Guides = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [languageFilter, setLanguageFilter] = useState('all');
  const [experienceFilter, setExperienceFilter] = useState('all');
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  const allLanguages = [...new Set(guides.flatMap(g => g.languages))];

  const filteredGuides = guides.filter((guide) => {
    const matchesSearch = guide.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLanguage = languageFilter === 'all' || 
      guide.languages.includes(languageFilter);
    
    const matchesExperience = experienceFilter === 'all' ||
      (experienceFilter === '0-5' && guide.experience <= 5) ||
      (experienceFilter === '5-10' && guide.experience > 5 && guide.experience <= 10) ||
      (experienceFilter === '10+' && guide.experience > 10);

    return matchesSearch && matchesLanguage && matchesExperience;
  });

  return (
    <div className="min-h-screen bg-background">
      <AuthNavbar />
      
      <main className="pt-20 lg:pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">
              Our Certified Guides
            </h1>
            <p className="text-muted-foreground">
              Book experienced and certified guides for your spiritual journey in Ayodhya.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-card rounded-xl p-4 mb-8 border border-border shadow-soft">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search guides by name or specialization..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-4">
                <Select value={languageFilter} onValueChange={setLanguageFilter}>
                  <SelectTrigger className="w-40">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Languages</SelectItem>
                    {allLanguages.map((lang) => (
                      <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Experience</SelectItem>
                    <SelectItem value="0-5">0-5 years</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredGuides.length} guides
            </p>
          </div>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map((guide) => (
              <GuideCard 
                key={guide.id} 
                guide={guide} 
                showFullDetails
                onClick={() => setSelectedGuide(guide)}
              />
            ))}
          </div>

          {filteredGuides.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No guides found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      {/* Guide Detail Modal */}
      <Dialog open={!!selectedGuide} onOpenChange={() => setSelectedGuide(null)}>
        <DialogContent className="max-w-2xl">
          {selectedGuide && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-xl">{selectedGuide.name}</DialogTitle>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6">
                <img 
                  src={selectedGuide.image} 
                  alt={selectedGuide.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Specialization</p>
                    <p className="font-medium text-primary">{selectedGuide.specialization}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-medium">{selectedGuide.experience} years</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Languages</p>
                    <p className="font-medium">{selectedGuide.languages.join(', ')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Rating</p>
                    <p className="font-medium">⭐ {selectedGuide.rating} ({selectedGuide.reviews} reviews)</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Price</p>
                    <p className="text-2xl font-bold text-primary">₹{selectedGuide.price}/day</p>
                  </div>
                  <Button className="w-full bg-gradient-saffron hover:opacity-90 text-primary-foreground">
                    Book This Guide
                  </Button>
                </div>
              </div>
              <p className="text-muted-foreground mt-4">{selectedGuide.description}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Guides;
