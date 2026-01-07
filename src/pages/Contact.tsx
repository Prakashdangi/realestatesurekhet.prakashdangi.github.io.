import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container-main px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Have questions or ready to start your property journey? 
            Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-main px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Get in Touch
              </h2>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking to buy your dream home, sell your property, 
                or simply have questions about the real estate market, our team is 
                here to help. Reach out to us through any of the channels below, 
                or fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                    <p className="text-muted-foreground">
                      123 Real Estate Avenue, Suite 100<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <Phone size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                    <a
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <Mail size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                    <a
                      href="mailto:dcpercash19@gmail.com"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      dcpercash19@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <Clock size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-muted rounded-xl h-64 flex items-center justify-center">
                <p className="text-muted-foreground">Map integration available</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted">
        <div className="container-main px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'How do I list my property on your platform?',
                answer: 'Simply navigate to our Products page and click "Add Property" to create a new listing. Fill in the property details and submit your listing for review.',
              },
              {
                question: 'How long does it typically take to sell a property?',
                answer: 'The time to sell varies based on property type, location, and market conditions. On average, properties on our platform sell within 30-90 days.',
              },
              {
                question: 'Do you charge any fees for listing properties?',
                answer: 'Basic listings are free. We offer premium features for enhanced visibility. Contact us for more information about our pricing options.',
              },
              {
                question: 'How can I schedule a property viewing?',
                answer: 'Use our contact form or call us directly to schedule a viewing. Our team will coordinate with the property owner and get back to you within 24 hours.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card">
                <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
