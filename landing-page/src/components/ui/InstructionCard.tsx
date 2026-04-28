import { Card, CardContent } from "./card";
import { type Instruction } from "@/data/instructions";

interface InstructionStepsProps {
  instruction: Instruction;
}

export function InstructionSteps({ instruction }: InstructionStepsProps) {
  const { step, title, description, reverse } = instruction;
  return (
    <div
      className={`grid gap-12 items-center md:grid-cols-2 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Card className="border-muted">
        <CardContent className="p-8 space-y-4">
          <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-brand-accent/10 text-brand-accent border border-brand-accent/25 rounded px-2 py-0.5">
            Step {step}
          </span>

          <h3>{title}</h3>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>

      <div className="rounded-xl overflow-hidden border border-white/10">
        {/* Discord-style titlebar */}
        <div className="bg-[#1e1f22] px-4 py-2.5 flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <span className="text-[11px] text-white/40 font-medium mx-auto">
            Valorant Patch Bot
          </span>
        </div>
      </div>
    </div>
  );
}
