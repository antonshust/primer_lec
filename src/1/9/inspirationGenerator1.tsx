import * as React from 'react';
import quotes from './quotes1';
import FancyText from './FancyText1';

export default function InspirationGenerator({children}: {children: React.ReactNode}) {
  const [index, setIndex] = React.useState(0);
  const quote = quotes[index];
  const next = () => setIndex((index + 1) % quotes.length);

  return (
    <>
      <p>Your inspirational quote is:</p>
      <FancyText text={quote} />
      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}
