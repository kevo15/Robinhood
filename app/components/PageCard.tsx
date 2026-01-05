import React from "react";

type PageCardProps = {
  title: string;
  description?: string;
  children: React.ReactNode; // inner detail cards go here
};

export function PageCard({ title, description, children }: PageCardProps) {
  return (
    <div
      style={{
        height: "100%",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 18,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div>
        <h2 style={{ margin: 0 }}>{title}</h2>
        {description ? (
          <p style={{ margin: "8px 0 0", opacity: 0.8 }}>{description}</p>
        ) : null}
      </div>

      {/* Inner cards area */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {children}
      </div>
    </div>
  );
}
