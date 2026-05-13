import type { SvgIconComponent } from "@mui/icons-material";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import NotificationsIcon from "@mui/icons-material/Notifications";

export type FeatureTier = "hero" | "mid" | "chip";

export type Feature = {
  title: string;
  description: string;
  icon: SvgIconComponent;
  tier: FeatureTier;
};

export const features: Feature[] = [
  {
    title: "Clean Patch Notes, Delivered to Discord",
    description:
      "Curated patch notes posted directly to your server — structured, readable, no link-clicking required. We cover the main Agent and Weapon changes, and leave the rest to Riot. ",
    icon: CleaningServicesIcon,
    tier: "hero",
  },
  {
    title: "TLDR Summary",
    description:
      "Key changes distilled — the essentials before the full breakdown.",
    icon: PsychologyIcon,
    tier: "mid",
  },
  {
    title: "Automatic Updates",
    description:
      "Set it once and forget it. Patch drops → your server gets notified.",
    icon: NotificationsIcon,
    tier: "mid",
  },
];
