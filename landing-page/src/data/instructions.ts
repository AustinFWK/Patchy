export type Instruction = {
  step: string;
  title: string;
  description: string;
  reverse?: boolean;
};

export const instructions: Instruction[] = [
  {
    step: "1",
    title: "Invite the bot",
    description: "Add the bot to your discord server in seconds.",
  },
  {
    step: "2",
    title: "Choose a channel",
    description: "Select which channel you would like patch notes posted in.",
    reverse: true,
  },
  {
    step: "3",
    title: "Receive patchnotes",
    description: "Enjoy patchnotes delivered straight to your discord server!",
  },
];
