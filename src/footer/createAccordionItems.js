export default function createAccordionItems(
  accordionItemData,
  arrowImage,
  accordion
) {
  const accordionItem = document.createElement('div');
  accordionItem.className = 'footer__accordionItem';

  const accordionHeaderWrapper = document.createElement('div');
  accordionHeaderWrapper.className = 'footer__accordionHeaderWrapper';

  const accordionHeader = document.createElement('h3');
  accordionHeader.className = 'footer__accordionHeader';
  accordionHeader.innerText = accordionItemData.header;

  const arrow = document.createElement('img');
  arrow.className = 'footer__accordionArrow';
  arrow.src = arrowImage;
  arrow.alt = 'Arrow image';

  const accordionContent = document.createElement('div');
  accordionContent.className =
    'footer__accordionContent footer__accordionContent--hidden';
  accordionContent.innerHTML = accordionItemData.content;

  accordionHeaderWrapper.appendChild(accordionHeader);
  accordionHeaderWrapper.appendChild(arrow);

  accordionItem.appendChild(accordionHeaderWrapper);
  accordionItem.appendChild(accordionContent);

  accordion.appendChild(accordionItem);
}
 