import { BarChart, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const comparisonData = [
  { feature: 'AI Citation Tracking', gleo: true, seo: 'Limited', agency: true },
  { feature: 'Auto Schema Injection', gleo: 'One-Click', seo: 'Partial', agency: 'Manual' },
  { feature: 'Before/After Previews', gleo: true, seo: false, agency: 'Sometimes' },
  { feature: 'Pricing', gleo: '$59/mo Pro', seo: '$99+', agency: '$1k+/mo' },
  { feature: 'Setup Time', gleo: '60 seconds', seo: 'Hours', agency: 'Weeks' },
];

export function FeaturesComparison() {
  return (
    <section id="features" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Gleo Beats the Rest</h2>
          <p className="text-lg text-muted-foreground">Traditional SEO tools were built for links. Gleo was built for answers.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-3xl border border-border/50 overflow-hidden glass shadow-2xl"
        >
          <div className="grid grid-cols-4 bg-muted/30 py-6 border-b border-border/50 font-bold text-lg">
            <div className="px-4 md:px-8 text-left">Feature</div>
            <div className="px-4 text-center text-primary">Gleo</div>
            <div className="px-4 text-center">Yoast/Rank Math</div>
            <div className="px-4 text-center">Agencies</div>
          </div>

          {comparisonData.map((row, i) => (
            <div
              key={row.feature}
              className={cn(
                'grid grid-cols-4 py-6 border-b border-border/50 last:border-0 hover:bg-muted/20 transition-smooth',
                i % 2 === 0 ? 'bg-transparent' : 'bg-muted/10'
              )}
            >
              <div className="px-4 md:px-8 text-left font-medium">{row.feature}</div>
              <div className="px-4 text-center flex items-center justify-center font-bold text-primary">
                {typeof row.gleo === 'boolean' ? (
                  row.gleo ? <Check className="w-6 h-6" /> : <X className="w-6 h-6 text-muted-foreground" />
                ) : (
                  row.gleo
                )}
              </div>
              <div className="px-4 text-center flex items-center justify-center text-muted-foreground">
                {typeof row.seo === 'boolean' ? (
                  row.seo ? <Check className="w-6 h-6" /> : <X className="w-6 h-6" />
                ) : (
                  row.seo
                )}
              </div>
              <div className="px-4 text-center flex items-center justify-center text-muted-foreground">
                {typeof row.agency === 'boolean' ? (
                  row.agency ? <Check className="w-6 h-6" /> : <X className="w-6 h-6" />
                ) : (
                  row.agency
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
