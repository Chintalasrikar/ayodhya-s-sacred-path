import { Star } from 'lucide-react';
import { Guide } from '@/data/mockData';

interface GuideCardProps {
  guide: Guide;
  onClick?: () => void;
  showFullDetails?: boolean;
}

const GuideCard = ({ guide, onClick, showFullDetails = false }: GuideCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 cursor-pointer card-glow border border-border"
    >
      <div className="relative">
        <img
          src={guide.image}
          alt={guide.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star className="w-4 h-4 fill-secondary text-secondary" />
          <span className="text-sm font-medium">{guide.rating}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-foreground mb-1">
          {guide.name}
        </h3>
        <p className="text-sm text-primary font-medium mb-2">
          {guide.specialization}
        </p>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {guide.description}
        </p>
        
        {showFullDetails && (
          <div className="space-y-2 mb-3">
            <p className="text-sm">
              <span className="text-muted-foreground">Experience:</span>{' '}
              <span className="font-medium">{guide.experience} years</span>
            </p>
            <p className="text-sm">
              <span className="text-muted-foreground">Languages:</span>{' '}
              <span className="font-medium">{guide.languages.join(', ')}</span>
            </p>
          </div>
        )}
        
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="text-xs text-muted-foreground">
            {guide.reviews} reviews
          </span>
          <span className="text-lg font-bold text-primary">
            ₹{guide.price}<span className="text-xs font-normal text-muted-foreground">/day</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
