import type { SvgIconComponent } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
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
      "Full patch note text posted directly to your server — structured, readable, no link-clicking required.",
    icon: CleaningServicesIcon,
    tier: "hero",
  },
  {
    title: "TLDR Summary",
    description: "Key changes distilled — the essentials before the full breakdown.",
    icon: PsychologyIcon,
    tier: "mid",
  },
  {
    title: "Automatic Updates",
    description: "Set it once and forget it. Patch drops → your server gets notified.",
    icon: NotificationsIcon,
    tier: "mid",
  },
  {
    title: "Agent Changes",
    description: "Focused Valorant agent breakdown.",
    icon: ThumbUpAltIcon,
    tier: "chip",
  },
  {
    title: "Channel Control",
    description: "You decide where it posts.",
    icon: SettingsIcon,
    tier: "chip",
  },
];
