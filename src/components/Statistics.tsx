import { useEffect, useState } from "react";

export default function Statistics() {
  const [stats, setStats] = useState<{ servers: number; users: number } | null>(
    null,
  );

  useEffect(() => {
    async function fetchStats() {
      const response = await fetch(`${import.meta.env.VITE_VM_URL}/stats`);
      const data = await response.json();
      setStats(data);
    }
    fetchStats();
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
      <span>
        <strong className="text-foreground font-semibold">
          {stats ? stats.servers : "..."}
        </strong>{" "}
        servers
      </span>
      <span className="text-muted-foreground/40">·</span>
      <span>
        <strong className="text-foreground font-semibold">
          {stats ? stats.users : "..."}
        </strong>{" "}
        users
      </span>
    </div>
  );
}
