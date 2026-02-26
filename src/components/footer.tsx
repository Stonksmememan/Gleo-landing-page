import { Globe, Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t py-20 overflow-hidden relative">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white group-hover:scale-105 transition-smooth">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-2xl font-display font-bold">Gleo</span>
            </a>
            <p className="text-muted-foreground text-lg mb-8 max-w-sm">
              The revolutionary WordPress plugin helping small businesses and freelancers get cited in generative AI answers. Effortless GEO for everyone.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-smooth">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-smooth">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-smooth">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Product</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-smooth">Features</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-smooth">Pricing</a></li>
              <li><a href="#audit" className="hover:text-primary transition-smooth">Visibility Audit</a></li>
              <li><a href="https://wordpress.org/plugins/gleo" className="hover:text-primary transition-smooth">WordPress Plugin</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Cookie Settings</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 text-sm text-muted-foreground gap-4">
          <p>© {currentYear} Gleo. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <span>Built for the AI era.</span>
            <span className="w-1 h-1 bg-muted-foreground rounded-full" />
            <a href="#" className="hover:text-primary transition-smooth">System Status</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
