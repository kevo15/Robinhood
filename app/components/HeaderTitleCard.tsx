type HeaderTitleCardProps = {
  title: string;
  isSideNavOpen: boolean;
  onToggleSideNav: () => void;
};

export function HeaderTitleCard({
  title,
  isSideNavOpen,
  onToggleSideNav,
}: HeaderTitleCardProps) {
  return (
    <div
      style={{
        width: "min(900px, 100%)",
        backgroundColor: "red",
        color: "black",
        border: "1px solid rgba(0,0,0,0.2)",
        borderRadius: 18,
        padding: "8px 18px",
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      {/* Left toggle button (3 dots) */}
      <button
        onClick={onToggleSideNav}
        aria-label={
          isSideNavOpen ? "Hide sidebar navigation" : "Show sidebar navigation"
        }
        style={{
          width: 40,
          height: 40,
          borderRadius: 12,
          border: "none", // ✅ removed border
          background: "transparent",
          color: "black",
          cursor: "pointer",
          display: "grid",
          placeItems: "center",
        }}
      >
        <span style={{ fontSize: 40, fontWeight: 800, lineHeight: 1 }}>⋯</span>
      </button>

      {/* Title centered */}
      <div style={{ flex: 1, textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: 28, lineHeight: 1.1 }}>{title}</h1>
      </div>

      {/* Spacer so the title stays centered */}
      <div style={{ width: 40 }} />
    </div>
  );
}
