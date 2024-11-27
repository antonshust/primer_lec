import { useState } from 'react';
import './App1.css'

let nextId: number;
interface Artist {
    id: number;
    name: string;
  }
  
  export default function List() {
    const [name, setName] = useState<string>(''); // Типизация состояния для строки
    const [artists, setArtists] = useState<Artist[]>([]);
  
  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        artists.push({
          id: nextId++,
          name: name,
        });
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
