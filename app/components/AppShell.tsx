import React from "react";
import { HeaderTitleCard } from "./HeaderTitleCard";
import { SidebarNav } from "./SidebarNav";
import { AdColumn } from "./AdColumn";

type AppShellProps = {
  siteTitle: string;
  activePage: string;
  onChangePage: (page: string) => void;
  navItems: { key: string; label: string; icon: string }[]; // ✅ add this
  children: React.ReactNode;
};

export function AppShell({
  siteTitle,
  activePage,
  onChangePage,
  children,
}: AppShellProps) {
  return (
    <div style={styles.root}>
      {/* Top title card centered */}
      <div style={styles.headerRow}>
        <HeaderTitleCard title={siteTitle} />
      </div>

      {/* Body: Sidebar | Main Page Card | Ads */}
      <div style={styles.bodyRow}>
        <aside style={styles.leftCol}>
          <SidebarNav activePage={activePage} onChangePage={onChangePage} />
        </aside>

        <section style={styles.centerCol}>{children}</section>

        <aside style={styles.rightCol}>
          <AdColumn />
        </aside>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  root: {
    minHeight: "100vh",
    padding: 18,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  headerRow: {
    display: "flex",
    justifyContent: "center",
  },
  bodyRow: {
    flex: 1,
    display: "grid",
    gridTemplateColumns: "240px 1fr 260px",
    gap: 14,
    alignItems: "stretch",
  },
  leftCol: {
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 16,
    padding: 12,
  },
  centerCol: {
    minWidth: 0,
  },
  rightCol: {
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 16,
    padding: 12,
  },
};
