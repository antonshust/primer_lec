import { useRef } from 'react';

export default function Form() {
  const inputRef = useRef(null) as any;

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
