"use client";

import { useMemo, useState } from "react";
import { AppShell } from "./components/AppShell";
import { PageCard } from "./components/PageCard";
import { PageContent } from "./components/PageContent";

type NavItem = {
  key:
    | "/"
    | "/settings"
    | "/profile"
    | "/essentials"
    | "/health"
    | "/learning"
    | "/socialization"
    | "/about";
  label: string;
  icon: string;
};

const navItems: NavItem[] = [
  { key: "/", label: "Home", icon: "🏠" },
  { key: "/settings", label: "Settings", icon: "🧩" },
  { key: "/profile", label: "Profile", icon: "👤" },
  { key: "/essentials", label: "Essentials", icon: "📌" },
  { key: "/health", label: "Health", icon: "💪" },
  { key: "/learning", label: "Learning", icon: "📚" },
  { key: "/socialization", label: "Socialization", icon: "🤝" },
  { key: "/about", label: "About Us", icon: "ℹ️" },
];

export default function Home() {
  const [activePage, setActivePage] = useState<NavItem["key"]>("/");

  // Build the title/description map from navItems
  const pageTitleMap = useMemo(() => {
    const base: Record<NavItem["key"], { title: string; description: string }> = {
      "/": { title: "Home", description: "Overview of the site." },
      "/settings": { title: "Settings", description: "Customize your experience." },
      "/profile": { title: "Profile", description: "Your personal info and preferences." },
      "/essentials": { title: "Essentials", description: "Core tools and quick access." },
      "/health": { title: "Health", description: "Habits, workouts, wellness, and goals." },
      "/learning": { title: "Learning", description: "Study plans, notes, and progress." },
      "/socialization": { title: "Socialization", description: "Friends, events, and connections." },
      "/about": { title: "About Us", description: "What this site is and why it exists." },
    };

    // Optional: if you ever change navItems, you can still use base as source of truth.
    return base;
  }, []);

  const meta = pageTitleMap[activePage];

  return (
    <AppShell
      siteTitle="My Website"
      activePage={activePage}
      onChangePage={setActivePage}
      navItems={navItems} // ✅ requires a small AppShell update (below)
    >
      <PageCard title={meta.title} description={meta.description}>
        <PageContent page={activePage} />
      </PageCard>
    </AppShell>
  );
}
