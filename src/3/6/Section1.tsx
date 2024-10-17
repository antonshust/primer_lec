export default function Section({ children: children }: { children: React.ReactNode }) {
    return (
      <section className="section">
        {children}
      </section>
    );
  }
  