export class FadeInAnimation {
    node: HTMLElement;
    duration: any;
    startTime: number | undefined;
    frameId: number | undefined;
    constructor(node: HTMLElement) {
      this.node = node;
    }
    start(duration: number) {
      this.duration = duration;
      this.onProgress(0);
      this.startTime = performance.now();
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
    onFrame() {
        if (this.startTime !== undefined) {
            const timePassed = performance.now() - this.startTime;
            const progress = Math.min(timePassed / this.duration, 1);
            this.onProgress(progress);
      if (progress === 1) {
        this.stop();
      } else {
        // We still have more frames to paint
        this.frameId = requestAnimationFrame(() => this.onFrame());
      }
      }
    }
    onProgress(progress: number) {
      this.node.style.opacity = progress.toString();
    }
    stop() {
      cancelAnimationFrame(this.frameId as number);
      this.startTime = undefined;
      this.frameId = undefined;
      this.duration = 0;
    }
  }
  