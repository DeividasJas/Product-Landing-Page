const images = {
  cycleIcon: './assets/cycle-icon.png',
  percentIcon: './assets/precent.png',
  xIcon: './assets/x-icon.png',
};
const texts = {
  cycleIcon: 'delivery every 30 days',
  percentIcon: 'best value per box',
  xIcon: 'no commitment, cancel anytime',
};

export default function createSubscribeContainer() {
  const subscribeContainer = document.getElementById('subscribeContainer');
  subscribeContainer.classList = 'subscribeContainer';

  const list = document.createElement('ul');
  list.classList = 'subscribeContainer__list';


  for (const image in images) {
    const li = document.createElement('li');
    li.classList = 'subscribeContainer__item';
    const img = document.createElement('img');
    img.src = images[image];
    img.alt = `images[image], icon`;
    li.appendChild(img);
    list.appendChild(li);

    const h4 = document.createElement('h4');
    h4.textContent = texts[image];
    li.appendChild(h4);
  }

  const h2 = document.createElement('h2');
  h2.classList = 'subscribeContainer__header';
  h2.textContent = 'subscribe & save';
  subscribeContainer.appendChild(h2);

  subscribeContainer.appendChild(list);
}
