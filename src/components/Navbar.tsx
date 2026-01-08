import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Products',
    path: '/products'
  }, {
    name: 'About Us',
    path: '/about'
  }, {
    name: 'Contact Us',
    path: '/contact'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-nav">
      <div className="container-main">
        <div className="flex items-center justify-between h-20 px-4">
          <Link to="/" className="flex items-center gap-3">
            <img alt="Real Estate Surkhet" className="h-12 w-auto" src="/lovable-uploads/c2bc3f30-e81a-4442-9a61-3ce44c0ff2ed.png" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`nav-link py-2 ${isActive(link.path) ? 'text-secondary after:w-full' : ''}`}>
                {link.name}
              </Link>)}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden bg-card border-t border-border animate-fade-in">
            <div className="flex flex-col py-4">
              {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`px-6 py-3 font-medium transition-colors ${isActive(link.path) ? 'text-secondary bg-muted' : 'text-foreground hover:bg-muted'}`}>
                  {link.name}
                </Link>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;