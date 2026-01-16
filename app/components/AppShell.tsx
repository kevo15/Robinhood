"use client";

import React, { useState } from "react";
import { HeaderTitleCard } from "./HeaderTitleCard";
import { SidebarNav } from "./SidebarNav";
import { AdColumn } from "./AdColumn";

type AppShellProps = {
  siteTitle: string;
  activePage: string;
  onChangePage: (page: string) => void;
  navItems: { key: string; label: string; icon: string }[];
  children: React.ReactNode;
};

export function AppShell({
  siteTitle,
  activePage,
  onChangePage,
  navItems,
  children,
}: AppShellProps) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);

  return (
    <div style={styles.root}>
      {/* Top title card centered */}
      <div style={styles.headerRow}>
        <HeaderTitleCard
          title={siteTitle}
          isSideNavOpen={isSideNavOpen}
          onToggleSideNav={() => setIsSideNavOpen((prev) => !prev)}
        />
      </div>

      {/* Body: Sidebar | Main Page Card | Ads */}
      <div
        style={{
          ...styles.bodyRow,
          gridTemplateColumns: isSideNavOpen ? "72px 1fr 260px" : "1fr 260px",
        }}
      >
        {/* Sidebar (toggleable) */}
        {isSideNavOpen && (
          <aside style={styles.leftCol}>
            <SidebarNav
              navItems={navItems}
              activePage={activePage}
              onChangePage={onChangePage}
            />
          </aside>
        )}

        {/* Main content */}
        <section style={styles.centerCol}>{children}</section>

        {/* Ads (always visible) */}
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
    padding: 6,
    justifyItems: "center",
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
