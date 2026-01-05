type SidebarNavProps = {
  navItems: { key: string; label: string; icon: string }[];
  activePage: string;
  onChangePage: (page: string) => void;
};

const navItems = [
  { key: "/", label: "Home", icon: "🏠" },
  { key: "/settings", label: "Settings", icon: "🧩" },
  { key: "/profile", label: "Profile", icon: "👤" },
  { key: "/essentials", label: "Essentials", icon: "✉️" },
  { key: "/health", label: "Health", icon: "✉️" },
  { key: "/learning", label: "Learning", icon: "✉️" },
  { key: "/socialization", label: "Socialization", icon: "✉️" },
  { key: "/about", label: "About Us", icon: "✉️" },
];


export function SidebarNav({ activePage, onChangePage }: SidebarNavProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ fontWeight: 700, opacity: 0.85, marginBottom: 6 }}>
        Navigation
      </div>

{navItems.map((item) => {
  const isActive = activePage === item.key;
  return (
    <button key={item.key} onClick={() => onChangePage(item.key)}>
      {item.icon} {item.label}
    </button>
  );
})}
    </div>
  );
}