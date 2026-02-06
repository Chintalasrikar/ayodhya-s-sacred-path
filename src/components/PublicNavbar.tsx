import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, MapPin, LogIn } from 'lucide-react';
import { useState } from 'react';

const PublicNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-saffron flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-lg font-bold text-foreground leading-tight">
                Ayodhya Tourism
              </h1>
              <p className="text-xs text-muted-foreground">Guide Welfare Association</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('guides')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Guides
            </button>
            <button 
              onClick={() => scrollToSection('places')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Tourist Places
            </button>
            <button 
              onClick={() => scrollToSection('packages')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Packages
            </button>
            <Link to="/login">
              <Button className="bg-gradient-saffron hover:opacity-90 text-primary-foreground gap-2">
                <LogIn className="w-4 h-4" />
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('guides')}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Guides
              </button>
              <button 
                onClick={() => scrollToSection('places')}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Tourist Places
              </button>
              <button 
                onClick={() => scrollToSection('packages')}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Packages
              </button>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gradient-saffron hover:opacity-90 text-primary-foreground gap-2">
                  <LogIn className="w-4 h-4" />
                  Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default PublicNavbar;
