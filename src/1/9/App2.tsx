import FancyText from './FancyText2';
import InspirationGenerator from './InspirationGenerator2';
import Copyright from './Copyright2';
import './App2.css';

export default function App() {
  return (
    <>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </>
  );
}

