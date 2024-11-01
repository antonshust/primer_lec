import { useState, useRef } from 'react';
import './App5.css';

export default function Counter() {
  const [show, setShow] = useState(true);
  const ref = useRef(null) as any;

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}>
        Toggle with setState
      </button>
      <button
        onClick={() => {
          ref.current.remove();
        }}>
        Remove from the DOM
      </button>
      {show && <p ref={ref}>Hello world</p>}
    </div>
  );
}
