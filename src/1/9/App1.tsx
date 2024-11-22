import FancyText from './FancyText1';
import InspirationGenerator from './inspirationGenerator1';
import Copyright from './Copyright1';
import './App1.css'

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

