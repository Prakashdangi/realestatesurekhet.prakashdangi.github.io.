import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />

      {/* Content */}
      <div className="relative z-10 container-main px-4 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Find Your Dream
            <span className="block text-gradient">Property Today</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Connect with buyers and sellers. Negotiate online. Find the perfect land or home 
            that matches your vision and budget.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
            >
              Browse Properties
            </Link>
            <Link
              to="/contact"
              className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary inline-flex items-center justify-center text-lg px-8 py-4"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: '500+', label: 'Properties Sold' },
            { value: '1000+', label: 'Happy Clients' },
            { value: '15+', label: 'Years Experience' },
            { value: '50+', label: 'Expert Agents' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
