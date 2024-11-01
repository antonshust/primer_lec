import { useEffect, useRef } from 'react';
// import { experimental_useEffectEvent as useEffectEvent } from 'react';
import { createConnection } from './chat6';

export function useChatRoom({ serverUrl, roomId, onReceiveMessage }: { serverUrl: string; roomId: string; onReceiveMessage: (msg: string) => void }) {
  const onReceiveMessageRef = useRef(onReceiveMessage);

  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId
    };
    const connection = createConnection(options);
    connection.connect();
    connection.on('message', (msg) => {
        onReceiveMessageRef.current(msg);
    });
    return () => connection.disconnect();
  }, [roomId, serverUrl]);
}
