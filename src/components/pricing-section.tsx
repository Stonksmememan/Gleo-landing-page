import { Check, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { cn } from '@/lib/utils';

const tiers = [
  {
    name: 'Free',
    id: 'tier-free',
    href: 'https://wordpress.org/plugins/gleo',
    price: '$0',
    description: 'Perfect for getting started with SEO automation.',
    features: [
      'Basic SEO Analysis',
      'AI Content Generation (Limited)',
      'Meta Tag Optimization',
      'Sitemap Generation',
      'Community Support',
    ],
    buttonText: 'Install Free Plugin',
    mostPopular: false,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '#',
    price: '$59',
    description: 'Advanced features for professional websites.',
    features: [
      'Everything in Free',
      'Unlimited AI Content Generation',
      'Competitor Analysis',
      'Bulk Optimization',
      'Priority Email Support',
      'Custom Branding',
    ],
    buttonText: 'Get Started with Pro',
    mostPopular: true,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
          <p className="mt-2 text-4xl font-display font-bold tracking-tight text-foreground sm:text-5xl">
            Simple, transparent pricing
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the plan that's right for you and start optimizing your WordPress site today.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-4xl lg:grid-cols-2 lg:gap-x-8">
          {tiers.map((tier) => (
            <Card
              key={tier.id}
              className={cn(
                'relative flex flex-col justify-between transition-all duration-300 hover:shadow-elegant border-2',
                tier.mostPopular ? 'border-primary shadow-elegant bg-background' : 'border-transparent bg-background/50'
              )}
            >
              {tier.mostPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-display font-bold">{tier.name}</CardTitle>
                <CardDescription className="mt-4 flex items-baseline gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-foreground">{tier.price}</span>
                  <span className="text-sm font-semibold leading-6 text-muted-foreground">/lifetime</span>
                </CardDescription>
                <p className="mt-6 text-base leading-7 text-muted-foreground">{tier.description}</p>
              </CardHeader>
              <CardContent className="mt-8">
                <ul role="list" className="space-y-4 text-sm leading-6 text-muted-foreground">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-8">
                <Button
                  className={cn(
                    'w-full rounded-full py-6 text-base font-bold transition-all duration-300',
                    tier.mostPopular
                      ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-elegant'
                      : 'bg-muted hover:bg-muted/80 text-foreground'
                  )}
                  onClick={() => tier.href !== '#' && window.open(tier.href, '_blank')}
                >
                  {tier.name === 'Pro' && <Zap className="mr-2 h-5 w-5 fill-current" />}
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
