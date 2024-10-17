import { LevelContext } from './LevelContext3';

export default function Section({ level, children }: { level: number; children: React.ReactNode }) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
