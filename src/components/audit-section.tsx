import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function AuditSection() {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !email) {
      toast.error('Please enter both your URL and email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Audit Running!', {
        description: 'Analyzing visibility in ChatGPT, Gemini, and Claude... We will email your report within 30 seconds.',
        duration: 5000,
      });
      setUrl('');
      setEmail('');
    }, 2000);
  };

  return (
    <section id="audit" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-[3rem] p-8 md:p-16 glass border-2 border-primary/20 shadow-2xl relative"
        >
          {/* Decorative Sparks */}
          <Sparkles className="absolute -top-6 -right-6 w-12 h-12 text-primary animate-float" />
          <Sparkles className="absolute -bottom-6 -left-6 w-8 h-8 text-secondary animate-float" style={{ animationDelay: '1s' }} />

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">See If AI Is <span className="text-gradient">Ignoring Your Site</span></h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our AI visibility engine scans your site across ChatGPT, Perplexity, Gemini, and Claude to see how much organic traffic you are losing.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="url"
                placeholder="https://your-site.com"
                className="h-14 rounded-2xl bg-background/50 border-border/50 focus:border-primary px-6 text-lg"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="your@email.com"
                className="h-14 rounded-2xl bg-background/50 border-border/50 focus:border-primary px-6 text-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-16 rounded-2xl bg-gradient-persistent hover:scale-105 transition-smooth text-lg font-bold shadow-elegant group relative overflow-hidden"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin mr-2" />
                  Running AI Audit...
                </>
              ) : (
                <>
                  Run Free AI Visibility Audit
                  <ArrowRight className="ml-2 w-6 h-6 transition-smooth group-hover:translate-x-1" />
                </>
              )}
            </Button>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">• No signup required</span>
              <span className="flex items-center gap-1.5">• Results in &lt; 30 seconds</span>
              <span className="flex items-center gap-1.5">• 100% private & secure</span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
