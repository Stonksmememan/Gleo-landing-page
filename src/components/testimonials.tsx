import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Doubled my leads in a month! Finally visible in generative answers.",
    author: "Sarah K.",
    role: "Life Coach",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    quote: "Finally visible in Perplexity. This is the missing piece for AI-era GEO.",
    author: "Mike T.",
    role: "Local Business Owner",
    avatar: "https://i.pravatar.cc/150?u=mike",
  },
  {
    quote: "The easiest way to get your content cited. One click and you're done.",
    author: "Elena R.",
    role: "Blogger & Freelancer",
    avatar: "https://i.pravatar.cc/150?u=elena",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted by AI-Era Pioneers</h2>
          <p className="text-lg text-muted-foreground">Join thousands of businesses who have already claimed their spot in AI answers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl glass border border-border/50 relative hover:shadow-elegant transition-smooth"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/10" />
              <p className="text-lg italic mb-8 relative z-10">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full border-2 border-primary/20" />
                <div>
                  <div className="font-bold">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
