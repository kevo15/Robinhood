function AdCard({ title }: { title: string }) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 14,
        padding: 12,
        minHeight: 120,
      }}
    >
      <div style={{ fontWeight: 700 }}>{title}</div>
      <p style={{ margin: "8px 0 0", opacity: 0.8, fontSize: 13 }}>
        Ad content goes here.
      </p>
    </div>
  );
}

export function AdColumn() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ fontWeight: 700, opacity: 0.85 }}>Sponsored</div>
      <AdCard title="Ad #1" />
      <AdCard title="Ad #2" />
      <AdCard title="Ad #3" />
    </div>
  );
}
