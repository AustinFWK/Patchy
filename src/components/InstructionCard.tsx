import { Card, CardContent } from "./ui/card";
import { type Instruction } from "@/data/instructions";

function renderWithCommands(description: string, commands: string[]) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  const regex = /\{command\[(\d+)\]\}/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(description)) !== null) {
    const cmdIndex = parseInt(match[1], 10);
    parts.push(
      <span key={lastIndex}>{description.slice(lastIndex, match.index)}</span>,
    );
    parts.push(
      <code
        key={match.index}
        className="text-sm font-mono bg-muted border border-border rounded px-1.5 py-0.5 text-brand-accent"
      >
        {commands[cmdIndex]}
      </code>,
    );
    lastIndex = match.index + match[0].length;
  }
  parts.push(<span key={lastIndex}>{description.slice(lastIndex)}</span>);
  return parts;
}

interface InstructionStepsProps {
  instruction: Instruction;
}

export function InstructionSteps({ instruction }: InstructionStepsProps) {
  const { step, title, description, command } = instruction;
  return (
    <div className="grid gap-12 items-center md:grid-cols-2">
      <Card className="border-border bg-muted/50">
        <CardContent className="p-8 space-y-4">
          <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-brand-accent/10 text-brand-accent border border-brand-accent/25 rounded px-2 py-0.5">
            Step {step}
          </span>

          <h3>{title}</h3>

          <div className="text-muted-foreground text-sm leading-relaxed space-y-2">
            {command ? (
              description
                .split("\n")
                .map((line) => line.trim())
                .filter(Boolean)
                .map((line, i) => (
                  <p key={i}>{renderWithCommands(line, command)}</p>
                ))
            ) : (
              <p>{description}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
