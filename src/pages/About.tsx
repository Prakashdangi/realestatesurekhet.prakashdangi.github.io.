import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Eye, Heart, Award, Users, TrendingUp } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        
        <div className="relative container-main px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            About Prime Properties
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Your trusted partner in finding the perfect property since 2009. 
            We bring buyers and sellers together for seamless real estate transactions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-main px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                Prime Properties was founded in 2009 with a simple yet powerful vision: to transform 
                the way people buy and sell real estate. What started as a small family business has 
                grown into one of the most trusted names in the property market.
              </p>
              <p>
                Over the years, we've helped thousands of families find their dream homes, investors 
                discover lucrative opportunities, and sellers achieve the best value for their 
                properties. Our success is built on a foundation of trust, transparency, and an 
                unwavering commitment to our clients' satisfaction.
              </p>
              <p>
                Today, Prime Properties stands as a beacon of excellence in the real estate industry, 
                offering an innovative online platform that brings buyers and sellers together in a 
                seamless, efficient, and secure environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-main px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <Target size={32} className="text-secondary" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                Our Mission
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed text-lg">
                To revolutionize the real estate industry by providing a seamless, transparent, 
                and technology-driven platform that empowers buyers and sellers to make informed 
                decisions. We strive to make property transactions accessible, efficient, and 
                rewarding for everyone, regardless of their experience in the real estate market.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 md:p-12 text-secondary-foreground">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Eye size={32} className="text-primary" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                Our Vision
              </h3>
              <p className="text-secondary-foreground/90 leading-relaxed text-lg">
                To become the most trusted and innovative real estate marketplace globally, where 
                every property transaction is a success story. We envision a future where finding 
                and negotiating for properties is as simple as a few clicks, backed by expert 
                guidance and cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-main px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at Prime Properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Integrity',
                description: 'We operate with honesty and transparency in every transaction, building lasting trust with our clients.',
              },
              {
                icon: Users,
                title: 'Client-Centric',
                description: 'Our clients are at the heart of everything we do. We go above and beyond to exceed their expectations.',
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for excellence in all aspects of our service, from property listings to customer support.',
              },
              {
                icon: TrendingUp,
                title: 'Innovation',
                description: 'We embrace technology and new ideas to continuously improve the property buying and selling experience.',
              },
              {
                icon: Target,
                title: 'Commitment',
                description: 'We are dedicated to helping our clients achieve their real estate goals, no matter how big or small.',
              },
              {
                icon: Eye,
                title: 'Transparency',
                description: 'We believe in open communication and clear processes, ensuring our clients are always informed.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <value.icon size={28} className="text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container-main px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Properties Sold' },
              { value: '1000+', label: 'Happy Clients' },
              { value: '15+', label: 'Years Experience' },
              { value: '50+', label: 'Expert Agents' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
