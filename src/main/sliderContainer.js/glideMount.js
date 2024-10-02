import Glide from '@glidejs/glide';
import { navigationFullIcon, navigationEmptyIcon } from '../../svgIcons';

export default function initializeGlide() {
  const navigationImages = {
    fullBubble: navigationFullIcon(),
    emptyBubble: navigationEmptyIcon(),
  };

  const glide = new Glide('.glide', {
    type: 'carousel',
    perView: 1,
  });
  glide.on('move', (newIndex) => {
    // sometimes newIndex changes and breaks navigation tracker. Not sure why...

    let tracker = document.getElementById('tracker');    
    if (newIndex.movement === 0) {
      tracker.innerHTML = navigationImages.fullBubble;
      tracker.innerHTML += navigationImages.emptyBubble;
      tracker.innerHTML += navigationImages.emptyBubble;
    } else if (newIndex.movement === 257) {
      tracker.innerHTML = navigationImages.emptyBubble;
      tracker.innerHTML += navigationImages.fullBubble;
      tracker.innerHTML += navigationImages.emptyBubble;
    } else {
      tracker.innerHTML = navigationImages.emptyBubble;
      tracker.innerHTML += navigationImages.emptyBubble;
      tracker.innerHTML += navigationImages.fullBubble;
    }
  });

  glide.mount();
}
