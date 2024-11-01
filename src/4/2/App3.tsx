import { useRef } from 'react';

function MyInput(props:any) {
  return <input {...props} />;
}

export default function MyForm() {
  const inputRef = useRef(null) as any;

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
