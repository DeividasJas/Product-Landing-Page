import initializeGlide from './glideMount';
const sliderSectionData = {
  description: {
    header: 'Metabolism Boosting',
    text1:
      'These powerful superfoods ignite your metabolism and reduce bloating. They improve digestion and deliver the energy you need to get things done.',
    text2: 'Main Organic Ingredients:',
  },

  slidesData: [
    {
      text: 'organic acai berry',
      image: './assets/sliderImages/berryImageWithBackground.png',
    },
    {
      text: 'organic accacia gum',
      image: './assets/sliderImages/organicGumWithBackground.png',
    },
    {
      text: 'organic ceylon',
      image: './assets/sliderImages/cinamonBarkWithBackground.png',
    },
    {
      text: 'organic green tea',
      image: './assets/sliderImages/greenTeaWithBackground.png',
    },
  ],
};

export default function createSliderContainer(productName) {
  const sliderSection = document.getElementById('testSlider');

  const glideDiv = document.createElement('div');

  const sectionWithTextAndSlides = document.createElement('section');

  const addToChartButton = () => {
    const addToChartButton = document.createElement('button');
    addToChartButton.classList = 'sliderSection__button';
    addToChartButton.innerText = 'add to chart';
    sliderSection.appendChild(addToChartButton);
  };

  const createDescriptionAndGlideSection = () => {
    sliderSection.className = 'sliderSection';

    const h2 = document.createElement('h2');
    h2.className = 'sliderSection__productNameRed';
    h2.innerHTML = `${productName} <span class="sliderSection__productName"> blend</span>`;
    sliderSection.appendChild(h2);

    // main glide div also with text so it would work with different flex directions
    sliderSection.appendChild(glideDiv);

    glideDiv.className = 'glide';
    glideDiv.id = 'glideCarousel';

    sectionWithTextAndSlides.className = 'glide__slidesWithDescription';

    const glideDescription = document.createElement('div');
    glideDescription.className = 'glide__description';

    const header = document.createElement('h3');
    header.className = 'glide__descriptionHeader';
    header.innerText = sliderSectionData.description.header;

    const text1 = document.createElement('p');
    text1.className = 'glide__descriptionText';
    text1.innerText = sliderSectionData.description.text1;

    const text2 = document.createElement('p');
    text2.className = 'glide__descriptionText';
    text2.innerText = sliderSectionData.description.text2;

    glideDescription.appendChild(header);
    glideDescription.appendChild(text1);
    glideDescription.appendChild(text2);

    sectionWithTextAndSlides.appendChild(glideDescription);

    // append section with text and glides to main guy
    glideDiv.appendChild(sectionWithTextAndSlides);
  };

  const buildSlide = () => {
    const glideTrack = document.createElement('div');
    glideTrack.className = 'glide__track';
    glideTrack.setAttribute('data-glide-el', 'track');

    const ul = document.createElement('ul');
    ul.className = 'glide__slides';

    // loop to create three slides as requested
    for (let slideIndex = 0; slideIndex < 3; slideIndex++) {
      const li = document.createElement('li');
      li.className = 'glide__slide';

      // For each slide add 4 images and text
      sliderSectionData.slidesData.forEach((item) => {
        const imageTextWrapper = document.createElement('div');
        imageTextWrapper.className = 'glide__imageTextWrapper';

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.text;

        const text = document.createElement('p');
        text.innerText = item.text;

        imageTextWrapper.appendChild(image);
        imageTextWrapper.appendChild(text);

        li.appendChild(imageTextWrapper);
      });

      ul.appendChild(li);
    }

    glideTrack.appendChild(ul);
    sectionWithTextAndSlides.appendChild(glideTrack);
  };

  const glideNavigation = () => {
    // create navigation container
    const glideNavigationSection = document.createElement('section');
    glideNavigationSection.className = 'glide glide__navigation';
    glideNavigationSection.setAttribute('data-glide-el', 'controls');

    // create both buttons left and right navigation
    const leftButton = document.createElement('button');
    leftButton.className = 'glide__arrow glide__arrow--left';
    leftButton.setAttribute('data-glide-dir', '<');

    const rightButton = document.createElement('button');
    rightButton.className = 'glide__arrow glide__arrow--right';
    rightButton.setAttribute('data-glide-dir', '>');

    // create progress tracker
    const progressTracker = document.createElement('div');
    progressTracker.className = 'glide__progress';
    progressTracker.id = 'tracker';

    // create navigation images
    // const navigationImgOne = document.createElement('svg');
    // const navigationImgTwo = document.createElement('svg');
    // const navigationImgThree = document.createElement('svg');
    // navigationImgOne.id = 'navigationImgOne';
    // navigationImgTwo.id = 'navigationImgTwo';
    // navigationImgThree.id = 'navigationImgThree';

    // progressTracker.appendChild(navigationImgOne);
    // progressTracker.appendChild(navigationImgTwo);
    // progressTracker.appendChild(navigationImgThree);

    glideNavigationSection.appendChild(leftButton);
    glideNavigationSection.appendChild(progressTracker);
    glideNavigationSection.appendChild(rightButton);

    glideDiv.appendChild(glideNavigationSection);
  };

  createDescriptionAndGlideSection();
  buildSlide();
  glideNavigation();
  addToChartButton();
  initializeGlide();
}
