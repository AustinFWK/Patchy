import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <footer className="py-6 flex flex-col items-center justify-center gap-2">
      <span className="text-sm font-semibold text-muted-foreground">
        © Patchy {new Date().getFullYear()}
      </span>

      <a
        href="https://github.com/AustinFWK/Bot-Landing-Page"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <GitHubIcon />
      </a>
    </footer>
  );
}
