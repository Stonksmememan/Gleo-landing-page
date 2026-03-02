import { Play, Star, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function TrustVideo() {
  return (
    <section className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        {/* Trust Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-smooth">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">5,000+</div>
              <div className="text-sm text-muted-foreground">Active Installs</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-smooth">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">4.9/5</div>
              <div className="text-sm text-muted-foreground">on WordPress.org</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-smooth">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl font-bold">Join Thousands</div>
              <div className="text-sm text-muted-foreground">getting AI referrals</div>
            </div>
          </motion.div>
        </div>

        {/* Video Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">See Gleo in Action (60 seconds)</h2>
            <p className="text-lg text-muted-foreground">Watch instant audit → auto-optimization → real AI citations appear</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group border-4 border-white/10"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Stw0LRJtrE0"
              title="Gleo in Action"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
