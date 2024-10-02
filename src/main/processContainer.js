import {
  arrowIcon,
  errorIcon,
  fistIcon,
  heartIcon,
  personIcon,
} from '../svgIcons';

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

export default function processContainer() {
  // everything in here will be added to the container

  const container = document.getElementById('processContainer');
  container.className = 'processContainer';

  const header = document.createElement('h3');
  header.className = 'processContainer__header';
  header.innerText = 'meticulous methodical process';
  container.appendChild(header);

  // div for all content
  const allContent = document.createElement('div');
  allContent.className = 'processContainer__contentWrapper';

  // store arrow and svg icon will disappear on bigger media query
  data.forEach((item, index) => {
    const iconsWrapper = document.createElement('div');
    iconsWrapper.className = 'processContainer__iconsWrapper';
    iconsWrapper.innerHTML = item.svg;
    iconsWrapper.innerHTML += arrowIcon();

    const textWrapper = document.createElement('div');
    textWrapper.className = 'processContainer__textWrapper';

    // header with text
    const header = document.createElement('h4');
    header.className = 'processContainer__textHeader';
    header.innerText = item.header;
    const text = document.createElement('p');
    text.className = 'processContainer__text';
    text.innerText = item.content;

    textWrapper.appendChild(header);
    textWrapper.appendChild(text);

    const iconTextWrapper = document.createElement('div');
    iconTextWrapper.className = 'processContainer__iconTextWrapper';
    iconTextWrapper.appendChild(iconsWrapper);
    iconTextWrapper.appendChild(textWrapper);
    allContent.appendChild(iconTextWrapper);

    if (index === 1) {
      const div = document.createElement('div');
      div.className = 'processContainer__verticalLine';

      div.innerHTML = `${fistIcon()}${errorIcon()}${heartIcon()}${personIcon()}`;

      allContent.appendChild(div);
    }

    // adding class here to avoid complex css selectors
    if (index % 2 === 1) {
      iconTextWrapper.classList.add('justify-end'); // Add this class for every second item
    }

    container.appendChild(allContent);
  });
}
