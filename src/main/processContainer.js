import {
  arrowIcon,
  bubbleIcon,
  errorIcon,
  fistIcon,
  heartIcon,
  personIcon,
  swirlingLine,
} from '../svgIcons';

const images = {
  swirlingLine: swirlingLine(),
  bubbleIcon: bubbleIcon(),
  arrowIcon: arrowIcon(),
};

const data = [
  {
    header: 'Mission',
    svg: fistIcon(),
    content:
      'Our team of researchers are working around the clock to uncover the best performance and health-boosting superfoods on the planet. We do the homework so you don’t have to. Each superfood is supported by strong clinical studies.',
  },
  {
    header: 'The problem',
    svg: errorIcon(),
    content:
      'our advisory panel reviews all of the scientific research in detail. Each ingredient must pass the rigorous approval process. Once approved, only then do our formulas move on to production.',
  },
  {
    header: "This isn't therapeutic",
    svg: heartIcon(),
    content:
      'Production takes place in our GMP-compliant, state of the art manufacturing facility. Once again, only using 100% organic ingredients that have been verified by the USDA.',
  },
  {
    header: 'The result',
    svg: personIcon(),
    content:
      'Getting our formulas into the hands of people who need it most and transforming lives for the better. We believe in improving humankind by improving human performance. And that starts with nourishing your body with the right fuel.',
  },
];

export default function createProcessContainer() {
  // create container for everything
  const container = document.getElementById('processContainer');
  container.className = 'processContainer';

  // created header and added to container
  const header = document.createElement('h3');
  header.className = 'processContainer__header';
  header.innerText = 'meticulous methodical process';
  container.appendChild(header);

  // create div for rest of the content give him a class for later manipulation
  const content = document.createElement('div');
  content.className = 'processContainer__content';

  data.forEach((item) => {
    const contentItem = document.createElement('div');
    contentItem.className = 'processContainer__contentItem';
    content.appendChild(contentItem);

    // create wrap for both icons
    const iconsWrapper = document.createElement('div');
    iconsWrapper.className = 'processContainer__iconsWrapper';
    contentItem.appendChild(iconsWrapper);

    // create div;s and append different svg's to it
    const icon = document.createElement('div');
    icon.className = 'processContainer__icon';
    icon.innerHTML = item.svg;
    iconsWrapper.appendChild(icon);

    // create arrow icon div and append svg to it
    const arrowIcon = document.createElement('div');
    arrowIcon.className = 'processContainer__arrowWrapper';
    arrowIcon.innerHTML = images.arrowIcon;
    iconsWrapper.appendChild(arrowIcon);




    
    // create header
    const contentHeader = document.createElement('h4');
    contentHeader.className = 'processContainer__contentHeader';
    contentHeader.innerText = item.header;

    // create text
    const contentText = document.createElement('p');
    contentText.className = 'processContainer__contentText';
    contentText.innerText = item.content;

    // create text header wrapper and append them both
    const itemContentWrapper = document.createElement('div');
    itemContentWrapper.className = 'processContainer__itemContentWrapper';
    itemContentWrapper.appendChild(contentHeader);
    itemContentWrapper.appendChild(contentText);

    //append content wrapper to item (below icons)
    contentItem.appendChild(itemContentWrapper);
  });

  container.appendChild(content);
}
