import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PropertyCard from '@/components/PropertyCard';
import Footer from '@/components/Footer';
import { initialProperties } from '@/data/properties';
import { ArrowRight, Home, Map, Shield, Users } from 'lucide-react';

const Index = () => {
  const [properties] = useState(initialProperties);
  const featuredProperties = properties.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Introduction Section */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Welcome to <span className="text-secondary">Prime Properties</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Prime Properties is your premier destination for buying and selling real estate. 
              We bring together buyers and sellers in a seamless online marketplace, making property 
              transactions transparent, efficient, and rewarding. Whether you're looking for your 
              dream home, investment property, or land for development, we're here to help you 
              every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide exceptional service that sets us apart from the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Home,
                title: 'Wide Selection',
                description: 'Browse through hundreds of properties including homes, land, and commercial spaces.',
              },
              {
                icon: Shield,
                title: 'Secure Transactions',
                description: 'Our platform ensures safe and transparent negotiations between buyers and sellers.',
              },
              {
                icon: Users,
                title: 'Expert Support',
                description: 'Our team of experienced agents is always ready to assist you with your property needs.',
              },
              {
                icon: Map,
                title: 'Prime Locations',
                description: 'Find properties in the most sought-after locations across the country.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <feature.icon size={28} className="text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Properties
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Discover our handpicked selection of exceptional properties.
              </p>
            </div>
            <Link
              to="/products"
              className="btn-primary inline-flex items-center gap-2 self-start md:self-auto"
            >
              View All Properties
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                Our Mission
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                To revolutionize the real estate industry by providing a seamless, transparent, 
                and technology-driven platform that empowers buyers and sellers to make informed 
                decisions. We strive to make property transactions accessible, efficient, and 
                rewarding for everyone.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 md:p-12 text-secondary-foreground">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                Our Vision
              </h3>
              <p className="text-secondary-foreground/90 leading-relaxed">
                To become the most trusted and innovative real estate marketplace, where every 
                property transaction is a success story. We envision a future where finding 
                and negotiating for properties is as simple as a few clicks, backed by expert 
                guidance and cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-main text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Find Your Perfect Property?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Browse our extensive collection of properties or get in touch with our team 
            for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-secondary text-lg px-8 py-4">
              Browse Properties
            </Link>
            <Link
              to="/contact"
              className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
