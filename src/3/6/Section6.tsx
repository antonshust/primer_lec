import { useContext } from 'react';
import { LevelContext } from './LevelContext3';

export default function Section({ children: children }: { children: React.ReactNode }) {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
