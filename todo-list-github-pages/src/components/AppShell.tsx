import { CalendarDays, ChartPie, CheckSquare, ClipboardList, FileCheck2, LogIn } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { useTodayLabel } from "../hooks/useTodayLabel";

const links = [
  { to: "/", label: "오늘", icon: CheckSquare },
  { to: "/detail", label: "상세", icon: CalendarDays },
  { to: "/stats", label: "통계", icon: ChartPie },
  { to: "/requirements", label: "노트", icon: FileCheck2 },
  { to: "/login", label: "로그인", icon: LogIn }
];

export function AppShell() {
  const today = useTodayLabel();

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <ClipboardList aria-hidden="true" />
          <div>
            <strong>Dayflow</strong>
            <span>개인 일정 관리</span>
          </div>
        </div>
        <nav aria-label="주요 화면">
          {links.map(({ icon: Icon, label, to }) => (
            <NavLink key={to} to={to} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="today-note">
          <span>현재 시간</span>
          <strong>{today}</strong>
        </div>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
