import { useContext } from 'react';
import { LevelContext } from './LevelContext3';

export default function Section({ children: children, isFancy: isFancy }: 
    { children: React.ReactNode; isFancy?: boolean }) {
  const level = useContext(LevelContext);
  return (
    <section className={
      'section ' +
      (isFancy ? 'fancy' : '')
    }>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
