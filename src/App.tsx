import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { TrustVideo } from './components/trust-video';
import { FeaturesComparison } from './components/features-comparison';
import { Testimonials } from './components/testimonials';
import { AuditSection } from './components/audit-section';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <TrustVideo />
        <Testimonials />
        <FeaturesComparison />
        <AuditSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;