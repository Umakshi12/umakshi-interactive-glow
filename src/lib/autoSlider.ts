export type AutoSliderOptions = {
  speed?: number; // px per second
  direction?: 'right' | 'left';
  ensureSeamless?: boolean;
};

export function initAutoSlider(root: HTMLElement, opts: AutoSliderOptions = {}) {
  const { speed = 80, direction = 'left', ensureSeamless = true } = opts;

  // find or create track
  let track = root.querySelector<HTMLElement>('.slider-track');
  if (!track) {
    track = document.createElement('div');
    track.className = 'slider-track inline-flex';
    // move existing children into track
    const children = Array.from(root.childNodes);
    children.forEach((child) => track!.appendChild(child));
    root.appendChild(track);
  }

  // basic inline styles to keep behavior consistent
  root.style.overflow = 'hidden';
  root.style.whiteSpace = 'nowrap';
  track.style.willChange = 'transform';
  track.style.display = 'inline-flex';

  const clones: HTMLElement[] = [];

  const ensureClones = () => {
    if (!ensureSeamless) return;
    const containerW = Math.max(1, root.clientWidth || root.getBoundingClientRect().width);
    let attempts = 0;
    // clone until track width >= container width * 2 (or safe max attempts)
    while (track!.scrollWidth < containerW * 2 && attempts < 20) {
      const originals = Array.from(track!.children) as HTMLElement[];
      for (const child of originals) {
        const clone = child.cloneNode(true) as HTMLElement;
        clone.setAttribute('aria-hidden', 'true');
        track!.appendChild(clone);
        clones.push(clone);
      }
      attempts++;
    }
  };

  ensureClones();

  const getResetWidth = () => Math.max(1, track!.scrollWidth / 2);

  let offset = 0;
  let rafId = 0;
  let lastTime = performance.now();
  const dirSign = direction === 'left' ? -1 : 1;

  const step = (time: number) => {
    const dt = Math.min(0.05, (time - lastTime) / 1000); // clamp dt to avoid huge jumps
    lastTime = time;
    const delta = speed * dt * dirSign;
    offset += delta;
    const resetWidth = getResetWidth();
    if (Math.abs(offset) >= resetWidth) {
      offset = offset + (offset > 0 ? -resetWidth : resetWidth);
    }
    track!.style.transform = `translate3d(${offset}px, 0, 0)`;
    rafId = requestAnimationFrame(step);
  };

  rafId = requestAnimationFrame(step);

  const cleanup = () => {
    if (rafId) cancelAnimationFrame(rafId);
    // remove clones we created
    for (const c of clones) {
      if (c.parentElement) c.parentElement.removeChild(c);
    }
    // reset inline styles we added
    track!.style.transform = '';
    track!.style.willChange = '';
    root.style.overflow = '';
    root.style.whiteSpace = '';
  };

  return cleanup;
}
