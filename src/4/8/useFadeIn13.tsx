import { useState, useEffect } from 'react';
// import { experimental_useEffectEvent as useEffectEvent } from 'react';

export function useFadeIn(ref: React.RefObject<HTMLElement>, duration: number) {
  const [isRunning, setIsRunning] = useState(true);

  useAnimationLoop(isRunning, (timePassed: number) => {
    const progress = Math.min(timePassed / duration, 1);
    if (ref.current) {
      ref.current.style.opacity = progress.toString(); // Убедитесь, что ref.current существует
    }
    if (progress === 1) {
      setIsRunning(false);
    }
  });
}

function useAnimationLoop(isRunning: boolean, drawFrame: (timePassed: number) => void) {
  // const onFrame = useEffectEvent(drawFrame);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const startTime = performance.now();
    let frameId: number | null = null;

    function tick(now: number) {
      const timePassed = now - startTime;
      drawFrame(timePassed);
      frameId = requestAnimationFrame(tick);
    }

    tick(performance.now());
    return () => cancelAnimationFrame(frameId as number);
  }, [isRunning]);
}
