function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 14,
        padding: 12,
      }}
    >
      <div style={{ fontWeight: 700 }}>{title}</div>
      <p style={{ margin: "8px 0 0", opacity: 0.8, fontSize: 13 }}>{body}</p>
    </div>
  );
}

export function PageContent({ page }: { page: string }) {
  if (page === "projects") {
    return (
      <>
        <InfoCard title="Project A" body="Short description of Project A." />
        <InfoCard title="Project B" body="Short description of Project B." />
        <InfoCard title="Project C" body="Short description of Project C." />
        <InfoCard title="Tech Stack" body="TypeScript, Next.js, Vercel." />
      </>
    );
  }

  if (page === "about") {
    return (
      <>
        <InfoCard title="Who I am" body="Bio summary." />
        <InfoCard title="Skills" body="List your main skills." />
        <InfoCard title="Goals" body="What you’re building toward." />
        <InfoCard title="Fun facts" body="Optional fun section." />
      </>
    );
  }

  if (page === "contact") {
    return (
      <>
        <InfoCard title="Email" body="youremail@example.com" />
        <InfoCard title="LinkedIn" body="linkedin.com/in/you" />
        <InfoCard title="GitHub" body="github.com/you" />
        <InfoCard title="Other" body="Any other link." />
      </>
    );
  }

  // default: home
  return (
    <>
      <InfoCard title="Welcome" body="Quick intro to the site." />
      <InfoCard title="What’s here" body="Explain what each section holds." />
      <InfoCard title="Latest Update" body="Your most recent update." />
      <InfoCard title="Featured" body="Highlight something important." />
    </>
  );
}
