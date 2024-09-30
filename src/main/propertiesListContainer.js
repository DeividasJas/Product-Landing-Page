import { fistIcon, gutIcon, heartShieldIcon, moonIcon } from '../svgIcons';

const propertiesListData = [
  { svg: moonIcon(), text: 'Boosts immune system' },
  { svg: heartShieldIcon(), text: 'Boosts immune system' },
  { svg: fistIcon(), text: 'Enhances strength' },
  { svg: gutIcon(), text: 'Improves digestion' },
];

export default function createPropertiesListContainer() {
  const ul = document.getElementById('propertiesList');
  ul.classList = 'propertiesList';

  propertiesListData.forEach((item) => {
    const li = document.createElement('li');
    li.classList = 'propertiesList__item';

    const contentWrapper = document.createElement('div');
    contentWrapper.classList = 'propertiesList__textIconWrapper';

    const svgIcon = document.createElement('svg');
    svgIcon.innerHTML = item.svg;

    const p = document.createElement('p');
    p.textContent = item.text;

    contentWrapper.appendChild(svgIcon);
    contentWrapper.appendChild(p);
    li.appendChild(contentWrapper);
    ul.appendChild(li);
  });
}
