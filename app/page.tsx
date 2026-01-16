"use client";

import { useMemo, useState } from "react";
import { AppShell } from "./components/AppShell";
import { PageCard } from "./components/PageCard";
import { PageContent } from "./components/PageContent";
import {
  Home as HomeIcon,
  Settings as SettingsIcon,
  User as UserIcon,
  Mail as MailIcon,
  HeartPulse,
  BookOpen,
  Users,
  Info,
} from "lucide-react";

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

const navItems = [
  { key: "/", label: "Home", icon: <HomeIcon size={20} /> },
  { key: "/settings", label: "Settings", icon: <SettingsIcon size={20} /> },
  { key: "/profile", label: "Profile", icon: <UserIcon size={20} /> },
  { key: "/essentials", label: "Essentials", icon: <MailIcon size={20} /> },
  { key: "/health", label: "Health", icon: <HeartPulse size={20} /> },
  { key: "/learning", label: "Learning", icon: <BookOpen size={20} /> },
  { key: "/socialization", label: "Socialization", icon: <Users size={20} /> },
  { key: "/about", label: "About Us", icon: <Info size={20} /> },
] as const;

export default function Home() {
  const [activePage, setActivePage] = useState<NavItem["key"]>("/");

  // Build the title/description map from navItems
  const pageTitleMap = useMemo(() => {
    const base: Record<NavItem["key"], { title: string; description: string }> =
      {
        "/": { title: "Home", description: "Overview of the site." },
        "/settings": {
          title: "Settings",
          description: "Customize your experience.",
        },
        "/profile": {
          title: "Profile",
          description: "Your personal info and preferences.",
        },
        "/essentials": {
          title: "Essentials",
          description: "Core tools and quick access.",
        },
        "/health": {
          title: "Health",
          description: "Habits, workouts, wellness, and goals.",
        },
        "/learning": {
          title: "Learning",
          description: "Study plans, notes, and progress.",
        },
        "/socialization": {
          title: "Socialization",
          description: "Friends, events, and connections.",
        },
        "/about": {
          title: "About Us",
          description: "What this site is and why it exists.",
        },
      };

    // Optional: if you ever change navItems, you can still use base as source of truth.
    return base;
  }, []);

  const meta = pageTitleMap[activePage];

  return (
    <AppShell
      siteTitle="Robinhood Resources"
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
