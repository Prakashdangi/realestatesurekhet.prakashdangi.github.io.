import { useState } from 'react';
import { ContactInquiry } from '@/types/property';
import { Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactInquiry>({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyInterest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending email (in production, this would call a backend API)
    try {
      // Create mailto link as fallback for demo
      const subject = encodeURIComponent(`New Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Property Interest: ${formData.propertyInterest || 'General Inquiry'}\n\n` +
        `Message:\n${formData.message}`
      );
      
      // Open email client
      window.location.href = `mailto:dcpercash19@gmail.com?subject=${subject}&body=${body}`;
      
      setIsSubmitted(true);
      toast.success('Opening your email client to send the inquiry!');
      
      // Reset form after delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          propertyInterest: '',
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-2xl p-8 text-center animate-fade-in">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
          Thank You!
        </h3>
        <p className="text-muted-foreground">
          Your inquiry has been prepared. Please send the email to complete your submission.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card">
      <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
        Send Us a Message
      </h3>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input-field"
            required
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="input-field"
            required
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="input-field"
            required
            placeholder="+1 (234) 567-890"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Property Interest
          </label>
          <select
            value={formData.propertyInterest}
            onChange={(e) => setFormData({ ...formData, propertyInterest: e.target.value })}
            className="input-field"
          >
            <option value="">Select property type</option>
            <option value="house">House</option>
            <option value="land">Land</option>
            <option value="apartment">Apartment</option>
            <option value="commercial">Commercial</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Message *
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="input-field min-h-[120px]"
            required
            placeholder="Tell us about your property needs..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Inquiry
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
