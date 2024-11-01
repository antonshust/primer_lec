import { useEffect } from 'react';
import { FadeInAnimation } from './animation14';

export function useFadeIn(ref: React.RefObject<HTMLElement>, duration: number) {
  useEffect(() => {
    if (ref.current) {
      const animation = new FadeInAnimation(ref.current);
      animation.start(duration);
      return () => {
        animation.stop();
      };
    }
  }, [ref, duration]);
}
