export type Instruction = {
  step: string;
  title: string;
  description: string;
  command?: string[];
};

export const instructions: Instruction[] = [
  {
    step: "1",
    title: "Invite the bot",
    description: "Add the bot to your discord server with a few clicks.",
  },
  {
    step: "2",
    title: "Choose a channel",
    description: `Type {command[0]} in any channel to set it as the destination for patch notes.
      Type {command[1]} to stop patchnotes from being sent to that channel.`,
    command: ["!setchannel valorant", "!clearchannel valorant"],
  },
  {
    step: "3",
    title: "Receive patchnotes",
    description:
      "Every time Valorant drops a patch, your server gets a clean, formatted summary automatically. No monitoring needed.",
  },
];
