import { Clock, Star, Check } from 'lucide-react';
import { TourPackage } from '@/data/mockData';
import { Button } from '@/components/ui/button';

interface PackageCardProps {
  pkg: TourPackage;
  onClick?: () => void;
  showFullDetails?: boolean;
}

const PackageCard = ({ pkg, onClick, showFullDetails = false }: PackageCardProps) => {
  return (
    <div
      onClick={onClick}
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
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-foreground mb-2">
          {pkg.name}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {pkg.highlights.slice(0, 3).map((highlight, index) => (
            <span
              key={index}
              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
            >
              {highlight}
            </span>
          ))}
        </div>

        {showFullDetails && (
          <div className="space-y-3 mb-4">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Includes:</h4>
              <div className="space-y-1">
                {pkg.includes.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between pt-3 border-t border-border">
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
  );
};

export default PackageCard;
