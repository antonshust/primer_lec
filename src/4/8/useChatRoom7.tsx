import { useEffect } from 'react';
import { createConnection } from './chat6';
import { showNotification } from './notifications6';

export function useChatRoom({ serverUrl, roomId }: { serverUrl: string; roomId: string }) {
  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId
    };
    const connection = createConnection(options);
    connection.connect();
    connection.on('message', (msg) => {
      showNotification('New message: ' + msg);
    });
    return () => connection.disconnect();
  }, [roomId, serverUrl]);
}
