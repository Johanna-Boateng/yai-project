
import { Shield, Leaf, Clock, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Leaf,
    title: "100% Natural Ingredients",
    description: "Made from certified organic herbs and plant extracts that effectively repel mosquitoes without harming your health."
  },
  {
    icon: Shield,
    title: "Safe for Family & Pets",
    description: "Free from DEET, parabens, and other harmful chemicals, making it safe to use around children and pets."
  },
  {
    icon: Clock,
    title: "Long-lasting Protection",
    description: "Each coil provides up to 8 hours of continuous protection, perfect for overnight use or outdoor gatherings."
  },
  {
    icon: CheckCircle,
    title: "Eco-Friendly Formula",
    description: "Biodegradable and environmentally responsible, with sustainable packaging made from recycled materials."
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "glass-card p-8 transition-all duration-700 ease-out card-hover",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="h-12 w-12 rounded-full bg-mosqui-100 flex items-center justify-center mb-6">
        <feature.icon className="h-6 w-6 text-mosqui-700" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  );
};

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-mosqui-50">
      <div className="section-container">
        <div 
          ref={ref}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-mosqui-100 text-mosqui-800 text-xs font-medium tracking-wide mb-4">
            Premium Quality
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Natural Protection Without Compromise</h2>
          <p className="text-lg text-muted-foreground">
            Our herbal mosquito coils combine ancient wisdom with modern innovation to create a product that's both effective and safe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
