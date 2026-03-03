import { Check, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { cn } from '@/lib/utils';

const tiers = [
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '#',
    price: '$59',
    description: 'Advanced SEO features for professional WordPress sites.',
    features: [
      '1 Free GEO Audit (Get Started)',
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
            Professional GEO, Starting at $0
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Get your first GEO audit for free. Low initial cost, powerful results. 
            Upgrade to Pro for just $59/month to unlock unlimited automation.
          </p>
        </div>
        <div className="mx-auto mt-16 flex justify-center sm:mt-20">
          {tiers.map((tier) => (
            <Card
              key={tier.id}
              className={cn(
                'relative flex flex-col justify-between transition-all duration-300 hover:shadow-elegant border-2 max-w-md w-full',
                tier.mostPopular ? 'border-primary shadow-elegant bg-background' : 'border-transparent bg-background/50'
              )}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold rounded-full shadow-lg">
                Recommended
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-display font-bold">{tier.name}</CardTitle>
                <CardDescription className="mt-4 flex items-baseline gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-foreground">{tier.price}</span>
                  <span className="text-sm font-semibold leading-6 text-muted-foreground">/month</span>
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
                    'bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-elegant'
                  )}
                  onClick={() => tier.href !== '#' && window.open(tier.href, '_blank')}
                >
                  <Zap className="mr-2 h-5 w-5 fill-current" />
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
