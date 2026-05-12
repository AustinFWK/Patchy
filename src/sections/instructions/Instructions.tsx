import { InstructionSteps } from "@/components/InstructionCard";
import { instructions } from "@/data/instructions";

export default function Instructions() {
  return (
    <section className="section">
      <div className="container space-y-24">
        <p
          className="text-xs font-bold tracking-widest uppercase text-brand-accent
        mb-2"
        >
          How it works
        </p>
        <h2 className="mb-3">How to get started</h2>
        <p className="text-muted-foreground mb-10 text-lg">
          Patch notes at your server tips.
        </p>
        {instructions.map((instruction) => (
          <InstructionSteps key={instruction.title} instruction={instruction} />
        ))}
      </div>
    </section>
  );
}
