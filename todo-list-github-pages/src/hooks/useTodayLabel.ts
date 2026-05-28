import { useEffect, useState } from "react";

export function useTodayLabel() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "full",
    timeStyle: "short"
  }).format(now);
}
