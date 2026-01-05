type HeaderTitleCardProps = {
  title: string;
};

export function HeaderTitleCard({ title }: HeaderTitleCardProps) {
  return (
    <div
      style={{
        width: "min(900px, 100%)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 18,
        padding: "16px 18px",
        textAlign: "center",
      }}
    >
      <h1 style={{ margin: 0, fontSize: 28 }}>{title}</h1>
      <p style={{ margin: "8px 0 0", opacity: 0.8 }}>
        Robinhood Resources
      </p>
    </div>
  );
}
