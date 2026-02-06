import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Menu, 
  X, 
  LayoutDashboard, 
  Users, 
  Building, 
  Package, 
  MessageSquare, 
  LogOut 
} from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/guides', label: 'Guides', icon: Users },
  { to: '/places', label: 'Tourist Places', icon: Building },
  { to: '/packages', label: 'Packages', icon: Package },
  { to: '/enquiry', label: 'Enquiry', icon: MessageSquare },
];

const AuthNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { logout, user } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-saffron flex items-center justify-center">
              <span className="text-xl font-display text-primary-foreground">ॐ</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-lg font-bold text-foreground leading-tight">
                Ayodhya Tourism
              </h1>
              <p className="text-xs text-muted-foreground">Guide Welfare Association</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </div>

          {/* User & Logout */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Jai Shri Ram, <span className="font-medium text-foreground">{user?.name}</span>
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={logout}
              className="gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
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
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive(link.to)
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted'
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border mt-2 pt-4">
                <p className="text-sm text-muted-foreground px-3 mb-3">
                  Jai Shri Ram, <span className="font-medium text-foreground">{user?.name}</span>
                </p>
                <Button
                  variant="outline"
                  onClick={() => { logout(); setIsMenuOpen(false); }}
                  className="w-full gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AuthNavbar;
