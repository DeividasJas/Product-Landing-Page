import {
  fireIcon,
  lightningIcon,
  personIcon,
  shieldIcon,
  checkIcon,
  thumbsUpIcon,
} from '../svgIcons';

const benefitsData = [
  {
    svg: fireIcon(),
    text: `Recharged <span class="benefitsContainer__bold">metabolism</span> to stay in peak shape`,
  },
  {
    svg: lightningIcon(),
    text: `Enjoy jitter-free <span class="benefitsContainer__bold">energy</span> to tackle your busy schedule`,
  },
  {
    svg: personIcon(),
    text: `Achieve restful <span class="benefitsContainer__bold">sleep</span> and wake up recharged`,
  },
  {
    svg: shieldIcon(),
    text: `Strengthen your <span class="benefitsContainer__bold">immune health</span> to stay on your game`,
  },
  {
    svg: checkIcon(),
    text: `<span class="benefitsContainer__bold">30 sec habit</span>. Mixes in any beverage fast and easy`,
  },
  {
    svg: thumbsUpIcon(),
    text: `<span class="benefitsContainer__bold">Easy, daily habit</span>. One scoop, so many benefits`,
  },
];

export default function createBenefitsContainer() {
  const container = document.getElementById('benefitsContainer');
  container.classList = 'benefitsContainer';

  const h2 = document.createElement('h2');
  h2.classList = 'benefitsContainer__header';
  h2.innerText =
    'Performance nutrition and healthy transformation made simple:';
  const ul = document.createElement('ul');
  ul.classList = 'benefitsContainer__list';

  benefitsData.forEach((item, index) => {
    const li = document.createElement('li');
    (li.classList = 'benefitsContainer__item'), `item${index + 1}`;

    const iconWrapper = document.createElement('div');
    iconWrapper.classList = 'benefitsContainer__iconWrapper';
    const svgIcon = document.createElement('svg');
    svgIcon.innerHTML = item.svg;
    iconWrapper.appendChild(svgIcon);

    const h4 = document.createElement('h4');
    h4.innerHTML = item.text;
    li.appendChild(iconWrapper);
    li.appendChild(h4);
    ul.appendChild(li);
  });

  container.appendChild(h2);
  container.appendChild(ul);
}
