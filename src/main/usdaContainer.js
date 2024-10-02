export default function createUsdaContainer(imageSrc) {
  const container = document.getElementById('usdaContainer');
  container.className = 'usdaContainer';

  const image = document.createElement('img');
  image.src = imageSrc;
  image.alt = 'Usda logo';

  const h4 = document.createElement('h4');
  h4.className = 'usdaContainer__text';
  h4.innerText = `only exceptional USDA certified organic sustainable sourced ingredients qualify.`;

  container.appendChild(image);
  container.appendChild(h4);
}
