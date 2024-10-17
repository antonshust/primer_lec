export default function Section({ level, children }: { level: number; children: React.ReactNode }) {
    return (
      <section className="section">
        {children}
      </section>
    );
  }