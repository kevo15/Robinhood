import {
  Home,
  Settings,
  User,
  Mail,
  HeartPulse,
  BookOpen,
  Users,
  Info,
} from "lucide-react";

type SidebarNavProps = {
  navItems: { key: string; label: string; icon: React.ReactNode }[];
  activePage: string;
  onChangePage: (page: string) => void;
};

export function SidebarNav({ navItems, activePage, onChangePage }: SidebarNavProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {navItems.map((item) => {
        const isActive = activePage === item.key;

        return (
          <button
            key={item.key}
            onClick={() => onChangePage(item.key)}
            title={item.label} // hover tooltip
            aria-label={item.label}
            style={{
              width: 44,
              height: 44,
              display: "grid",
              placeItems: "center",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.12)",
              background: isActive ? "rgba(255, 0, 0, 0.76)" : "transparent",
              cursor: "pointer",
              color: "inherit",
            }}
          >
            {item.icon}
          </button>
        );
      })}
    </div>
  );
}
