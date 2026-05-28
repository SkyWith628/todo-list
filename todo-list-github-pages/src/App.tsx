import { HashRouter, Route, Routes } from "react-router-dom";
import { AppShell } from "./components/AppShell";
import { TodoProvider } from "./context/TodoContext";
import { DashboardPage } from "./pages/DashboardPage";
import { DetailPage } from "./pages/DetailPage";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RequirementsPage } from "./pages/RequirementsPage";
import { StatsPage } from "./pages/StatsPage";

export function App() {
  return (
    <TodoProvider>
      <HashRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<DashboardPage />} />
            <Route path="detail" element={<DetailPage />} />
            <Route path="stats" element={<StatsPage />} />
            <Route path="requirements" element={<RequirementsPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </TodoProvider>
  );
}
