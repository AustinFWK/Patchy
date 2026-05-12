import { FeatureCard } from "@/components/FeatureCard";
import { features } from "@/data/features";

export default function Features() {
  const heroFeature = features.find((f) => f.tier === "hero");
  const midFeatures = features.filter((f) => f.tier === "mid");
  const chipFeatures = features.filter((f) => f.tier === "chip");

  return (
    <section className="section">
      <div className="container">
        <p className="text-xs font-bold tracking-widest uppercase text-brand-accent mb-2">
          Features
        </p>
        <h2 className="mb-3">Powerful but simple</h2>
        <p className="text-muted-foreground mb-10 text-lg">
          Everything you need. Nothing you don't.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {heroFeature && <FeatureCard feature={heroFeature} />}

          <div className="flex flex-col gap-3">
            {midFeatures.map((f) => (
              <FeatureCard key={f.title} feature={f} />
            ))}
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {chipFeatures.map((f) => (
              <FeatureCard key={f.title} feature={f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
