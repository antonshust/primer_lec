import { useState } from 'react';

interface Artwork {
    id: number;
    title: string;
    seen: boolean;
  }
  
  let nextId = 3;
  const initialList: Artwork[] = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
  ];
  
  export default function BucketList() {
    const [myList, setMyList] = useState<Artwork[]>(initialList);
    const [yourList, setYourList] = useState<Artwork[]>(initialList);  

  function handleToggleMyList(artworkId: number, nextSeen:boolean) {
    const myNextList = [...myList];
    const artwork = myNextList.find(
      a => a.id === artworkId
    ) as any;
    artwork.seen = nextSeen;
    setMyList(myNextList);
  }

  function handleToggleYourList(artworkId: number, nextSeen:boolean) {
    const yourNextList = [...yourList];
    const artwork = yourNextList.find(
      a => a.id === artworkId
    ) as any;
    artwork.seen = nextSeen;
    setYourList(yourNextList);
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}

interface ItemListProps {
    artworks: Artwork[];
    onToggle: (artworkId: number, nextSeen: boolean) => void;
  }
  
  function ItemList({ artworks, onToggle }: ItemListProps) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
