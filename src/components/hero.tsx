import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const aiLogos = [
  { name: 'ChatGPT', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
  { name: 'Perplexity', logo: 'https://seeklogo.com/images/P/perplexity-ai-logo-360E2A5D77-seeklogo.com.png' },
  { name: 'Gemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
  { name: 'Claude', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Anthropic_logo.svg' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 blur-[100px] rounded-full -z-10 animate-float" />

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-primary text-sm font-semibold mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>The World's #1 WordPress GEO Tool</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[1.1]"
        >
          Be the answer AI gives <br />
          <span className="text-gradient">to your customer.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-xl text-muted-foreground mb-12 leading-relaxed"
        >
          Gleo turns your WordPress site into the definitive data layer for ChatGPT, Perplexity, and Gemini. Stop being bypassed—start being quoted.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Button
            size="lg"
            className="rounded-full px-8 h-14 text-lg bg-gradient-persistent hover:scale-105 transition-smooth shadow-elegant"
            onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Run Free AI Visibility Audit Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 h-14 text-lg border-2 hover:bg-muted transition-smooth"
            onClick={() => window.open('https://wordpress.org/plugins/gleo', '_blank')}
          >
            <Download className="mr-2 w-5 h-5" />
            Install Free Plugin
          </Button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-30" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-10 w-6 h-6 bg-secondary rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
    </section>
  );
}