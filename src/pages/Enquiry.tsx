import { useState } from 'react';
import AuthNavbar from '@/components/AuthNavbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Loader2, Send, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Enquiry = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Enquiry submitted successfully! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <AuthNavbar />
      
      <main className="pt-20 lg:pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Have Questions? <span className="text-gradient-saffron">Contact Us</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're here to help you plan your perfect spiritual journey. 
              Send us your enquiry and we'll get back to you promptly.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-card rounded-xl p-6 border border-border shadow-soft">
                <div className="w-12 h-12 rounded-full bg-gradient-saffron flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border shadow-soft">
                <div className="w-12 h-12 rounded-full bg-gradient-saffron flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@ayodhyatourism.org</p>
                <p className="text-muted-foreground">booking@ayodhyatourism.org</p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border shadow-soft">
                <div className="w-12 h-12 rounded-full bg-gradient-saffron flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Office Address</h3>
                <p className="text-muted-foreground">
                  Tourist Guide Welfare Association<br />
                  Near Ram Janmabhoomi<br />
                  Ayodhya, Uttar Pradesh - 224123
                </p>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-soft">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-saffron flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold">Send Your Enquiry</h2>
                    <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select 
                        value={formData.subject} 
                        onValueChange={(value) => setFormData(prev => ({ ...prev, subject: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="guide-booking">Guide Booking</SelectItem>
                          <SelectItem value="package-enquiry">Package Enquiry</SelectItem>
                          <SelectItem value="custom-tour">Custom Tour</SelectItem>
                          <SelectItem value="group-booking">Group Booking</SelectItem>
                          <SelectItem value="general">General Enquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your enquiry, travel dates, group size, special requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-saffron hover:opacity-90 text-primary-foreground"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Enquiry
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Divine Quote */}
          <div className="text-center mt-12 p-6 bg-gradient-divine rounded-xl max-w-2xl mx-auto">
            <p className="font-display text-xl text-primary italic">
              "॥ मनुष्य को परमात्मा की खोज में जाना चाहिए, क्योंकि वही सत्य है ॥"
            </p>
            <p className="text-muted-foreground mt-2 text-sm">
              One should seek the Divine, for that alone is the Truth
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Enquiry;
