import { MapPin, Clock } from 'lucide-react';
import { TouristPlace } from '@/data/mockData';

interface PlaceCardProps {
  place: TouristPlace;
  onClick?: () => void;
  showFullDetails?: boolean;
}

const PlaceCard = ({ place, onClick, showFullDetails = false }: PlaceCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 cursor-pointer card-glow border border-border"
    >
      <div className="relative">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-xs font-medium text-primary-foreground">{place.category}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-foreground mb-2">
          {place.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {place.description}
        </p>
        
        {showFullDetails && (
          <div className="space-y-2 mb-3 p-3 bg-muted/50 rounded-lg">
            <p className="text-sm text-foreground">
              <strong>Significance:</strong> {place.significance}
            </p>
          </div>
        )}
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{place.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-primary" />
            <span className="truncate">{place.timings}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
