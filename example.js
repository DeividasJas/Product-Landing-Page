import Glide from "@glidejs/glide";

export default function createSliderComponent(productName) {
  const sliderContainer = document.getElementById("sliderSection");

  // Create main structure
  const productNameElement = createProductName(productName);
  const glideCarousel = createGlideCarousel();
  const addToCartButton = createAddToCartButton();

  // Append all elements to the slider container
  sliderContainer.appendChild(productNameElement);
  sliderContainer.appendChild(glideCarousel);
  sliderContainer.appendChild(addToCartButton);

  // Initialize Glide after a short delay to ensure DOM is ready
  setTimeout(initializeGlide, 0);
}

function createProductName(productName) {
  const h1 = document.createElement("h1");
  h1.className = "sliderSection__productNameRed";
  h1.textContent = productName;

  const span = document.createElement("span");
  span.className = "sliderSection__productName";
  span.textContent = " blend";

  h1.appendChild(span);
  return h1;
}

function createGlideCarousel() {
  const glide = document.createElement("div");
  glide.className = "glide";
  glide.id = "glideCarousel";

  const slidesSection = createSlidesSection();
  const navigationSection = createNavigationSection();

  glide.appendChild(slidesSection);
  glide.appendChild(navigationSection);

  return glide;
}

function createSlidesSection() {
  const section = document.createElement("section");
  section.className = "glide--slidesWithDescription";

  const description = createDescription();
  const track = createTrack();

  section.appendChild(description);
  section.appendChild(track);

  return section;
}

function createDescription() {
  const h2 = document.createElement("h2");
  h2.className = "glide__description";
  h2.innerHTML = `
    <span class="glide__bold">Metabolism Boosting</span><br />
    These powerful superfoods ignite your metabolism and reduce bloating. 
    They improve digestion and deliver the energy you need to get things done.<br />
    <span>Main Organic Ingredients:</span>
  `;
  return h2;
}

function createTrack() {
  const track = document.createElement("div");
  track.className = "glide__track";
  track.setAttribute("data-glide-el", "track");

  const slides = document.createElement("ul");
  slides.className = "glide__slides";

  // Create slides
  const slideData = [
    [
      { img: "/assets/acai berry.png", name: "organic acai berry" },
      { img: "/assets/acacia gum.png", name: "organic acacia gum" },
      {
        img: "/assets/cinnamon bark.png",
        name: "organic ceylon cinnamon bark",
      },
      { img: "/assets/green tea.png", name: "organic green tea" },
    ],
    // Add more slides as needed
  ];

  slideData.forEach((slideContent) => {
    slides.appendChild(createSlide(slideContent));
  });

  track.appendChild(slides);
  return track;
}

function createSlide(products) {
  const slide = document.createElement("li");
  slide.className = "glide__slide";

  const container1 = document.createElement("div");
  container1.className = "glide__container";
  container1.appendChild(createSingleProduct(products[0]));
  container1.appendChild(createSingleProduct(products[1]));

  const container2 = document.createElement("div");
  container2.className = "glide__container";
  container2.appendChild(createSingleProduct(products[2]));
  container2.appendChild(createSingleProduct(products[3]));

  slide.appendChild(container1);
  slide.appendChild(container2);

  return slide;
}

function createSingleProduct(product) {
  const productDiv = document.createElement("div");
  productDiv.className = "glide__singleProduct";

  const img = document.createElement("img");
  img.src = product.img;
  img.alt = product.name;

  const h4 = document.createElement("h4");
  h4.textContent = product.name;

  productDiv.appendChild(img);
  productDiv.appendChild(h4);

  return productDiv;
}

function createNavigationSection() {
  const section = document.createElement("section");
  section.className = "glide glide--navigationContainer";

  const navigation = document.createElement("div");
  navigation.className = "glide__navigation";
  navigation.setAttribute("data-glide-el", "controls");

  const leftButton = createArrowButton("left");
  const rightButton = createArrowButton("right");
  const progressTracker = createProgressTracker();

  navigation.appendChild(leftButton);
  navigation.appendChild(progressTracker);
  navigation.appendChild(rightButton);

  section.appendChild(navigation);
  return section;
}

function createArrowButton(direction) {
  const button = document.createElement("button");
  button.className = `glide__arrow glide__arrow--${direction}`;
  button.setAttribute("data-glide-dir", direction === "left" ? "<" : ">");

  const img = document.createElement("img");
  img.src = "./assets/angle-left-solid.png";
  img.alt = `${direction} arrow`;

  button.appendChild(img);
  return button;
}

function createProgressTracker() {
  const tracker = document.createElement("div");
  tracker.className = "glide__progress";
  tracker.id = "tracker";

  for (let i = 1; i <= 3; i++) {
    const img = document.createElement("img");
    img.src = "./assets/Ellipse-Empty.png";
    img.alt = "slide off";
    img.id = `navigationImg${i}`;
    tracker.appendChild(img);
  }

  return tracker;
}

function createAddToCartButton() {
  const button = document.createElement("button");
  button.className = "sliderContainer__button";

  const h2 = document.createElement("h2");
  h2.textContent = "add to cart";

  button.appendChild(h2);
  return button;
}

function initializeGlide() {
  const pathToSlideImage = [
    "./assets/Ellipse-full.png",
    "./assets/Ellipse-Empty.png",
  ];

  const glide = new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 1,
  });

  glide.on(["mount.after", "run"], () => {
    console.log("Current Slide Index:", glide.index);
    const trackers = [
      document.getElementById("navigationImgOne"),
      document.getElementById("navigationImgTwo"),
      document.getElementById("navigationImgThree"),
    ];

    trackers.forEach((tracker, index) => {
      if (tracker) {
        tracker.src =
          index === glide.index ? pathToSlideImage[0] : pathToSlideImage[1];
      } else {
        console.warn(`Navigation image ${index + 1} not found`);
      }
    });
  });

  glide.mount();
}

// Usage
document.addEventListener("DOMContentLoaded", () => {
  createSliderComponent("Davids brand");
});