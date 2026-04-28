export type Instruction = {
  step: string;
  title: string;
  description: string;
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
    description:
      "Run /setup and pick the channel where patch notes should be posted. Takes less than 30 seconds.",
  },
  {
    step: "3",
    title: "Receive patchnotes",
    description:
      "Every time Valorant drops a patch, your server gets a clean, formatted summary automatically. No monitoring needed.",
  },
];
