"use client";

import { useState } from "react";
import { SidebarNav } from "./components/SidebarNav";
import { AdColumn } from "./components/AdColumn";
import { HeaderTitleCard } from "./components/HeaderTitleCard";
import { PageCard } from "./components/PageCard";
import { PageContent } from "./components/PageContent";

export default function AppClientShell() {
  const [activePage, setActivePage] = useState("home");

  const pageTitleMap: Record<string, { title: string; description: string }> = {
    home: { title: "Home", description: "Overview of the site." },
    projects: { title: "Projects", description: "What I’m building." },
    about: { title: "About", description: "A little about me." },
    contact: { title: "Contact", description: "How to reach me." },
  };

  const meta = pageTitleMap[activePage] ?? pageTitleMap.home;

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      {/* Title card */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <HeaderTitleCard title="My Website" />
      </div>

      {/* 3-column body */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "240px 1fr 260px",
          gap: 14,
        }}
      >
        <aside
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 16,
            padding: 12,
          }}
        >
          <SidebarNav activePage={activePage} onChangePage={setActivePage} />
        </aside>

        <section>
          <PageCard title={meta.title} description={meta.description}>
            <PageContent page={activePage} />
          </PageCard>
        </section>

        <aside
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 16,
            padding: 12,
          }}
        >
          <AdColumn />
        </aside>
      </div>
    </div>
  );
}
