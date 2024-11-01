import { useEffect } from 'react';

export function useFadeIn(ref: React.RefObject<HTMLElement>, duration: number) {
  useEffect(() => {
    const node = ref.current;

    let startTime = performance.now();
    let frameId: number | null = null;

    function onFrame(now: number) {
      const timePassed = now - startTime;
      const progress = Math.min(timePassed / duration, 1);
      onProgress(progress);
      if (progress < 1) {
        // We still have more frames to paint
        frameId = requestAnimationFrame(onFrame);
      }
    }

    function onProgress(progress: number) {
        if (node) {
            (node as HTMLElement).style.opacity = progress.toString(); 
          }
    }

    function start() {
      onProgress(0);
      startTime = performance.now();
      frameId = requestAnimationFrame(onFrame);
    }

    function stop() {
      cancelAnimationFrame(frameId as number);
      startTime = 0;
      frameId = null;
    }

    start();
    return () => stop();
  }, [ref, duration]);
}
