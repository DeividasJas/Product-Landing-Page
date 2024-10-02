import createAccordionItems from './createAccordionItems';

export default function createFooterContainer(productName) {
  const arrowImage = './assets/angle-left-solid 1.png';
  const accordionData = [
    {
      header: `What are the Effective ingredients in ${productName}?`,
      content: `<p>Pellentesque vitae convallis quam, in ultricies leo:</p><p class="footer__bold">Lorem ipsum dolor sit ame:</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida sollicitudin diam, vestibulum placerat nisl finibus ut. Duis ac pulvinar justo. Aliquam mi nisl, gravida eget suscipit non, sodales in tortor. Nam purus sem, blandit non justo ac, ornare tempor quam. Morbi pharetra vehicula ornare. Proin gravida turpis orci, sit amet sollicitudin mi rutrum nec.</p>`,
    },
    {
      header: 'Other question?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      header: 'Other question?',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      header: 'Other question?',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
  ];

  const container = document.getElementById('footer');
  container.className = 'footer';

  const FAQ = document.createElement('p');
  FAQ.className = 'footer__FAQ';
  FAQ.innerText = 'FAQs';

  const accordion = document.createElement('div');
  accordion.className = 'footer__accordion';

  container.appendChild(FAQ);
  container.appendChild(accordion);

  accordionData.forEach((data) => {
    createAccordionItems(data, arrowImage, accordion);
  });

  function closeAllAccordions() {
    document
      .querySelectorAll('.footer__accordionContent')
      .forEach((content) => {
        content.classList.add('footer__accordionContent--hidden');
      });
    document.querySelectorAll('.footer__accordionArrow').forEach((arrow) => {
      arrow.classList.remove('footer__accordionArrowUp');
    });
  }

  document.querySelectorAll('.footer__accordionItem').forEach((item) => {
    const header = item.querySelector('.footer__accordionHeaderWrapper');
    const content = item.querySelector('.footer__accordionContent');
    const arrow = item.querySelector('.footer__accordionArrow');

    header.addEventListener('click', function () {
      const isContentVisible = !content.classList.contains(
        'footer__accordionContent--hidden'
      );

      closeAllAccordions();

      if (!isContentVisible) {
        content.classList.remove('footer__accordionContent--hidden');
        arrow.classList.add('footer__accordionArrowUp');
      }
    });
  });
}
