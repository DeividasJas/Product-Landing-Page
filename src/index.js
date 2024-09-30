import Glide from '@glidejs/glide';
import createUsdaContainer from './main/usdaContainer';
import mainImageContainer from './main/mainImageContainer';
import createSubscribeContainer from './main/subscribeContainer';
import createBenefitsContainer from './main/benefitsContainer';
import createPropertiesListContainer from './main/propertiesListContainer';
import createHeaderContainer from './header/headerContainer';
import createFooterContainer from './footer/footerContainer';
import createProcessContainer from './main/processContainer';

const pathToSlideImage = [
  './assets/Ellipse-full.png',
  './assets/Ellipse-Empty.png',
];

const glide = new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  // breakpoints: {
  //   600: { perView: 1 },
  //   1200: { perView: 3 }
  // }
});
glide.on('move', (newIndex) => {
  // console.log('Current Slide Index:', newIndex);
  const trackerOne = document.getElementById('navigationImgOne');
  const trackerTwo = document.getElementById('navigationImgTwo');
  const trackerThree = document.getElementById('navigationImgThree');

  if (newIndex.movement === 0) {
    trackerOne.src = pathToSlideImage[0];
    trackerTwo.src = pathToSlideImage[1];
    trackerThree.src = pathToSlideImage[1];
  } else if (newIndex.movement === 258) {
    trackerOne.src = pathToSlideImage[1];
    trackerTwo.src = pathToSlideImage[0];
    trackerThree.src = pathToSlideImage[1];
  } else {
    trackerOne.src = pathToSlideImage[1];
    trackerTwo.src = pathToSlideImage[1];
    trackerThree.src = pathToSlideImage[0];
  }
});

document.addEventListener(
  'DOMContentLoaded',
  createUsdaContainer('./assets/usda-organic-logo-1.png')
);
document.addEventListener('DOMContentLoaded', mainImageContainer('organic'));
document.addEventListener('DOMContentLoaded', createSubscribeContainer());
document.addEventListener('DOMContentLoaded', createBenefitsContainer());
document.addEventListener('DOMContentLoaded', createPropertiesListContainer());
document.addEventListener('DOMContentLoaded', createHeaderContainer());
document.addEventListener('DOMContentLoaded', createFooterContainer('organic'));
document.addEventListener('DOMContentLoaded', createProcessContainer());

glide.mount();
