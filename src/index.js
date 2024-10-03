import createUsdaContainer from './main/usdaContainer';
import mainImageContainer from './main/mainImageContainer';
import createSubscribeContainer from './main/subscribeContainer';
import createBenefitsContainer from './main/benefitsContainer';
import createPropertiesListContainer from './main/propertiesListContainer';
import createHeaderContainer from './header/headerContainer';
import createFooterContainer from './footer/footerContainer';
import createSliderContainer from './main/sliderContainer.js/sliderContainers.js';
import processContainer from './main/processContainer.js'


document.addEventListener('DOMContentLoaded', () => {
  createHeaderContainer();
  mainImageContainer('organic');
  createPropertiesListContainer();
  createSubscribeContainer();
  createBenefitsContainer();
  createUsdaContainer('./assets/usda-organic-logo-1.png');
  createSliderContainer('organic')
  processContainer()
  createFooterContainer('organic');
  
});

console.log(document.location.href);
